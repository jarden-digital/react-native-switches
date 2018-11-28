import * as React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Animate} from 'react-move'
import {easeQuadIn} from 'd3-ease'

export type IProps = {
  animationDuration?: number
  borderColor?: string
  borderWidth?: number
  buttonColor?: string
  buttonSize?: number
  buttonOffsetLeft?: number
  buttonOffsetRight?: number
  colorSwitchOff?: string
  colorSwitchOn?: string
  colorTextOff?: string
  colorTextOn?: string
  disabled?: boolean
  easingFunction?: () => void
  icon?: any
  onChange: () => void
  shape: string
  showText?: boolean
  sliderHeight?: number
  sliderWidth?: number
  spaceBetween?: number
  testID?: string
  textFont?: string
  textOff?: string
  textOn?: string
  textSize?: number
  value: boolean
}

enum Shapes {
  pill = 'pill',
  line = 'line'
}

export type IState = {}

const defaultBorderColor = '#D3D5DA'
const defaultBorderWidth = 1
const defaultButtonOffsetLine = 0
const defaultButtonOffsetPill = 2
const defaultButtonSizeLine = 20
const defaultButtonSizePill = 32
const defaultButtonColorLine = '#96CBCE'
const defaultButtonColorPill = '#FFF'
const defaultColorSwitch = '#E8EAEC'
const defaultColorSwitchOff = '#D3D5DA'
const defaultColorSwitchOn = '#96CBCE'
const defaultColorTextOffLine = '#E8EAEC'
const defaultColorTextOnLine = '#7BCDD0'
const defaultColorTextOffPill = '#445878'
const defaultColorTextOnPill = '#FFF'
const defaultDisabledValue = false
const defaultDuration = 300
const defaultEasingFunction = easeQuadIn
const defaultShowText = true
const defaultSpaceBetweenLine = 10
const defaultSpaceBetweenPill = 10
const defaultSwitchHeightLine = 6
const defaultSwitchHeightPill = 36
const defaultSwitchWidthLine = 30
const defaultSwitchWidthPill = 70
const defaultTestID = 'reactNativeSwitches'
const defaultTextFont = 'courier'
const defaultTextOffLine = 'No'
const defaultTextOnLine = 'Yes'
const defaultTextOffPill = 'off'
const defaultTextOnPill = 'on'
const defaultTextSize = 14

