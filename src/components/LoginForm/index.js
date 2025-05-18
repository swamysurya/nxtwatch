import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  ErrorMsg,
  LoginButton,
  ShowPasswordLabel,
  PasswordCheckbox,
  ShowPasswordContaner,
  LoginCard,
  LogoImage,
  InputContainer,
  InputLabel,
  InputElement,
  LoginFormContainer,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    userPassword: '',
    showPassword: false,
    erroMsg: '',
    showError: false,
    a: '',
    b: '',
  }

  toggleShowPassword = event => {
    this.setState({showPassword: event.target.checked})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onLoginFailure = error => {
    this.setState({erroMsg: error, showError: true})
  }

  performLogin = async event => {
    event.preventDefault()
    const {usernameInput, userPassword} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: usernameInput,
      password: userPassword,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  render() {
    const {
      showPassword,
      usernameInput,
      userPassword,
      erroMsg,
      showError,
      a,
      b,
    } = this.state
    console.log(a, b)
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value

          const websiteLogo = isDarkModeEnabled
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginContainer isDarkModeEnabled={isDarkModeEnabled}>
              <LoginCard isDarkModeEnabled={isDarkModeEnabled}>
                <LogoImage src={websiteLogo} />
                <LoginFormContainer onSubmit={this.performLogin}>
                  <InputContainer isDarkModeEnabled={isDarkModeEnabled}>
                    <InputLabel htmlFor="userName">USERNAME</InputLabel>
                    <InputElement
                      placeholder="rahul"
                      value={usernameInput}
                      id="userName"
                      type="text"
                      onChange={this.onChangeUserName}
                    />
                  </InputContainer>
                  <InputContainer isDarkModeEnabled={isDarkModeEnabled}>
                    <InputLabel htmlFor="password">PASSWORD</InputLabel>
                    <InputElement
                      placeholder="rahul@2021"
                      onChange={this.onChangePassword}
                      value={userPassword}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                    />
                  </InputContainer>
                  <ShowPasswordContaner>
                    <PasswordCheckbox
                      id="showPassword"
                      type="checkbox"
                      onClick={this.toggleShowPassword}
                    />
                    <ShowPasswordLabel
                      htmlFor="showPassword"
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContaner>
                  <LoginButton type="submit">Login</LoginButton>
                </LoginFormContainer>
                <ErrorMsg showError={showError}>*{erroMsg}</ErrorMsg>
              </LoginCard>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
