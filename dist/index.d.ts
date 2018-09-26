import * as React from 'react';
export declare type IProps = {
    animationDuration?: number;
    buttonColor?: string;
    buttonSize?: number;
    buttonOffsetLeft?: number;
    buttonOffsetRight?: number;
    colorSwitchOff?: string;
    colorSwitchOn?: string;
    colorTextOff?: string;
    colorTextOn?: string;
    disabled?: boolean;
    easingFunction?: () => void;
    onChange: () => void;
    shape: string;
    showText?: boolean;
    sliderHeight?: number;
    sliderWidth?: number;
    spaceBetween?: number;
    textFont?: string;
    textOff?: string;
    textOn?: string;
    textSize?: number;
    value: boolean;
    borderWidthOff?: number;
    borderWidthOn?: number;
    borderColorOff?: string;
    borderColorOn?: string;
};
export declare type IState = {};
declare class Switches extends React.PureComponent<IProps, IState> {
    constructor(props: IProps);
    handleSwitch: () => void;
    renderLineSwitch: () => any;
    renderPillSwitch: () => any;
    renderSwitches: () => any;
    render(): any;
}
export default Switches;
