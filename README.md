# react-native-switches
_ Customizable Switch components for react native_

Using:
* _**[react-move](https://github.com/react-tools/react-move)**_ for animations

## Installation

```
npm install --save react-native-switches
```
or
```
yarn add react-native-switches
```

## Demo

## Usage

Basic usage requires choosing between the _**line**_ and _**pill**_ shapes.
* _**line**_ : requires the user to choose and to confirm a PIN code
* _**pill**_ : requires the user to enter the PIN code he previously chose
It also requires you to provide a boolean _**value**_ for the switch and an _**onChange**_ function.

```
import Switches from 'react-native-switches'
<Switches shape={'pill'} onChange={() => this.setState({switchValue: !this.state.switchValue}} value={this.state.switchValue}/>
```

## Options

| Key | Description | Default | Required | Type |
|---|---|---|---|---|
|**`animationDuration`**|Duration of the transition animation|`300`|`false`|`number`|


buttonColor?: string
buttonHeight?: number
buttonOffsetLeft?: number
buttonOffsetRight?: number
buttonWidth?: number
colorSwitch?: string
colorSwitchOff?: string
colorSwitchOn?: string
colorTextOff?: string
colorTextOn?: string
disabled?: boolean
easingFunction?: () => void
onChange: () => void
shape: Shapes
showText?: boolean
sliderHeight?: number
sliderWidth?: number
spaceBetween?: number
textFont?: string
textOff?: string
textOn?: string
textSize?: number
value: boolean

## Contributing

Pull requests are welcome.