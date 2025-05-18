import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoThumnailsListItem = styled.li`
  padding: 10px 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (min-width: 567px) {
    display: flex;
    flex-direction: row;
    padding: 10px 0px 10px 20px;
  }
`

export const VideoThumbnail = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 567px) {
    width: 300px;
    height: 180px;
  }
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
`

export const ChannelProfile = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  border-radius: 50%;
  @media screen and (min-width: 567px) {
    display: none;
  }
`

export const VideoInfo = styled.div`
  padding: 5px 15px;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  margin: 4px 0px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`

export const ChannelName = styled.p`
  font-size: 16px;
  margin: 10px 0px;
  display: inline;
  color: #64748b;
  @media screen and (min-width: 567px) {
    font-size: 20px;
    display: block;
  }
`

export const ViewCountAndTime = styled.p`
  font-size: 16px;
  display: inline;
  margin: 5px 0px;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    display: block;
  }
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`
