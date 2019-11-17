"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const react_move_1 = require("react-move");
const d3_ease_1 = require("d3-ease");
var Shapes;
(function (Shapes) {
    Shapes["pill"] = "pill";
    Shapes["line"] = "line";
})(Shapes || (Shapes = {}));
const defaultBorderColor = '#D3D5DA';
const defaultBorderWidth = 1;
const defaultButtonOffsetLine = 0;
const defaultButtonOffsetPill = 2;
const defaultButtonSizeLine = 20;
const defaultButtonSizePill = 32;
const defaultButtonColorLine = '#96CBCE';
const defaultButtonColorPill = '#FFF';
const defaultColorSwitch = '#E8EAEC';
const defaultColorSwitchOff = '#D3D5DA';
const defaultColorSwitchOn = '#96CBCE';
const defaultColorTextOffLine = '#E8EAEC';
const defaultColorTextOnLine = '#7BCDD0';
const defaultColorTextOffPill = '#445878';
const defaultColorTextOnPill = '#FFF';
const defaultDisabledValue = false;
const defaultDuration = 300;
const defaultEasingFunction = d3_ease_1.easeQuadIn;
const defaultPaddingTextOff = 0;
const defaultPaddingTextOn = 0;
const defaultShowText = true;
const defaultSpaceBetweenLine = 10;
const defaultSpaceBetweenPill = 10;
const defaultSwitchHeightLine = 6;
const defaultSwitchHeightPill = 36;
const defaultSwitchWidthLine = 30;
const defaultSwitchWidthPill = 70;
const defaultTestID = 'reactNativeSwitches';
const defaultTextFont = 'courier';
const defaultTextOffLine = 'No';
const defaultTextOnLine = 'Yes';
const defaultTextOffPill = 'off';
const defaultTextOnPill = 'on';
const defaultTextSize = 14;
class Switches extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleSwitch = () => {
            this.props.onChange();
        };
        this.renderLineSwitch = () => {
            const buttonOffsetLeft = this.props.buttonOffsetLeft || defaultButtonOffsetLine;
            const buttonOffsetRight = this.props.buttonOffsetRight || defaultButtonOffsetLine;
            const easingFunction = this.props.easingFunction || defaultEasingFunction;
            const buttonSize = this.props.buttonSize || defaultButtonSizeLine;
            const duration = this.props.animationDuration || defaultDuration;
            const colorTextOn = this.props.colorTextOn || defaultColorTextOnLine;
            const disabled = this.props.disabled || defaultDisabledValue;
            const colorTextOff = this.props.colorTextOff || defaultColorTextOffLine;
            const textFont = this.props.textFont || defaultTextFont;
            const textOn = this.props.textOn || defaultTextOnLine;
            const textOff = this.props.textOff || defaultTextOffLine;
            const sliderHeight = this.props.sliderHeight || defaultSwitchHeightLine;
            const sliderWidth = this.props.sliderWidth || defaultSwitchWidthLine;
            const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenLine;
            const buttonColor = this.props.buttonColor || defaultButtonColorLine;
            const colorSwitchOn = this.props.colorSwitchOn || defaultColorSwitch;
            const colorSwitchOff = this.props.colorSwitchOff || defaultColorSwitch;
            const showText = this.props.showText === false ? this.props.showText : defaultShowText;
            const borderWidth = this.props.borderWidth ? this.props.borderWidth : defaultBorderWidth;
            const borderColor = this.props.borderColor ? this.props.borderColor : defaultBorderColor;
            return (React.createElement(react_move_1.Animate, { show: true, start: {
                    colorNo: this.props.value ? colorTextOff : colorTextOn,
                    colorYes: this.props.value ? colorTextOn : colorTextOff,
                    positionButton: this.props.value ? sliderWidth - buttonOffsetRight - buttonSize / 2 : buttonOffsetLeft,
                    opacityChildren: this.props.value ? 1 : 0
                }, update: {
                    colorNo: [this.props.value ? colorTextOff : colorTextOn],
                    colorYes: [this.props.value ? colorTextOn : colorTextOff],
                    positionButton: [this.props.value ? sliderWidth - buttonOffsetRight - buttonSize / 2 : buttonOffsetLeft],
                    opacityChildren: this.props.value ? [1] : [0],
                    timing: { duration: duration, ease: easingFunction }
                } }, (state) => (React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.View, { style: { alignItems: 'center', flexDirection: 'row' } },
                    showText && React.createElement(react_native_1.Text, { style: { fontFamily: textFont, color: state.colorNo, marginRight: spaceBetween / 2 } }, textOff),
                    React.createElement(react_native_1.View, { style: { paddingRight: spaceBetween / 2, paddingLeft: spaceBetween / 2 } },
                        React.createElement(react_native_1.View, { style: {
                                height: sliderHeight,
                                width: sliderWidth,
                                backgroundColor: this.props.value ? colorSwitchOn : colorSwitchOff,
                                borderRadius: sliderHeight / 2
                            } }),
                        React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, disabled: disabled, style: {
                                left: state.positionButton,
                                position: 'absolute',
                                top: (sliderHeight - buttonSize) / 2,
                                width: buttonSize,
                                height: buttonSize,
                                borderRadius: buttonSize / 2,
                                backgroundColor: buttonColor,
                                borderWidth: borderWidth,
                                borderColor: borderColor
                            }, onPress: () => this.handleSwitch() })),
                    showText && React.createElement(react_native_1.Text, { style: { fontFamily: textFont, color: state.colorYes, marginLeft: spaceBetween / 2 } }, textOn)),
                React.createElement(react_native_1.View, { style: { opacity: state.opacityChildren } }, this.props.children)))));
        };
        this.renderPillSwitch = () => {
            const buttonOffSetRight = this.props.buttonOffsetRight || defaultButtonOffsetPill;
            const buttonSize = this.props.buttonSize || defaultButtonSizePill;
            const leftPosition = this.props.buttonOffsetLeft || defaultButtonOffsetPill;
            const offColor = this.props.colorSwitchOff || defaultColorSwitchOff;
            const onColor = this.props.colorSwitchOn || defaultColorSwitchOn;
            const sliderHeight = this.props.sliderHeight || defaultSwitchHeightPill;
            const sliderWidth = this.props.sliderWidth || defaultSwitchWidthPill;
            const rightPosition = sliderWidth - buttonSize - buttonOffSetRight;
            const duration = this.props.animationDuration || defaultDuration;
            const disabled = this.props.disabled || defaultDisabledValue;
            const easingFunction = this.props.easingFunction || defaultEasingFunction;
            const textFont = this.props.textFont || defaultTextFont;
            const textSize = this.props.textSize || defaultTextSize;
            const colorTextOn = this.props.colorTextOn || defaultColorTextOnPill;
            const colorTextOff = this.props.colorTextOff || defaultColorTextOffPill;
            const textOn = this.props.textOn || defaultTextOnPill;
            const textOff = this.props.textOff || defaultTextOffPill;
            const spaceBetween = this.props.spaceBetween || defaultSpaceBetweenPill;
            const buttonColor = this.props.buttonColor || defaultButtonColorPill;
            const showText = this.props.showText === false ? this.props.showText : defaultShowText;
            const borderWidth = this.props.borderWidth ? this.props.borderWidth : defaultBorderWidth;
            const borderColor = this.props.borderColor ? this.props.borderColor : defaultBorderColor;
            const icon = this.props.icon ? this.props.icon : null;
            const paddingTextOn = this.props.paddingTextOn || defaultPaddingTextOn;
            const paddingTextOff = this.props.paddingTextOff || defaultPaddingTextOff;
            return (React.createElement(react_move_1.Animate, { show: true, start: {
                    color: this.props.value ? onColor : offColor,
                    positionButton: this.props.value ? rightPosition : leftPosition,
                    opacityChildren: this.props.value ? 1 : 0,
                    opacityTextOn: this.props.value ? 1 : 0,
                    opacityTextOff: this.props.value ? 0 : 1
                }, update: {
                    color: [this.props.value ? onColor : offColor],
                    positionButton: [this.props.value ? rightPosition : leftPosition],
                    opacityChildren: [this.props.value ? 1 : 0],
                    opacityTextOn: [this.props.value ? 1 : 0],
                    opacityTextOff: [this.props.value ? 0 : 1],
                    timing: { duration: duration, ease: easingFunction }
                } }, (state) => (React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.View, null,
                    React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, onPress: () => this.handleSwitch(), disabled: disabled, style: {
                            backgroundColor: state.color,
                            height: sliderHeight,
                            width: sliderWidth,
                            borderRadius: sliderHeight / 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: borderWidth,
                            borderColor: borderColor
                        } },
                        showText &&
                            React.createElement(react_native_1.View, { style: { flexDirection: 'row', paddingLeft: paddingTextOn, paddingRight: paddingTextOff } },
                                React.createElement(react_native_1.Text, { style: {
                                        fontFamily: textFont,
                                        fontSize: textSize,
                                        color: colorTextOn,
                                        marginRight: spaceBetween / 2,
                                        opacity: state.opacityTextOn
                                    } }, textOn),
                                React.createElement(react_native_1.Text, { style: {
                                        fontFamily: textFont,
                                        fontSize: textSize,
                                        color: colorTextOff,
                                        marginLeft: spaceBetween / 2,
                                        opacity: state.opacityTextOff
                                    } }, textOff)),
                        React.createElement(react_native_1.View, { style: {
                                left: state.positionButton,
                                position: 'absolute',
                                backgroundColor: buttonColor,
                                width: buttonSize,
                                height: buttonSize,
                                borderRadius: buttonSize / 2,
                                alignItems: 'center',
                                justifyContent: 'center'
                            } }, icon))),
                React.createElement(react_native_1.View, { style: { opacity: state.opacityChildren } }, this.props.children)))));
        };
        this.renderSwitches = () => {
            switch (this.props.shape) {
                case Shapes.line.toString():
                    return this.renderLineSwitch();
                case Shapes.pill.toString():
                    return this.renderPillSwitch();
                default:
                    return null;
            }
        };
        this.handleSwitch = this.handleSwitch.bind(this);
    }
    render() {
        const testID = this.props.testID || defaultTestID;
        return (React.createElement(react_native_1.View, { testID: testID }, this.renderSwitches()));
    }
}
exports.default = Switches;
