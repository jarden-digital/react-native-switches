# react-native-switches

[![npm](https://img.shields.io/npm/v/react-native-switches.svg)](https://www.npmjs.com/package/react-native-switches)

_Customizable Switch components for react native_

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

![pill-switch](https://user-images.githubusercontent.com/10620919/41511911-4288a9c8-72d4-11e8-9312-8b8ecb58b647.gif)   ![line-switch](https://user-images.githubusercontent.com/10620919/41511924-7dda6c0a-72d4-11e8-8db3-2f1e7c918aff.gif)

## Usage

Basic usage requires choosing between the _**line**_ and _**pill**_ shapes.
* _**line**_ : requires the user to choose and to confirm a PIN code
* _**pill**_ : requires the user to enter the PIN code he previously chose
It also requires you to provide a boolean _**value**_ for the switch and an _**onChange**_ function.

```
import Switches from 'react-native-switches'
<Switches shape={'pill'} onChange={() => this.setState({switchValue: !this.state.switchValue})} value={this.state.switchValue}/>
```

## Options

| Key | Description | Default | Required | Type |
|---|---|---|---|---|
|**`animationDuration`**|Duration of the transition animation|`300`|`false`|`number`|
|**`borderColor`**|Color of the border of the switch|`#D3D5DA`|`false`|`string`|
|**`borderWidth`**|Width of the border of the switch|`1`|`false`|`number`|
|**`buttonColor`**|Color of the button of the switch|Line shape: `#96CBCE` / Pill shape: `#FFF`|`false`|`string`|
|**`buttonOffsetLeft`**|Difference between the maximum left position of the button and the maximum left position of the slide|Line shape: `0` / Pill shape: `2`|`false`|`number`|
|**`buttonOffsetRight`**|Difference between the maximum right position of the button and the maximum right position of the slide|Line shape: `0` / Pill shape: `2`|`false`|`number`|
|**`buttonSize`**|Height and width of the button of the switch|Line shape: `20` / Pill shape: `32`|`false`|`number`|
|**`colorSwitchOff`**|Color of the slide when the switch is on off position|Line shape: `#E8EAEC` / Pill shape: `#D3D5DA`|`false`|`string`|
|**`colorSwitchOn`**|Color of the slide when the switch is on on position|Line shape: `#E8EAEC` / Pill shape: `#96CBCE`|`false`|`string`|
|**`colorTextOff`**|Color of the text when the switch is on off position|Line shape: `#E8EAEC` / Pill shape: `#445878`|`false`|`string`|
|**`colorTextOn`**|Color of the text when the switch is on on position|Line shape: `#7BCDD0` / Pill shape: `#FFF`|`false`|`string`|
|**`disabled`**|Boolean disabling the click on the button|`false`|`false`|`boolean`|
|**`easingFunction`**|Easing function for the animation|`easeQuadIn` [d3-ease function](https://github.com/d3/d3-ease#easeQuadIn)|`false`|`function`|
|**`icon`**|Icon to be placed on the button|*None*|`false`|`any`|
|**`onChange`**|Function triggered when the switch is tapped|*None*|`true`|`function`|
|**`paddingTextOff`**|Padding right foe the off text on pill switch|Pill shape: `0`|`false`|`number`|
|**`paddingTextOn`**|Padding left for the on text on pill switch|Pill shape: `0`|`false`|`number`|
|**`shape`**|Shape of the switch (`line` or `pill`)|*None*|`true`|`Shapes` enum|
|**`showText`**|Boolean indicating if the text should be visible or not|`true`|`false`|`boolean`|
|**`sliderHeight`**|Height of the slider of the switch|Line shape: `6` / Pill shape: `36`|`false`|`number`|
|**`sliderWidth`**|Width of the slider of the switch|Line shape: `30` / Pill shape: `70`|`false`|`number`|
|**`spaceBetween`**|Space between the two texts of the switch|Line shape: `10` / Pill shape: `10`|`false`|`number`|
|**`testID`**|Text used for the testID property of the button|`reactNativeSwitches`|`false`|`string`|
|**`textFont`**|Font used for the text of the switch|`courier`|`false`|`string`|
|**`textOff`**|Text used for the `off` position of the switch|Line shape: `No` / Pill shape: `off`|`false`|`string`|
|**`textOn`**|Text used for the `on` position of the switch|Line shape: `Yes` / Pill shape: `on`|`false`|`string`|
|**`textSize`**|Size of the text|`14`|`false`|`number`|
|**`value`**|Boolean value of the switch matching its position (`true` is `on`)|*None*|`true`|`boolean`|

## Contributing

Pull requests are welcome.
