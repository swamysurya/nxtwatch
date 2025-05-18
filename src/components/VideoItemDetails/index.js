import {Component} from 'react'

import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import LoaderComponent from '../Loader'
import FailureComp from '../FailureComp'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemDetailsConatainer,
  VideoDetailsDownSection,
  VideoDetailsRightSection,
  PlayerContainer,
  VideoTitle,
  ViewsAndActionsContainer,
  ViewCountTime,
  Dot,
  ActionsConatiner,
  ActionButton,
  HorizontalLine,
  ChannelProfileAndDescriptionContainer,
  ChannelProfile,
  ChannelNameAndDescriptionInfoContainer,
  ChannelName,
  SubscribersCount,
  Description,
  SavedActionButton,
} from './styledComponents'

const apiUrlConst = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisliked: false,
    videoDetailsObj: {},
    apiUrlStatus: apiUrlConst.initial,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiUrlStatus: apiUrlConst.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updateData = {
        videoDetailsObj: (data.video_details = {
          id: data.video_details.id,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
          thumbnailUrl: data.video_details.thumbnail_url,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          viewCount: data.video_details.view_count,
          channel: (data.video_details.channel = {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          }),
        }),
      }
      this.setState({
        videoDetailsObj: updateData.videoDetailsObj,
        apiUrlStatus: apiUrlConst.success,
      })
    } else {
      this.setState({
        apiUrlStatus: apiUrlConst.failure,
      })
    }
  }

  onHandleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onHandleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderLoading = isDark => <LoaderComponent isDark={isDark} />

  renderSuccessView = (handleSavedVideo, savedVideosList) => {
    const {videoDetailsObj, isDisliked, isLiked} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const isThere = savedVideosList.some(eachItem => eachItem.id === id)
    return (
      <VideoDetailsRightSection>
        <PlayerContainer>
          <ReactPlayer
            width="100%"
            height="100%"
            url={videoDetailsObj.videoUrl}
          />
        </PlayerContainer>
        <VideoTitle>{videoDetailsObj.title}</VideoTitle>
        <ViewsAndActionsContainer>
          <ViewCountTime>
            {videoDetailsObj.viewCount} views
            <Dot> &#8226;</Dot>
            {videoDetailsObj.publishedAt}
          </ViewCountTime>
          <ActionsConatiner>
            <ActionButton
              type="button"
              onClick={this.onHandleLike}
              isLiked={isLiked}
            >
              <AiOutlineLike size={25} />
              Like
            </ActionButton>
            <ActionButton
              type="button"
              onClick={this.onHandleDislike}
              isLiked={isDisliked}
            >
              <AiOutlineDislike size={25} />
              Dislike
            </ActionButton>
            <SavedActionButton
              isThere={isThere}
              onClick={() => handleSavedVideo(videoDetailsObj)}
            >
              <BiListPlus size={25} />
              {isThere ? 'Saved' : 'Save'}
            </SavedActionButton>
          </ActionsConatiner>
        </ViewsAndActionsContainer>
        <HorizontalLine />
        <ChannelProfileAndDescriptionContainer>
          <ChannelProfile
            src={videoDetailsObj.channel.profileImageUrl}
            alt="channel logo"
          />
          <ChannelNameAndDescriptionInfoContainer>
            <ChannelName>{videoDetailsObj.channel.name}</ChannelName>
            <SubscribersCount>
              {videoDetailsObj.channel.subscriberCount} Subscribers
            </SubscribersCount>
            <Description>{videoDetailsObj.description}</Description>
          </ChannelNameAndDescriptionInfoContainer>
        </ChannelProfileAndDescriptionContainer>
      </VideoDetailsRightSection>
    )
  }

  renderFailureView = isDark => (
    <FailureComp isDark={isDark} handleRetry={this.handleRetry} />
  )

  renderView = (isDark, handleSavedVideo, savedVideosList) => {
    const {apiUrlStatus} = this.state
    switch (apiUrlStatus) {
      case apiUrlConst.loading:
        return this.renderLoading(isDark)
      case apiUrlConst.success:
        return this.renderSuccessView(handleSavedVideo, savedVideosList)
      case apiUrlConst.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled, savedVideosList, handleSavedVideo} = value
          console.log(savedVideosList)

          return (
            <VideoItemDetailsConatainer
              data-testid="videoItemDetails"
              isDarkModeEnabled={isDarkModeEnabled}
            >
              <NxtWatchNavBar />
              <VideoDetailsDownSection>
                <SideNavBar />
                {this.renderView(
                  isDarkModeEnabled === true,
                  handleSavedVideo,
                  savedVideosList,
                )}
              </VideoDetailsDownSection>
            </VideoItemDetailsConatainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
