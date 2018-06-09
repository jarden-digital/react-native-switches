import * as React from 'react'
import {View, StyleSheet} from 'react-native'

export type IProps = {}

export type IState = {}

export enum SwitchTypes {
}


class Switches extends React.PureComponent<IProps, IState> {

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

export default Switches

let styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
