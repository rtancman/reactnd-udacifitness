import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import History from './components/History'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    )
  }
}