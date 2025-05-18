import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  HomeVideosConatiner,
  VideoThumnailsListItem,
  ThumbnailImage,
  VideoInfoContainer,
  ChannelProfile,
  VideoInfo,
  VideoTitle,
  VideoThumbnail,
  ChannelName,
  ViewCountAndTime,
  ViewCount,
  Time,
  NoVideosContainer,
  Dot,
  ChannelNameAndViewCountTime,
  NoVideosImage,
  NoViedoesHeading,
  NoVideosPara,
  RetryButton,
} from './styledComponents'

class HomeVideos extends Component {
  render() {
    const {videosObject, handleRetry} = this.props
    const {videos, total} = videosObject

    const VideoCard = ({videoDetails, isDark}) => (
      <VideoThumbnail to={`/videos/${videoDetails.id}`}>
        <VideoThumnailsListItem isDark={isDark}>
          <ThumbnailImage
            src={videoDetails.thumbnailUrl}
            alt="video thumbnail"
          />
          <VideoInfoContainer>
            <ChannelProfile
              src={videoDetails.channel.profileImageUrl}
              alt="channel logo"
            />
            <VideoInfo>
              <VideoTitle>{videoDetails.title}</VideoTitle>
              <ChannelNameAndViewCountTime>
                <ChannelName>{videoDetails.channel.name}</ChannelName>
                <ViewCountAndTime>
                  <ViewCount>{videoDetails.viewCount} views </ViewCount>
                  <Dot> &#8226;</Dot>
                  <Time>{videoDetails.publishedAt}</Time>
                </ViewCountAndTime>
              </ChannelNameAndViewCountTime>
            </VideoInfo>
          </VideoInfoContainer>
        </VideoThumnailsListItem>
      </VideoThumbnail>
    )

    const NoVides = ({isDark}) => (
      <NoVideosContainer isDark={isDark}>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoViedoesHeading>No Search results found</NoViedoesHeading>
        <NoVideosPara>
          Try different key words or remove search filter
        </NoVideosPara>
        <RetryButton onClick={handleRetry}>Retry</RetryButton>
      </NoVideosContainer>
    )

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <HomeVideosConatiner>
              {total > 0 ? (
                videos.map(eachVideo => (
                  <VideoCard
                    isDark={isDarkModeEnabled}
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
                ))
              ) : (
                <NoVides isDark={isDarkModeEnabled === true} />
              )}
            </HomeVideosConatiner>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default HomeVideos
