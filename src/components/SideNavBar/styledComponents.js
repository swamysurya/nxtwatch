import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideNavConatiner = styled.nav`
  font-family: 'Roboto';
  display: none;
  background-color: ${props =>
    props.isDarkModeEnabled ? '#212121' : '#f9f9f9'};
  @media screen and (min-width: 768px) {
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const SectionsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`

export const SectionItem = styled.li`
  padding-left: 25px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#1e293b')};
  background-color: ${props => {
    if (props.isTabActive) {
      if (props.isDarkModeEnabled) {
        return '#383838'
      }
      return '#cbd5e1'
    }
    return 'transparent'
  }};
`

export const LinkElement = styled(Link)`
  text-decoration: none;
`

export const SectionName = styled.p`
  font-size: 24px;
  margin: 10px;
  font-weight: 500;
`

export const ContactUsContainer = styled.div`
  display: flex;
  padding: 25px;
  flex-direction: column;
`

export const ConatatUsHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: ${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#1e293b')};
`

export const ContactUsIconsConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export const IconImage = styled.img`
  width: 40px;
  height: 40px;
`

export const EnjoyPara = styled.p`
  font-size: 20px;
  color: ${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#1e293b')};
`
