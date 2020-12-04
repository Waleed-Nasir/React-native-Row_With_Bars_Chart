
import {
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';
import { Theme_Color, Light_Color } from '../Colors/Colors';
const { width, height } = Dimensions.get('window')

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
//Theme_Color is your Color Objects 
var Theme_Color = {
    white:'rgb(253,253,253)',
    blue:"rgb(1,30,124)",
    black:'rgb(2,9,17)',
    gray:'#434343',
    Button_Colors:['rgb(1,30,124)','#021965'],
    font_gray:'rgb(142,142,142)',
    green:'rgb(0 ,126, 38)',
    red:'rgb(246 ,0, 0)',
    theme_white:"rgb(253,253,253)",
    theme_Blue:'rgb(1,36,148)',
    font_white:'white',
    tabColor:['rgb(255,255,255)','rgb(255,255,255)'],
    maroon:'rgb(136,0,0)',
    BottomTab_Colors:['rgb(255,255,255)','rgb(255,255,255)'],
    font_gray_White:'rgb(142,142,142)',
    font_white_Blue:'#ffffff',
    BottomTab_Buttom_Colors:['rgb(1,30,124)','#021965'],
    font_pink:'rgb(238,0,255)',
    font_yellow:'rgb(201,195,0)',
    RGB_green:"rgb(126,178,91)",
    light_Gray:'#F9F9FC'
}
const styles = (Theme_Color) => StyleSheet.create({
    fontSize_40: { fontSize: 40 },
    fontSize_24: { fontSize: 24 },
    fontSize_14: {
        fontSize: 14
    },
    fontSize_15: {
        fontSize: 15
    },
    fontSize_16: {
        fontSize: 16
    },
    fontSize_13: {
        fontSize: 13
    },
    fontSize_12: {
        fontSize: 12
    },
    fontSize_11: {
        fontSize: 11
    },
    fontSize_10: {
        fontSize: 10
    },
    fontSize_7: {
        fontSize: 7
    },
    MainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    justifyContent_End: {
        justifyContent: 'flex-end',
    },
    justifyContent_SB: {
        justifyContent: 'space-between'
    },
    alignItems_Center: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    alignItems_End: {
        alignItems: 'flex-end',
    },
    alignItems_Start: {
        alignItems: 'flex-start',
    },
    textAlign_center:
        { textAlign: 'center' },
    textAlign_Left:
        { textAlign: 'left' },
    textAlign_Right:
        { textAlign: 'right' },
    height_d3: {
        height: height / 3
    },
    height_d4: {
        height: height / 4
    },
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    flex_4: {
        flex: 4,
    },
    flex_5: {
        flex: 5,
    },
    flex_10: {
        flex: 10,
    },
    HomeHeaderInnerContainer: {
        width: '82%',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    CenterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ph_20: {
        paddingHorizontal: 20
    },
    ph_40: {
        paddingHorizontal: 40
    },
    ph_0: {
        paddingHorizontal: 0
    },
    ph_5: {
        paddingHorizontal: 5
    },
    ph_10: {
        paddingHorizontal: 10
    },
    pv_10: {
        paddingVertical: 10
    },
    pl_15: {
        paddingLeft: 15
    },
    color_White: {
        color: Theme_Color.font_white
    },
    color_Green: {
        color: Theme_Color.green
    },
    color_RGB_Green: {
        color: Theme_Color.RGB_green
    },
    color_Gray: {
        color: Theme_Color.font_gray
    },
    color_Red: {
        color: Theme_Color.red
    },
    color_Blue: {
        color: Theme_Color.blue
    },
    color_Black: {
        color: Theme_Color.black
    },
    color_gray_White: {
        color: Theme_Color.font_gray_White
    },
    color_white_Blue: {
        color: Theme_Color.font_white_Blue
    },
    color_Pink: {
        color: Theme_Color.font_pink
    },
    color_Yellow: {
        color: Theme_Color.font_yellow
    },
    AnalysisTable:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Theme_Color.blue,
        // elevation: 6,
        // borderRadius: 5,
        marginVertical: 10,
        width: width,
        // paddingHorizontal: 20
    },
    AnalysisTableInnerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: Theme_Color.theme_white,
        width: '100%',
        textAlign: 'center',
        height: 40,
        // paddingLeft: 10,
        marginVertical:2,
        paddingHorizontal: 20,
    },
    backgroundColor_Blue:{
        backgroundColor: Theme_Color.theme_Blue,
    },
    backgroundColor_Gray:{
        backgroundColor: Theme_Color.light_Gray,
    },
    
});


export default styles
