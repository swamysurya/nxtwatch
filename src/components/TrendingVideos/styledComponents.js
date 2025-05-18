import styled from 'styled-components'

export const TrendigVideosContainer = styled.div`
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#f9f9f9'};
`

export const RightSection = styled.div`
  height: 100vh;
  overflow-y: auto;
`

export const TrendingVideosDownContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: row;
`

export const TrendingVideosRightSection = styled.div`
  width: 70%;
  flex-grow: 1;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#000000')};
`

export const TrendingVideosUlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-family: 'Roboto';
  list-style-type: none;
  padding-left: 0px;
`

export const LoaderContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
`

export const FailureViewImage = styled.img`
  width: 40%;
  flex-shrink: 1;
`

export const FailureHeading = styled.h1`
  font-size: 26px;
  margin: 5px 0px;
  text-align: center;
`

export const FailureViewPara = styled.p`
  font-size: 22px;
  text-align: center;
  width: 70%;
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

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 100%;
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
