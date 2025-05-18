import {
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureViewPara,
  RetryButton,
} from './styledComponents'

const FailureComp = ({isDark, handleRetry}) => {
  const imageUrl = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  return (
    <FailureViewContainer isDark={isDark}>
      <FailureViewImage src={imageUrl} alt="failure view" />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureViewPara>
        We are having some trouble to complete your request. Please try again.
      </FailureViewPara>
      <RetryButton type="button" onClick={handleRetry}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )
}

export default FailureComp
