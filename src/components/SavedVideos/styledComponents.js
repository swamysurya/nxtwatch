import styled from 'styled-components'

export const SavedVideosConatiner = styled.div`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#f9f9f9'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

export const SavedVideoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const SavedVideosRightSectionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  list-style-type: none;
  padding-top: 20px;
  padding-left: 0px;
  margin-top: 0px;
`

export const RightSection = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: auto;
`

export const SavedvideosRightSection = styled.div`
  width: 50%;
  flex-grow: 1;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  gap: 20px;
  padding: 10px 50px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#181818' : '#f1f1f1'};
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#1e293b')};
`

export const SectionIcon = styled.div`
  padding: 10px;
  border-radius: 50%;
  display: flex;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#f9f9f9'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const SectionName = styled.h1`
  font-size: 30px;
  font-weight: 700;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 90vh;
`

export const NoSavedVideosImage = styled.img`
  width: 50%;
  max-width: 400px;
  flex-shrink: 1;
`

export const NoSavedVediosHeading = styled.h1`
  font-size: 28px;
`

export const NoSavedVidosPara = styled.p`
  font-size: 20px;
  margin: 0px;
`

export const VideoThumnailsListItem = styled.li`
  padding: 10px 0px;
  @media screen and (min-width: 567px) {
    display: flex;
    flex-direction: row;
    padding: 10px 0px 10px 20px;
  }
`