class Switches extends React.PureComponent<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch = () => {
    this.props.onChange()
  }

  renderLineSwitch = () => {
    const buttonOffsetLeft = this.props.buttonOffsetLeft || defaultButtonOffsetLine
    const buttonOffsetRight = this.props.buttonOffsetRight || defaultButtonOffsetLine
    const easingFunction = this.props.easingFunction || defaultEasingFunction
    const buttonSize = this.props.buttonSize || defaultButtonSizeLine
    const duration = this.props.animationDuration || defaultDuration
    const colorTextOn = this.props.colorTextOn || defaultColorTextOnLine
    const disabled = this.props.disabled || defaultDisabledValue
    const colorTextOff = this.props.colorTextOff || defaultColorTextOffLine
    const textFont = this.props.textFont || defaultTextFont
    const textOn = this.props.textOn || defaultTextOnLine
    const textOff = this.props.textOff || defaultTextOffLine
    const sliderHeight = this.props.sliderHeight || defaultSwitchHeightLine
    const sliderWidth = this.props.sliderWidth || defaultSwitchWidthLine
    const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenLine
    const buttonColor = this.props.buttonColor || defaultButtonColorLine
    const colorSwitchOn = this.props.colorSwitchOn || defaultColorSwitch
    const colorSwitchOff = this.props.colorSwitchOff || defaultColorSwitch
    const showText = this.props.showText === false ? this.props.showText : defaultShowText
    const borderWidth = this.props.borderWidth ? this.props.borderWidth : defaultBorderWidth
    const borderColor = this.props.borderColor ? this.props.borderColor : defaultBorderColor
    const testID = this.props.testID || defaultTestID

    return (
      <Animate
        show={true}
        start={{
          colorNo: this.props.value ? colorTextOff : colorTextOn,
          colorYes: this.props.value ? colorTextOn : colorTextOff,
          positionButton: this.props.value ? sliderWidth - buttonOffsetRight - buttonSize / 2 : buttonOffsetLeft,
          opacityChildren: this.props.value ? 1 : 0
        }}
        update={{
          colorNo: [this.props.value ? colorTextOff : colorTextOn],
          colorYes: [this.props.value ? colorTextOn : colorTextOff],
          positionButton: [this.props.value ? sliderWidth - buttonOffsetRight - buttonSize / 2 : buttonOffsetLeft],
          opacityChildren: this.props.value ? [1] : [0],
          timing: {duration: duration, ease: easingFunction}
        }}>
        {(state: any) => (
          <View>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              {showText && <Text style={{fontFamily: textFont, color: state.colorNo, marginRight: spaceBetween / 2}}>
                {textOff}
              </Text>}
              <View style={{paddingRight: spaceBetween / 2, paddingLeft: spaceBetween / 2}}>
                <View style={{
                  height: sliderHeight,
                  width: sliderWidth,
                  backgroundColor: this.props.value ? colorSwitchOn : colorSwitchOff,
                  borderRadius: sliderHeight / 2
                }}/>
                <TouchableOpacity activeOpacity={1} disabled={disabled}
                                  testID={testID}
                                  style={{
                                    left: state.positionButton,
                                    position: 'absolute',
                                    top: (sliderHeight - buttonSize) / 2,
                                    width: buttonSize,
                                    height: buttonSize,
                                    borderRadius: buttonSize / 2,
                                    backgroundColor: buttonColor,
                                    borderWidth: borderWidth,
                                    borderColor: borderColor
                                  }} onPress={() => this.handleSwitch()}/>
              </View>
              {showText && <Text style={{fontFamily: textFont, color: state.colorYes, marginLeft: spaceBetween / 2}}>
                {textOn}
              </Text>}
            </View>
            <View style={{opacity: state.opacityChildren}}>
              {this.props.children}
            </View>
          </View>
        )}
      </Animate>
    )
  }

  renderPillSwitch = () => {
    const buttonOffSetRight = this.props.buttonOffsetRight || defaultButtonOffsetPill
    const buttonSize = this.props.buttonSize || defaultButtonSizePill
    const leftPosition = this.props.buttonOffsetLeft || defaultButtonOffsetPill
    const offColor = this.props.colorSwitchOff || defaultColorSwitchOff
    const onColor = this.props.colorSwitchOn || defaultColorSwitchOn
    const sliderHeight = this.props.sliderHeight || defaultSwitchHeightPill
    const sliderWidth = this.props.sliderWidth || defaultSwitchWidthPill
    const rightPosition = sliderWidth - buttonSize - buttonOffSetRight
    const duration = this.props.animationDuration || defaultDuration
    const disabled = this.props.disabled || defaultDisabledValue
    const easingFunction = this.props.easingFunction || defaultEasingFunction
    const textFont = this.props.textFont || defaultTextFont
    const textSize = this.props.textSize || defaultTextSize
    const colorTextOn = this.props.colorTextOn || defaultColorTextOnPill
    const colorTextOff = this.props.colorTextOff || defaultColorTextOffPill
    const textOn = this.props.textOn || defaultTextOnPill
    const textOff = this.props.textOff || defaultTextOffPill
    const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenPill
    const buttonColor = this.props.buttonColor || defaultButtonColorPill
    const showText = this.props.showText === false ? this.props.showText : defaultShowText
    const borderWidth = this.props.borderWidth ? this.props.borderWidth : defaultBorderWidth
    const borderColor = this.props.borderColor ? this.props.borderColor : defaultBorderColor
    const icon = this.props.icon ? this.props.icon : null
    const testID = this.props.testID || defaultTestID
    return (<Animate
      show={true}
      start={{
        color: this.props.value ? onColor : offColor,
        positionButton: this.props.value ? rightPosition : leftPosition,
        opacityChildren: this.props.value ? 1 : 0
      }}
      update={{
        color: [this.props.value ? onColor : offColor],
        positionButton: [this.props.value ? rightPosition : leftPosition],
        opacityChildren: [this.props.value ? 1 : 0],
        timing: {duration: duration, ease: easingFunction}
      }}>
      {(state: any) => (
        <View>
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => this.handleSwitch()} disabled={disabled}
                              testID={testID}
                              style={{
                                backgroundColor: state.color,
                                height: sliderHeight,
                                width: sliderWidth,
                                borderRadius: sliderHeight / 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: borderWidth,
                                borderColor: borderColor
                              }}>
              {showText && <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontFamily: textFont, fontSize: textSize, color: colorTextOn, marginRight: spaceBetween / 2}}>
                  {textOn}
                </Text>
                <Text
                  style={{fontFamily: textFont, fontSize: textSize, color: colorTextOff, marginLeft: spaceBetween / 2}}>
                  {textOff}
                </Text>
              </View>}
              <View style={{
                left: state.positionButton,
                position: 'absolute',
                backgroundColor: buttonColor,
                width: buttonSize,
                height: buttonSize,
                borderRadius: buttonSize / 2,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {icon}
              </View>
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
      case Shapes.line.toString():
        return this.renderLineSwitch()
      case Shapes.pill.toString():
        return this.renderPillSwitch()
      default:
        return null
    }
  }

  render() {
    return (
      <View>
        {this.renderSwitches()}
      </View>
    )
  }
}

export default Switches

