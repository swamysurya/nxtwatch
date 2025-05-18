import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  min-height: 100vh;
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
