/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React from 'react';
import {
    StyleSheet,
    View, Image, TextInput, Text, TouchableOpacity
} from 'react-native';

import { Light_Color } from '../Assets/Colors/Colors';
import { useTheme } from '../Config/ThemeProvider';
import styles from './styles';


const FinancialEPAChat = ({ data = [], onPress = () => { }, Headers = false, ExtraStyle = {} }) => {
    const { item = [], x = [], y = [] } = data
    return (
        <View style={[styles.AnalysisTable, ExtraStyle]}>
            {Headers && <View style={[styles.AnalysisTableInnerSection, styles.backgroundColor_Blue]}>
                {Headers.map((value, index) => (<Text key={index} style={[index < 1 ? styles.textAlign_Left : styles.textAlign_Right, styles.CenterContainer, styles.flex_1, styles.fontSize_14, styles.color_White, styles.font_PoppinsSemiBold]}>{value}</Text>))}
            </View>}
            {item && item.length ? item.map((info, index) => {
                return <TouchableOpacity key={index} style={[styles.AnalysisTableInnerSection, styles.backgroundColor_Gray]}>
                    <Text key={index} style={[styles.textAlign_Left, styles.CenterContainer, styles.flex_1, styles.fontSize_12, styles.color_gray_White, styles.font_PoppinsRegular]}>{y[index]}</Text>
                    {Object.keys(info) && Object.keys(info).map((item, _index) => (
                       <View style={[ styles.CenterContainer, styles.flex_1, styles.fontSize_12, styles.color_gray_White, styles.font_PoppinsRegular]}>
                         { info[item]&&  <View s style={[styles.MainContainer,{ marginTop:-(info[item]>50?50:info[item]) }]}>
                                <View style={{ backgroundColor: 'rgb(24,121,216)', width: 12, height: 12, borderRadius: 10, top:info[item]<11?info[item]:11 }}>
                                </View>
                                <View style={{ height: info[item]>25?25:info[item], width: 12, backgroundColor: 'rgb(39,55,88)', zIndex: -1, borderRadius: 10 }} />
                            </View>}
                        </View>
                    ))}
                </TouchableOpacity>
            }
            ) :
                <View style={[styles.HomeHeaderInnerContainer, styles.CenterContainer]} >
                    <Text style={[styles.CenterContainer, styles.color_Black, styles.font_PoppinsMedium]}>No Data Avilable</Text>
                </View>

            }
            {x &&
                <View style={[styles.AnalysisTableInnerSection, styles.backgroundColor_Gray]}>
                    {x.map((title, index) => (<Text key={index} style={[styles.textAlign_Left, styles.CenterContainer, styles.flex_1, styles.fontSize_12, styles.color_gray_White, styles.font_PoppinsRegular]}>{title}</Text>))}
                </View>
            }

        </View>
    );
};

export default FinancialEPAChat;
