import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TredingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  // this state is nothing but a react context value
  // the methods and properies are spread over the website by react context provider
  state = {
    isDarkModeEnabled: false,
    activeSectionID: 'HOME',
    savedVideosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkModeEnabled: !prevState.isDarkModeEnabled,
    }))
  }

  onChangeSection = id => {
    this.setState({activeSectionID: id})
  }

  handleSavedVideo = videoItem => {
    const {savedVideosList} = this.state
    const foundedObj = savedVideosList.find(
      eachItem => eachItem.id === videoItem.id,
    )

    if (foundedObj !== undefined) {
      const filterdList = savedVideosList.filter(
        eachItem => eachItem.id !== videoItem.id,
      )
      this.setState({savedVideosList: [...filterdList]})
    } else {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }))
    }
  }

  render() {
    const {activeSectionID, isDarkModeEnabled, savedVideosList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkModeEnabled,
          toggleTheme: this.toggleTheme,
          activeSectionID,
          savedVideosList,
          onChangeSection: this.onChangeSection,
          handleSavedVideo: this.handleSavedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TredingVideos} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
