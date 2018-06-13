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
|**`buttonColor`**||Line shape: `#96CBCE` / Pill shape: `#FFF`|`false`|`string`|
|**`buttonHeight`**||Line shape: `20` / Pill shape: `32`|`false`|`number`|
|**`buttonOffsetLeft`**||Line shape: `0` / Pill shape: `2`|`false`|`number`|
|**`buttonOffsetRight`**||Line shape: `0` / Pill shape: `2`|`false`|`number`|
|**`buttonWidth`**||Line shape: `20` / Pill shape: `32`|`false`|`number`|
|**`colorSwitchOff`**||Line shape: `#E8EAEC` / Pill shape: `#D3D5DA`|`false`|`string`|
|**`colorSwitchOn`**||Line shape: `#E8EAEC` / Pill shape: `#96CBCE`|`false`|`string`|
|**`colorTextOff`**||Line shape: `#7BCDD0` / Pill shape: `#E8EAEC`|`false`|`string`|
|**`colorTextOn`**||Line shape: `#445878` / Pill shape: `#FFF`|`false`|`string`|
|**`disabled`**||`false`|`false`|`boolean`|
|**`easingFunction`**||`easeQuadIn` [d3-ease function](https://github.com/d3/d3-ease#easeQuadIn)|`false`|`function`|
|**`onChange`**||*None*|`true`|`function`|
|**`shape`**||*None*|`true`|`Shapes` enum|
|**`showText`**||`true`|`false`|`boolean`|
|**`sliderHeight`**||Line shape: `8` / Pill shape: `36`|`false`|`number`|
|**`sliderWidth`**||Line shape: `25` / Pill shape: `70`|`false`|`number`|
|**`spaceBetween`**||Line shape: `20` / Pill shape: `8`|`false`|`number`|
|**`textFont`**||`courier`|`false`|`string`|
|**`textOff`**||Line shape: `No` / Pill shape: `off`|`false`|`string`|
|**`textOn`**||Line shape: `Yes` / Pill shape: `on`|`false`|`string`|
|**`textSize`**||`16`|`false`|`number`|
|**`value`**||*None*|`true`|`boolean`|

## Contributing

Pull requests are welcome.