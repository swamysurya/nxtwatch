import styled from 'styled-components'

export const VideoItemDetailsConatainer = styled.div`
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#f9f9f9'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

export const VideoDetailsDownSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

export const VideoDetailsRightSection = styled.div`
  width: 50%;
  flex-grow: 1;
  overflow-y: auto;
`

export const PlayerContainer = styled.div`
  height: 50vh;
  @media screen and (min-width: 769px) {
    padding: 20px;
    height: 70vh;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const VideoTitle = styled.p`
  font-size: 20px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const ViewCountTime = styled.p`
  font-size: 16px;
  margin: 5px 0px;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

export const ViewsAndActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #94a3b8;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ActionsConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px 0px;

  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`

export const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  outline: none;
  font-size: 20px;
  border: none;
`

export const SavedActionButton = styled(ActionButton)`
  color: ${props => (props.isThere ? '#2563eb' : '#64748b')};
`

export const HorizontalLine = styled.hr`
  border-style: solid;
  width: 100%;
  color: #94a3b8;
  border-width: 1px;
`

export const ChannelProfileAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const ChannelProfile = styled.img`
  height: 70px;
  width: 70px;
  padding-top: 10px;
`

export const ChannelNameAndDescriptionInfoContainer = styled.div`
  padding-left: 20px;
`

export const ChannelName = styled.p`
  font-size: 20px;
  margin: 5px 0px;
`

export const SubscribersCount = styled.p`
  font-size: 20px;
  margin: 10px 0px;
  color: #94a3b8;
`

export const Description = styled.p`
  font-size: 20px;
  margin: 15px 0px;
`
