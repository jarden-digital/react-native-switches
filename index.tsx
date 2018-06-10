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
  easingFunction?: () => void
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

const defaultButtonOffsetLine = 0
const defaultButtonOffsetPill = 2
const defaultButtonSize = 32
const defaultButtonColor = '#FFF'
const defaultColorSwitchOff = '#D3D5DA'
const defaultColorSwitchOn = '#96CBCE'
const defaultColorTextOffLine = '#7BCDD0'
const defaultColorTextOnLine = '#E8EAEC'
const defaultColorTextOffPill = '#445878'
const defaultColorTextOnPill = '#FFF'
const defaultDuration = 300
const defaultEasingFunction = easeQuadIn
const defaultSpaceBetweenLine = 20
const defaultSpaceBetweenPill = 8
const defaultSwitchHeightLine = 6
const defaultSwitchWidthLine = 25
const defaultSwitchHeightPill = 36
const defaultSwitchWidthPill = 70
const defaultTextFont = 'courier'
const defaultTextOffLine = 'No'
const defaultTextOnLine = 'Yes'
const defaultTextOffPill = 'off'
const defaultTextOnPill = 'on'
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
    const buttonOffsetLeft = this.props.buttonOffsetLeft || defaultButtonOffsetLine
    const buttonOffsetRight = this.props.buttonOffsetRight || defaultButtonOffsetLine
    const easingFunction = this.props.easingFunction || defaultEasingFunction
    const duration = this.props.animationDuration || defaultDuration
    const colorTextOn = this.props.colorTextOn || defaultColorTextOnLine
    const colorTextOff = this.props.colorTextOff || defaultColorTextOffLine
    const textFont = this.props.textFont || defaultTextFont
    const textOn = this.props.textOn || defaultTextOnPill
    const textOff = this.props.textOff || defaultTextOffPill
    const sliderHeight = this.props.sliderHeight || defaultSwitchHeightLine
    const sliderWidth = this.props.sliderWidth || defaultSwitchWidthLine
    const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenPill
    return (
      <Animate
        show={true}
        start={{
          colorNo: this.state.switchOn ? colorTextOff : colorTextOn,
          colorYes: this.state.switchOn ? colorTextOn : colorTextOff,
          positionButton: this.state.switchOn ? sliderWidth - buttonOffsetRight : 0 + buttonOffsetLeft,
          opacityChildren: this.state.switchOn ? 1 : 0
        }}
        update={{
          colorNo: [this.state.switchOn ? colorTextOff : colorTextOn],
          colorYes: [this.state.switchOn ? colorTextOn : colorTextOff],
          positionButton: [this.state.switchOn ? sliderWidth - buttonOffsetRight : 0 + buttonOffsetLeft],
          opacityChildren: this.state.switchOn ? [1] : [0],
          timing: {duration: duration, ease: easingFunction}
        }}>
        {(state: any) => (
          <View style={{width: '100%'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: textFont, color: state.colorNo, marginRight: spaceBetween / 2}}>
                {textOff}
              </Text>



              <View style={{position: 'relative', paddingRight: 10, paddingLeft: 10}}>
                <View style={{height: 6, width: 25, backgroundColor: '#E8EAEC', borderRadius: 3}}/>
                <TouchableOpacity activeOpacity={1} style={[pagesStyles.buttonSwitch, {left: state.positionButton}]}
                                  onPress={() => this.setState({switchOn: !this.state.switchOn})}/>
              </View>



              <Text style={{fontFamily: textFont, color: state.colorYes, marginLeft: spaceBetween / 2}}>
                {textOn}
              </Text>
            </View>
            <View style={{opacity: state.opacityChildren}}>
            </View>
          </View>
        )}
      </Animate>
    )
  }

  renderPillSwitch = () => {
    const buttonOffSetRight = this.props.buttonOffsetRight || defaultButtonOffsetPill
    const buttonSize = this.props.buttonWidth || defaultButtonSize
    const leftPosition = this.props.buttonOffsetLeft || defaultButtonOffsetPill
    const offColor = this.props.colorSwitchOff || defaultColorSwitchOff
    const onColor = this.props.colorSwitchOn || defaultColorSwitchOn
    const sliderHeight = this.props.sliderHeight || defaultSwitchHeightPill
    const sliderWidth = this.props.sliderWidth || defaultSwitchWidthPill
    const rightPosition = sliderWidth - buttonSize - buttonOffSetRight
    const duration = this.props.animationDuration || defaultDuration
    const easingFunction = this.props.easingFunction || defaultEasingFunction
    const textFont = this.props.textFont || defaultTextFont
    const textSize = this.props.textSize || defaultTextSize
    const colorTextOn = this.props.colorTextOn || defaultColorTextOnPill
    const colorTextOff = this.props.colorTextOff || defaultColorTextOffPill
    const textOn = this.props.textOn || defaultTextOnPill
    const textOff = this.props.textOff || defaultTextOffPill
    const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenPill
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
        opacityChildren: [this.state.switchOn ? 1 : 0],
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