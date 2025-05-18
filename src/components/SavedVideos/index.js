import {HiFire} from 'react-icons/hi'
import VideoCard from '../VideoCard'

import {
  SavedVideosConatiner,
  SavedVideoSection,
  SavedvideosRightSection,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVediosHeading,
  SavedVideosRightSectionContainer,
  NoSavedVidosPara,
  BannerContainer,
  RightSection,
  SectionIcon,
  SectionName,
} from './styledComponents'
import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import ThemeContext from '../../context/ThemeContext'

const SavedVideos = () => {
  const NoSavedVideosView = () => (
    <NoSavedVideosContainer>
      <NoSavedVideosImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedVediosHeading>No saved videos found</NoSavedVediosHeading>
      <NoSavedVidosPara>
        You can save your videos while watching them
      </NoSavedVidosPara>
    </NoSavedVideosContainer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {savedVideosList, isDarkModeEnabled} = value

        return (
          <SavedVideosConatiner
            data-testid="savedVideos"
            isDarkModeEnabled={isDarkModeEnabled}
          >
            <NxtWatchNavBar />
            <SavedVideoSection>
              <SideNavBar />
              <SavedvideosRightSection>
                {savedVideosList.length === 0 ? (
                  <NoSavedVideosView />
                ) : (
                  <RightSection>
                    <BannerContainer isDarkModeEnabled={isDarkModeEnabled}>
                      <SectionIcon isDarkModeEnabled={isDarkModeEnabled}>
                        <HiFire size={60} color="red" />
                      </SectionIcon>
                      <SectionName>Saved Videos</SectionName>
                    </BannerContainer>
                    <SavedVideosRightSectionContainer>
                      {savedVideosList.map(eachVideo => (
                        <VideoCard
                          key={eachVideo.id}
                          videoDetails={eachVideo}
                          isDark={isDarkModeEnabled}
                        />
                      ))}
                    </SavedVideosRightSectionContainer>
                  </RightSection>
                )}
              </SavedvideosRightSection>
            </SavedVideoSection>
          </SavedVideosConatiner>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
