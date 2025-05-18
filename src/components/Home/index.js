import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import LoaderComponent from '../Loader'
import FailureComp from '../FailureComp'

import {
  HomeContainer,
  HomeDownSection,
  RightHomeContainer,
  BannerContainer,
  BannerLeftPart,
  NxtWatchLogo,
  BannerContent,
  GetItNowButton,
  CloseBtn,
  SearchContainer,
  SearchInputEle,
  SearchButton,
} from './styledComponents'
import NxtWatchNavBar from '../NxtWatchNavBar'
import SideNavBar from '../SideNavBar'
import HomeVideos from '../HomeVideos'
import ThemeContext from '../../context/ThemeContext'

const apiUrlConst = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    apiUrlStatus: apiUrlConst.initial,
    isBannerClosed: false,
    searchInputValue: '',
    videosObject: {},
  }

  componentDidMount() {
    this.getVideos()
  }

  handleRetry = () => {
    this.setState({searchInputValue: ''}, this.getVideos)
  }

  getVideos = async () => {
    this.setState({apiUrlStatus: apiUrlConst.loading})
    const {searchInputValue} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = {
        videos: data.videos.map(eachvideo => ({
          channel: {
            name: eachvideo.channel.name,
            profileImageUrl: eachvideo.channel.profile_image_url,
          },
          id: eachvideo.id,
          publishedAt: eachvideo.published_at,
          thumbnailUrl: eachvideo.thumbnail_url,
          title: eachvideo.title,
          viewCount: eachvideo.view_count,
        })),
        total: data.total,
      }
      this.setState({
        videosObject: updatedData,
        apiUrlStatus: apiUrlConst.success,
      })
    } else {
      this.setState({apiUrlStatus: apiUrlConst.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  closeBanner = () => this.setState({isBannerClosed: true})

  renderLoading = isDark => <LoaderComponent isDark={isDark} />

  renderSuccessView = () => {
    const {videosObject} = this.state
    return (
      <HomeVideos videosObject={videosObject} handleRetry={this.handleRetry} />
    )
  }

  renderFailureView = isDark => (
    <FailureComp isDark={isDark} handleRetry={this.handleRetry} />
  )

  renderView = isDark => {
    const {apiUrlStatus} = this.state
    switch (apiUrlStatus) {
      case apiUrlConst.loading:
        return this.renderLoading(isDark)
      case apiUrlConst.success:
        return this.renderSuccessView()
      case apiUrlConst.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  Banner = () => {
    const {isBannerClosed} = this.state
    return (
      <BannerContainer data-testid="banner" isBannerClosed={isBannerClosed}>
        <BannerLeftPart>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerContent>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerContent>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </BannerLeftPart>
        <CloseBtn type="button" data-testid="close" onClick={this.closeBanner}>
          <AiOutlineClose size={20} />
        </CloseBtn>
      </BannerContainer>
    )
  }

  render() {
    const {searchInputValue} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkModeEnabled} = value
          return (
            <HomeContainer
              data-testid="home"
              isDarkModeEnabled={isDarkModeEnabled}
            >
              <NxtWatchNavBar />
              <HomeDownSection>
                <SideNavBar />
                <RightHomeContainer isDarkModeEnabled={isDarkModeEnabled}>
                  {this.Banner()}
                  <SearchContainer isDarkModeEnabled={isDarkModeEnabled}>
                    <SearchInputEle
                      placeholder="Search"
                      type="search"
                      value={searchInputValue}
                      isDarkModeEnabled={isDarkModeEnabled}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      onClick={this.getVideos}
                      isDarkModeEnabled={isDarkModeEnabled}
                    >
                      <AiOutlineSearch size={20} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderView(isDarkModeEnabled === true)}
                </RightHomeContainer>
              </HomeDownSection>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
