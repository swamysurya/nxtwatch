import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import ThemeContext from '../../context/ThemeContext'

import {
  NotFoundContainer,
  NotFoundDownSection,
  RightSide,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkModeEnabled} = value
      const imageUrl = isDarkModeEnabled
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundContainer>
          <NxtWatchNavBar />
          <NotFoundDownSection>
            <SideNavBar />
            <RightSide isDarkModeEnabled={isDarkModeEnabled}>
              <NotFoundImage src={imageUrl} alt="not found" />
              <NotFoundHeading isDarkModeEnabled={isDarkModeEnabled}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </RightSide>
          </NotFoundDownSection>
        </NotFoundContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
