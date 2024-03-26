import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import ThemeContext from '../../context/ThemeContext'
import {
  NavBarContainer,
  NxtWatchLogo,
  ActionsContainer,
  ActionItem,
  ThemeButton,
  HamMenuButton,
  LogoutIcon,
  ProfileImage,
  LogoutButton,
  LogoutPopUpContainer,
  LogoutWarnMgs,
  LogoutBtnContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const NxtWatchNavBar = props => {
  const onHandleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkModeEnabled, toggleTheme} = value
        const websiteLogo = isDarkModeEnabled
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavBarContainer isDarkModeEnabled={isDarkModeEnabled}>
            <Link to="/">
              <NxtWatchLogo src={websiteLogo} alt="website logo" />
            </Link>
            <ActionsContainer>
              <ActionItem>
                <ThemeButton
                  data-testid="theme"
                  onClick={toggleTheme}
                  isDarkModeEnabled={isDarkModeEnabled}
                >
                  {isDarkModeEnabled ? (
                    <BsBrightnessHigh size={30} />
                  ) : (
                    <BsMoon size={30} />
                  )}
                </ThemeButton>
              </ActionItem>
              <ActionItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HamMenuButton isDarkModeEnabled={isDarkModeEnabled}>
                  <GiHamburgerMenu size={30} />
                </HamMenuButton>
              </ActionItem>
              <ActionItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton isDarkModeEnabled={isDarkModeEnabled}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopUpContainer isDarkModeEnabled={isDarkModeEnabled}>
                      <LogoutWarnMgs isDarkModeEnabled={isDarkModeEnabled}>
                        Are you sure, you want to logout?
                      </LogoutWarnMgs>
                      <LogoutBtnContainer>
                        <CancelButton
                          onClick={() => close()}
                          isDarkModeEnabled={isDarkModeEnabled}
                        >
                          cancel
                        </CancelButton>
                        <ConfirmButton onClick={onHandleLogout}>
                          confirm
                        </ConfirmButton>
                      </LogoutBtnContainer>
                    </LogoutPopUpContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutIcon isDarkModeEnabled={isDarkModeEnabled}>
                      <FiLogOut size={30} />
                    </LogoutIcon>
                  }
                  className="popup-content"
                >
                  {close => (
                    <LogoutPopUpContainer isDarkModeEnabled={isDarkModeEnabled}>
                      <LogoutWarnMgs isDarkModeEnabled={isDarkModeEnabled}>
                        Are you sure, you want to logout?
                      </LogoutWarnMgs>
                      <LogoutBtnContainer>
                        <CancelButton
                          onClick={() => close()}
                          isDarkModeEnabled={isDarkModeEnabled}
                        >
                          cancel
                        </CancelButton>
                        <ConfirmButton onClick={onHandleLogout}>
                          confirm
                        </ConfirmButton>
                      </LogoutBtnContainer>
                    </LogoutPopUpContainer>
                  )}
                </Popup>
              </ActionItem>
            </ActionsContainer>
          </NavBarContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(NxtWatchNavBar)
