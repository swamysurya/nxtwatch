import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeEnabled ? '#181818' : '#f9f9f9'};
`

export const HomeDownSection = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: row;
`

export const RightHomeContainer = styled.div`
  width: 50%;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#000000' : '#f9f9f9'};
`

export const BannerContainer = styled.div`
  display: ${props => (props.isBannerClosed ? 'none' : 'flex')};
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
`

export const BannerLeftPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
`

export const NxtWatchLogo = styled.img`
  height: 30px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
`

export const BannerContent = styled.p`
  font-size: 22px;
`

export const GetItNowButton = styled.button`
  outline: none;
  padding: 10px;
  border-color: black;
  margin-top: 10px;
  border-width: 1px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`

export const CloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`

export const SearchContainer = styled.div`
  margin: 22px;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

export const SearchInputEle = styled.input`
  flex-grow: 2;
  outline: none;
  border: none;
  height: 40px;
  padding-left: 15px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#0f0f0f')};
  background-color: transparent;
`

export const SearchButton = styled.button`
  width: 60px;
  outline: none;
  border: none;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#383838' : '#cbd5e1'};
  height: 40px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`
