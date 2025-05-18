import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

const LoaderComponent = ({isDark}) => (
  <LoaderContainer data-testid="loader" className="loader-container">
    <Loader
      type="ThreeDots"
      color={isDark ? '#ffffff' : '#3b82f6'}
      height="50"
      width="50"
    />
  </LoaderContainer>
)

export default LoaderComponent
