import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GamingVideosContainer,
  GamingVideosDownContainer,
  GamingVideosRightSection,
  RightSection,
  BannerContainer,
  SectionIcon,
  SectionName,
  GamingVideosListContainer,
  GameCardLink,
  GameListItem,
  GameThumnailImage,
  GameTitle,
  ViewCount,
} from './styledComponents'
import LoaderComponent from '../Loader'
import FailureComp from '../FailureComp'
import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import ThemeContext from '../../context/ThemeContext'

const apiUrlConst = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class GamingVideos extends Component {
  state = {
    apiUrlStatus: apiUrlConst.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiUrlStatus: apiUrlConst.loading})
    const tradingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(tradingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        total: data.total,
        videos: data.videos.map(eachItem => ({
          id: eachItem.id,
          title: eachItem.title,
          thumbnailUrl: eachItem.thumbnail_url,
          viewCount: eachItem.view_count,
        })),
      }
      this.setState({
        videosList: updatedData.videos,
        apiUrlStatus: apiUrlConst.success,
      })
    } else {
      this.setState({apiUrlStatus: apiUrlConst.failure})
    }
  }

  renderLoading = isDark => <LoaderComponent isDark={isDark} />

  renderSuccessView = isDark => {
    const {videosList} = this.state
    return (
      <RightSection>
        <BannerContainer data-testid="banner" isDarkModeEnabled={isDark}>
          <SectionIcon isDarkModeEnabled={isDark}>
            <SiYoutubegaming size={60} color="red" />
          </SectionIcon>
          <SectionName>Gaming</SectionName>
        </BannerContainer>
        <GamingVideosListContainer>
          {videosList.map(eachItem => (
            <GameCardLink to={`/videos/${eachItem.id}`} key={eachItem.id}>
              <GameListItem>
                <GameThumnailImage src={eachItem.thumbnailUrl} />
                <GameTitle isDark={isDark}>{eachItem.title}</GameTitle>
                <ViewCount>{eachItem.viewCount} Watching Worldwide</ViewCount>
              </GameListItem>
            </GameCardLink>
          ))}
        </GamingVideosListContainer>
      </RightSection>
    )
  }

  renderFailureView = isDark => (
    <FailureComp isDark={isDark} handleRetry={this.getVideos} />
  )

  renderView = isDark => {
    const {apiUrlStatus} = this.state
    switch (apiUrlStatus) {
      case apiUrlConst.loading:
        return this.renderLoading(isDark)
      case apiUrlConst.success:
        return this.renderSuccessView(isDark)
      case apiUrlConst.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <GamingVideosContainer
              isDarkModeEnabled={isDarkModeEnabled}
              data-testid="gaming"
            >
              <NxtWatchNavBar />
              <GamingVideosDownContainer>
                <SideNavBar />
                <GamingVideosRightSection>
                  {this.renderView(isDarkModeEnabled === true)}
                </GamingVideosRightSection>
              </GamingVideosDownContainer>
            </GamingVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default GamingVideos
