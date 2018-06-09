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
class Switches extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renderLineSwitch = () => {
            return null;
        };
        this.renderPillSwitch = () => {
            // Easing function in props or default
            // Starting value in props
            // Colors on and off
            const onColor = this.props.colorSwitchOn || '#96CBCE';
            const offColor = this.props.colorSwitchOff || '#D3D5DA';
            return (React.createElement(react_move_1.Animate, { show: true, start: {
                    color: this.state.switchOn ? onColor : offColor,
                    positionButton: !this.state.switchOn ? 2 : 36,
                    opacitySubLabel: !this.state.switchOn ? 0 : 1,
                    opacityPep: this.state.switchOn ? 1 : 0
                }, update: {
                    color: [this.state.switchOn ? '#96CBCE' : '#D3D5DA'],
                    positionButton: [!this.state.switchOn ? 2 : 36],
                    opacitySubLabel: [!this.state.switchOn ? 0 : 1],
                    opacityPep: this.state.switchOn ? [1] : [0],
                    timing: { duration: 300, ease: d3_ease_1.easeQuadIn }
                } }, (state) => (React.createElement(react_native_1.View, { style: { width: '100%' } },
                React.createElement(react_native_1.View, { style: [pagesStyles.section, { alignItems: 'flex-end', width: '100%' }] },
                    React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 1, onPress: () => this.handleSwitch(), style: [{ backgroundColor: state.color }, pagesStyles.alternativeSwitch] },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'row' } },
                            React.createElement(react_native_1.Text, { style: pagesStyles.textAlternativeSwitchOn }, "on"),
                            React.createElement(react_native_1.Text, { style: pagesStyles.textAlternativeSwitchOff }, "off")),
                        React.createElement(react_native_1.View, { style: [{ left: state.positionButton }, pagesStyles.buttonAlternativeSwitch] }))),
                React.createElement(react_native_1.View, { style: [pagesStyles.section, { opacity: state.opacityPep }] })))));
        };
        this.renderSwitches = () => {
            switch (this.props.shape) {
                case Shapes.line:
                    return this.renderLineSwitch();
                case Shapes.pill:
                    return this.renderPillSwitch();
                default:
                    return null;
            }
        };
        this.state = {
            switchOn: this.props.defaultValue || true
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, this.renderSwitches()));
    }
}
exports.default = Switches;
let styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
// FAT ONE
//   <Animate
// show={true}
// start={{
//   color: this.state.switchOn ? '#96CBCE' : '#D3D5DA',
//     positionButton: !this.state.switchOn ? 2 : 36,
//     opacitySubLabel: !this.state.switchOn ? 0 : 1,
//     opacityPep: this.state.switchOn ? 1 : 0
// }}
// update={{
//   color: [this.state.switchOn ? '#96CBCE' : '#D3D5DA'],
//     positionButton: [!this.state.switchOn ? 2 : 36],
//     opacitySubLabel: [!this.state.switchOn ? 0 : 1],
//     opacityPep: this.state.switchOn ? [1] : [0],
//     timing: {duration: 300, ease: easeQuadIn}
// }}>
// {(state: any) => (
//   <View style={{width: '100%'}}>
//     <View style={[pagesStyles.section, {alignItems: 'flex-end', width: '100%'}]}>
//       <TouchableOpacity activeOpacity={1} onPress={() => this.handleSwitch()}
//                         style={[{backgroundColor: state.color}, pagesStyles.alternativeSwitch]}>
//         <View style={{flexDirection: 'row'}}>
//           <Text style={pagesStyles.textAlternativeSwitchOn}>on</Text>
//           <Text style={pagesStyles.textAlternativeSwitchOff}>off</Text>
//         </View>
//         <View style={[{left: state.positionButton}, pagesStyles.buttonAlternativeSwitch]}/>
//       </TouchableOpacity>
//     </View>
//     <View style={[pagesStyles.section, {opacity: state.opacityPep}]}>
//     </View>
//   </View>
// )}
// </Animate>
// buttonAlternativeSwitch: {
//   position: 'absolute',
//     backgroundColor: colors.white,
//     width: 32,
//     height: 32,
//     borderRadius: 16
// },
// textAlternativeSwitchOn: {
//   fontFamily: grid.font,
//     fontSize: grid.unit,
//     color: colors.white,
//     marginRight: 4
// },
// textAlternativeSwitchOff: {
//   fontFamily: grid.font,
//     fontSize: grid.unit,
//     color: colors.base,
//     opacity: grid.lowOpacity,
//     marginLeft: 4
// },
// alternativeSwitch: {
//   height: 36,
//     width: 70,
//     borderRadius: 18,
//     position: 'relative',
//     justifyContent: 'center',
//     alignItems: 'center'
// },
// viewAlternativeSwitch: {
//   justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: grid.unit,
//     flexDirection: 'row',
//     width: '100%'
// }
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
