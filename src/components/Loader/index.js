import {LoaderContainer} from './styledComponents'
import Loader from 'react-loader-spinner'

const LoaderComponent = ({isDark}) => (
  <LoaderContainer className="loader-container" data-testid="loader">
    <Loader
      type="ThreeDots"
      color={isDark ? '#ffffff' : '#3b82f6'}
      height="50"
      width="50"
    />
  </LoaderContainer>
)

export default LoaderComponent
