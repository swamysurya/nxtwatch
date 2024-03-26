import {formatDistanceToNow} from 'date-fns'
import {
  VideoThumnailsListItem,
  VideoThumbnail,
  ThumbnailImage,
  VideoInfoContainer,
  ChannelProfile,
  VideoInfo,
  VideoTitle,
  ChannelName,
  ViewCountAndTime,
  Dot,
  Dot1,
} from './styledComponents'

const VideoCard = ({videoDetails, isDark}) => (
  <VideoThumbnail to={`/videos/${videoDetails.id}`}>
    <VideoThumnailsListItem isDark={isDark}>
      <ThumbnailImage src={videoDetails.thumbnailUrl} alt="video thumbnail" />
      <VideoInfoContainer>
        <ChannelProfile
          alt="channel logo"
          src={videoDetails.channel.profileImageUrl}
        />
        <VideoInfo>
          <VideoTitle>{videoDetails.title}</VideoTitle>
          <ChannelName>
            {videoDetails.channel.name}
            <Dot1> &#8226;</Dot1>{' '}
          </ChannelName>
          <ViewCountAndTime>
            {videoDetails.viewCount}
            <Dot> &#8226;</Dot>{' '}
            {formatDistanceToNow(new Date(videoDetails.publishedAt))}
          </ViewCountAndTime>
        </VideoInfo>
      </VideoInfoContainer>
    </VideoThumnailsListItem>
  </VideoThumbnail>
)

export default VideoCard
