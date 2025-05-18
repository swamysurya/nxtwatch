import React from 'react'

const ThemeContext = React.createContext({
  isDarkModeEnabled: '',
  activeSectionID: '',
  savedVideosList: [],
  onChangeSection: () => {},
  toggleTheme: () => {},
  handleSavedVideo: () => {},
})

export default ThemeContext
