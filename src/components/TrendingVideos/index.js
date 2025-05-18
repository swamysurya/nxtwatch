import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import VideoCard from '../VideoCard'

import {
  TrendigVideosContainer,
  TrendingVideosDownContainer,
  TrendingVideosRightSection,
  TrendingVideosUlContainer,
  BannerContainer,
  SectionIcon,
  SectionName,
  RightSection,
} from './styledComponents'
import LoaderComponent from '../Loader'
import FailureComp from '../FailureComp'
import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import ThemeContext from '../../context/ThemeContext'

const apiUrlConst = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class TrendingVideos extends Component {
  state = {
    apiUrlStatus: apiUrlConst.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiUrlStatus: apiUrlConst.loading})
    const tradingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(tradingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        total: data.total,
        videos: data.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          channel: {
            name: eachItem.channel.name,
            profileImageUrl: eachItem.channel.profile_image_url,
          },
          viewCount: eachItem.view_count,
          publishedAt: eachItem.published_at,
        })),
      }
      this.setState({
        videosList: updatedData.videos,
        apiUrlStatus: apiUrlConst.success,
      })
    } else {
      this.setState({apiUrlStatus: apiUrlConst.failure})
    }
  }

  renderLoading = isDark => <LoaderComponent isDark={isDark} />

  renderSuccessView = isDark => {
    const {videosList} = this.state
    return (
      <RightSection>
        <BannerContainer data-testid="banner" isDarkModeEnabled={isDark}>
          <SectionIcon isDarkModeEnabled={isDark}>
            <HiFire size={60} color="red" />
          </SectionIcon>
          <SectionName>Trending</SectionName>
        </BannerContainer>
        <TrendingVideosUlContainer>
          {videosList.map(eachItem => (
            <VideoCard
              key={eachItem.id}
              videoDetails={eachItem}
              isDark={isDark}
            />
          ))}
        </TrendingVideosUlContainer>
      </RightSection>
    )
  }

  renderFailureView = isDark => (
    <FailureComp isDark={isDark} handleRetry={this.getVideos} />
  )

  renderView = isDark => {
    const {apiUrlStatus} = this.state
    switch (apiUrlStatus) {
      case apiUrlConst.loading:
        return this.renderLoading(isDark)
      case apiUrlConst.success:
        return this.renderSuccessView(isDark)
      case apiUrlConst.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    const {videosList} = this.state
    console.log(videosList)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <TrendigVideosContainer
              data-testid="trending"
              isDarkModeEnabled={isDarkModeEnabled}
            >
              <NxtWatchNavBar />
              <TrendingVideosDownContainer>
                <SideNavBar />
                <TrendingVideosRightSection
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  {this.renderView(isDarkModeEnabled === true)}
                </TrendingVideosRightSection>
              </TrendingVideosDownContainer>
            </TrendigVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default TrendingVideos
