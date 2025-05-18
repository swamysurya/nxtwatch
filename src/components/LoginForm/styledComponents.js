import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeEnabled ? '#212121' : '#ffffff'};
`

export const LoginCard = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#ffffff'};
  box-shadow: ${props =>
    props.isDarkModeEnabled ? 'none' : '0px 0px 5px lightgray'};
  gap: 10px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 50px 40px;
  }
`

export const LogoImage = styled.img`
  height: 50px;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  width: 100%;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#7e858e')};
`

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`

export const InputElement = styled.input`
  width: 100%;
  height: 50px;
  margin: 15px 0px;
  border-width: 1px;
  border-color: #94a3b8;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  background-color: transparent;
  font-size: 16px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#7e858e')};
`

export const ShowPasswordContaner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const PasswordCheckbox = styled.input`
  height: 20px;
  width: 20px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#181818')};
`

export const LoginButton = styled.button`
  margin-top: 10px;
  height: 50px;
  width: 100%;
  background-color: #3b82f6;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  font-family: 'Roboto';
  outline: none;
`

export const ErrorMsg = styled.p`
  font-size: 18px;
  width: 100%;
  color: #ff0000;
  margin-top: 5px;
  display: ${props => (props.showError ? 'flex' : 'none')};
`

export const LoginFormContainer = styled.form`
  width: 100%;
`
