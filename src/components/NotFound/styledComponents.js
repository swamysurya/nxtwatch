import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  font-family: 'roboto';
`

export const NotFoundDownSection = styled.div`
  display: flex;
  height: 100vh;
`

export const RightSide = styled.div`
  background-color: ${props =>
    props.isDarkModeEnabled ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const NotFoundImage = styled.img`
  height: 60vh;
`

export const NotFoundHeading = styled.h1`
  font-size: 32px;
  color: ${props => (props.isDarkModeEnabled ? '#ffffff' : '#1e293b')};
`

export const NotFoundPara = styled.p`
  font-size: 20px;
  margin: 0px;
  color: #475569;
`
