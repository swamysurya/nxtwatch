import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeVideosConatiner = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  width: 100%;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`

export const VideoThumnailsListItem = styled.li`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const VideoThumbnail = styled(Link)`
  text-decoration: none;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 10px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelProfile = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  border-radius: 50%;
`

export const VideoInfo = styled.div`
  padding: 5px 15px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  margin: 4px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ChannelNameAndViewCountTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 567px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }
`

export const ChannelName = styled.p`
  font-size: 16px;
  margin: 5px 0px 0px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    display: block;
  }
`

export const ViewCountAndTime = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ViewCount = styled.p`
  font-size: 16px;
  margin: 0px;
`

export const Time = styled.p`
  font-size: 16px;
  margin: 0px;
`

export const Dot = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const NoVideosImage = styled.img`
  width: 40%;
  flex-shrink: 1;
`

export const NoViedoesHeading = styled.h1`
  font-size: 26px;
  margin: 5px 0px;
  text-align: center;
`

export const NoVideosPara = styled.p`
  font-size: 22px;
  margin: 10px 0px;
  text-align: center;
  width: 70%;
  color: #94a3b8;
`

export const RetryButton = styled.button`
  width: 100px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #4f46e5;
  font-weight: 600;
  color: #ffffff;
`
