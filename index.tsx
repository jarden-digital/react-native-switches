import * as React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Animate} from 'react-move'
import {easeQuadIn} from 'd3-ease'

export type IProps = {
  animationDuration?: number
  buttonColor?: string
  buttonHeight?: number
  buttonOffsetLeft?: number
  buttonOffsetRight?: number
  buttonWidth?: number
  colorSwitchOff?: string
  colorSwitchOn?: string
  colorTextOff?: string
  colorTextOn?: string
  defaultValue?: boolean
  easingFunction?: any // fixme any
  onChange?: (switchOn: boolean) => void
  shape: Shapes
  sliderHeight?: number
  sliderWidth?: number
  spaceBetween?: number
  textFont?: string
  textOff?: string
  textOn?: string
  textSize?: number
}

enum Shapes {
  pill = 'pill',
  line = 'line'
}

export type IState = {
  switchOn: boolean
}

const defaultButtonOffset = 2
const defaultButtonSize = 32
const defaultButtonColor = '#FFF'
const defaultColorSwitchOff = '#D3D5DA'
const defaultColorSwitchOn = '#96CBCE'
const defaultColorTextOff = '#000' // todo put base color avec 60% opacity
const defaultColorTextOn = '#FFF'
const defaultDuration = 300
const defaultEasingFunction = easeQuadIn
const defaultSpaceBetween = 8
const defaultSwitchHeight = 36
const defaultSwitchWidth = 70
const defaultTextFont = 'courier'
const defaultTextOff = 'off'
const defaultTextOn = 'on'
const defaultTextSize = 16

