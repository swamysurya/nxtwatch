import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {
  SideNavConatiner,
  SectionsContainer,
  SectionItem,
  SectionName,
  ContactUsContainer,
  ContactUsIconsConatiner,
  IconImage,
  EnjoyPara,
  ConatatUsHeading,
  LinkElement,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const SideNavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeEnabled, activeSectionID, onChangeSection} = value
      const handleSectionClick = id => {
        onChangeSection(id)
      }

      return (
        <SideNavConatiner isDarkModeEnabled={isDarkModeEnabled}>
          <SectionsContainer>
            <LinkElement to="/">
              <SectionItem
                isDarkModeEnabled={isDarkModeEnabled}
                onClick={() => handleSectionClick('HOME')}
                isTabActive={activeSectionID === 'HOME'}
              >
                <AiFillHome
                  size={30}
                  color={activeSectionID === 'HOME' ? '#ff0000' : '#383838'}
                />
                <SectionName>Home</SectionName>
              </SectionItem>
            </LinkElement>
            <LinkElement to="/trending">
              <SectionItem
                isDarkModeEnabled={isDarkModeEnabled}
                onClick={() => handleSectionClick('TRENDING')}
                isTabActive={activeSectionID === 'TRENDING'}
              >
                <HiFire
                  size={30}
                  color={activeSectionID === 'TRENDING' ? '#ff0000' : '#383838'}
                />
                <SectionName>Trending</SectionName>
              </SectionItem>
            </LinkElement>
            <LinkElement to="/gaming">
              <SectionItem
                isDarkModeEnabled={isDarkModeEnabled}
                onClick={() => handleSectionClick('GAMING')}
                isTabActive={activeSectionID === 'GAMING'}
              >
                <SiYoutubegaming
                  size={30}
                  color={activeSectionID === 'GAMING' ? '#ff0000' : '#383838'}
                />
                <SectionName>Gaming</SectionName>
              </SectionItem>
            </LinkElement>
            <LinkElement to="/saved-videos">
              <SectionItem
                isDarkModeEnabled={isDarkModeEnabled}
                onClick={() => handleSectionClick('SAVED-VIDEOS')}
                isTabActive={activeSectionID === 'SAVED-VIDEOS'}
              >
                <CgPlayListAdd
                  size={30}
                  color={
                    activeSectionID === 'SAVED-VIDEOS' ? '#ff0000' : '#383838'
                  }
                />
                <SectionName>Saved videos</SectionName>
              </SectionItem>
            </LinkElement>
          </SectionsContainer>
          <ContactUsContainer>
            <ConatatUsHeading isDarkModeEnabled={isDarkModeEnabled}>
              CONTACT US
            </ConatatUsHeading>
            <ContactUsIconsConatiner>
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <IconImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsIconsConatiner>
            <EnjoyPara isDarkModeEnabled={isDarkModeEnabled}>
              Enjoy! Now to see your channels and recommendations!
            </EnjoyPara>
          </ContactUsContainer>
        </SideNavConatiner>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavBar
