"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
var SwitchTypes;
(function (SwitchTypes) {
})(SwitchTypes = exports.SwitchTypes || (exports.SwitchTypes = {}));
class Switches extends React.PureComponent {
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }));
    }
}
exports.default = Switches;
let styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