class Switches extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      switchOn: this.props.defaultValue || true
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch = () => {
    if (this.props.onChange) this.props.onChange(!this.state.switchOn)
    this.setState({switchOn: !this.state.switchOn})
  }

  renderLineSwitch = () => {
    return null
  }

  renderPillSwitch = () => {
    const onColor = this.props.colorSwitchOn || defaultColorSwitchOn
    const offColor = this.props.colorSwitchOff || defaultColorSwitchOff
    const leftPosition = this.props.buttonOffsetLeft || defaultButtonOffset
    const sliderWidth = this.props.sliderWidth || defaultSwitchWidth
    const sliderHeight = this.props.sliderHeight || defaultSwitchHeight
    const buttonSize = this.props.buttonWidth || defaultButtonSize
    const buttonOffSetRight = this.props.buttonOffsetRight || defaultButtonOffset
    const rightPosition = sliderWidth - buttonSize - buttonOffSetRight
    const duration = this.props.animationDuration || defaultDuration
    const easingFunction = this.props.easingFunction || defaultEasingFunction
    const textFont = this.props.textFont || defaultTextFont
    const textSize = this.props.textSize || defaultTextSize
    const colorTextOn = this.props.colorTextOn || defaultColorTextOn
    const colorTextOff = this.props.colorTextOff || defaultColorTextOff
    const textOn = this.props.textOn || defaultTextOn
    const textOff = this.props.textOff || defaultTextOff
    const spaceBetween = this.props.spaceBetween || defaultSpaceBetween
    const buttonColor = this.props.buttonColor || defaultButtonColor
    return (<Animate
      show={true}
      start={{
        color: this.state.switchOn ? onColor : offColor,
        positionButton: this.state.switchOn ? rightPosition : leftPosition,
        opacityChildren: this.state.switchOn ? 1 : 0
      }}
      update={{
        color: [this.state.switchOn ? onColor : offColor],
        positionButton: [this.state.switchOn ? rightPosition : leftPosition],
        opacityChildren: this.state.switchOn ? [1] : [0],
        timing: {duration: duration, ease: easingFunction}
      }}>
      {(state: any) => (
        <View>
          <View style={{width: '100%'}}>
            <TouchableOpacity activeOpacity={1} onPress={() => this.handleSwitch()}
                              style={{
                                backgroundColor: state.color, height: sliderHeight, width: sliderWidth,
                                borderRadius: sliderHeight / 2, position: 'relative', justifyContent: 'center',
                                alignItems: 'center'
                              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontFamily: textFont, fontSize: textSize, color: colorTextOn, marginRight: spaceBetween / 2}}>
                  {textOn}
                </Text>
                <Text
                  style={{fontFamily: textFont, fontSize: textSize, color: colorTextOff, marginLeft: spaceBetween / 2}}>
                  {textOff}
                </Text>
              </View>
              <View style={{
                left: state.positionButton,
                position: 'absolute',
                backgroundColor: buttonColor,
                width: buttonSize,
                height: buttonSize,
                borderRadius: buttonSize / 2
              }}/>
            </TouchableOpacity>
          </View>
          <View style={{opacity: state.opacityChildren}}>
            {this.props.children}
          </View>
        </View>
      )}
    </Animate>)
  }

  renderSwitches = () => {
    switch (this.props.shape) {
      case Shapes.line:
        return this.renderLineSwitch()
      case Shapes.pill:
        return this.renderPillSwitch()
      default:
        return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSwitches()}
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

// SKINNY ONE

//   <Animate
// show={true}
// start={{
//   colorNo: !this.state.switchOn ? '#7BCDD0' : '#E8EAEC',
//     colorYes: this.state.switchOn ? '#7BCDD0' : '#E8EAEC',
//     positionButton: this.state.switchOn ? 25 : 0,
//     opacityPep: this.state.switchOn ? 1 : 0
// }}
// update={{
//   colorNo: [!this.state.switchOn ? '#7BCDD0' : '#E8EAEC'],
//     colorYes: [this.state.switchOn ? '#7BCDD0' : '#E8EAEC'],
//     positionButton: [this.state.switchOn ? 25 : 0],
//     opacityPep: [this.state.switchOn ? 1 : 0],
//     timing: {duration: 300, ease: easeQuadIn}
// }}>
// {(state: any) => (
//   <View style={{width: '100%'}}>
//     <View style={[pagesStyles.section, {alignItems: 'flex-end', width: '100%'}]}>
//       <View style={[pagesStyles.row, {justifyContent: 'center', alignItems: 'center'}]}>
//         <Text style={{fontFamily: grid.fontBold, color: state.colorNo, marginRight: 10}}>No</Text>
//         <View style={{position: 'relative', paddingRight: 10, paddingLeft: 10}}>
//           <View style={{height: 6, width: 25, backgroundColor: '#E8EAEC', borderRadius: 3}}/>
//           <TouchableOpacity activeOpacity={1} style={[pagesStyles.buttonSwitch, {left: state.positionButton}]}
//                             onPress={() => this.setState({switchOn: !this.state.switchOn})}/>
//         </View>
//         <Text style={{fontFamily: grid.fontBold, color: state.colorYes, marginLeft: 10}}>Yes</Text>
//       </View>
//     </View>
//     <View style={[pagesStyles.section, {opacity: state.opacityPep}]}>
//     </View>
//   </View>
// )}
// </Animate>


// buttonSwitch: {
//   position: 'absolute',
//     top: -7,
//     width: 20,
//     height: 20,
//     borderRadius: 20,
//     backgroundColor: 'rgb(150, 203, 206)'
// },


//   <Switch
// value={true}
// onValueChange={(val) => console.log(val)}
// disabled={false}
// activeText={'On'}
// inActiveText={'Off'}
// circleSize={30}
// barHeight={1}
// circleBorderWidth={3}
// backgroundActive={'green'}
// backgroundInactive={'gray'}
// circleActiveColor={'#30a566'}
// circleInActiveColor={'#000000'}
// changeValueImmediately={true}
// renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
// changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
// innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
// outerCircleStyle={{}} // style for outer animated circle
// renderActiveText={false}
// renderInActiveText={false}
// switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
// switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
// switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
// />