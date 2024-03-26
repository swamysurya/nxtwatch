import styled from 'styled-components'

export const NavBarContainer = styled.nav`
    font-family:"Roboto";
    height:60px;
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    background-color:${props =>
      props.isDarkModeEnabled ? '#212121' : '#f9f9f9'};
    @media screen and (min-width:576px){
        height:70px;
        padding:20px 40px;
    }
`

export const NxtWatchLogo = styled.img`
    height:25px;
    @media screen and (min-width:576px){
        height:30px;
    }
`
export const ActionsContainer = styled.ul`
    list-style-type:none;
    padding-left:0px;
    display:flex;
    flex-direction:row;
    align-items:center;
    @media screen and (min-width:576px){
        gap:10px;
    }
    @media screen and (min-width:768px){
        gap:20px;
    }
`
export const ActionItem = styled.li`
    padding-left:0px;
`
export const ThemeButton = styled.button`
    background-color:transparent;
    outline:none;
    border:none;
    color:${props => (!props.isDarkModeEnabled ? '#181818' : '#f9f9f9')}
    
`
export const HamMenuButton = styled(ThemeButton)`
    @media screen and (min-width:768px){
        display:none;
    }
`
export const ProfileImage = styled.img`
    height:30px;
    width:30px;
    display:none;
    @media screen and (min-width:768px){
        display:flex;
    }
`

export const LogoutIcon = styled(ThemeButton)`
    @media screen and (min-width:768px){
        display:none;
    }
`
export const LogoutButton = styled.button`
    color:${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#3b82f6')};
    background-color:transparent;
    outline:none;
    border-width:1px;
    padding:5px 18px;
    height:30px;
    border-color:${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#3b82f6')};
    display:none;
    @media screen and (min-width:768px){
        display:flex;
    }
`
export const LogoutPopUpContainer = styled.div`
    width:270px;
    height:170px;
    border-radius:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    padding:10px 20px;
    background-color:${props =>
      props.isDarkModeEnabled ? '#212121' : '#ffffff'};
    @media screen and (min-width:768px){
        width:350px;
        gap:30px;
    }
`
export const LogoutWarnMgs = styled.p`
    font-size:16px;
    text-align:center;
    margin:5px;
    color:${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#181818')};
`
export const LogoutBtnContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:20px;
    @media screen and (min-width:768px){
        gap:40px;
    }
`
export const CancelButton = styled(LogoutButton)`
    display:flex;
    border-radius:5px;
    align-items:center;
    color:${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#181818')};
    border-color:${props => (props.isDarkModeEnabled ? '#f9f9f9' : '#181818')};
    
`
export const ConfirmButton = styled.button`
    background-color:#3b82f6;
    color:#f9f9f9;
    font-family:"Roboto";
    padding:5px 18px;
    outline:none;
    border:none;
    border-radius:5px;
    height:30px;
`
