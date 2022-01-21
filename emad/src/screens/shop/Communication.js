import React from "react";
import {View, ScrollView, Text, Linking } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import InputButton from "../../components/InputButton";
import MessageBox from '../../components/MessageBox';
import { useLanguage } from "../../localization/Localization";

const Communication = ({ navigation }) => {

  const {colors, isDark} = useTheme();
  const tabBarHeight = useBottomTabBarHeight();
  const [lang, setLanguage] = useLanguage();
  const [Message, onChangeText] = React.useState('');
  
  return (
    <View style={{ backgroundColor: colors.theme.background, height: "100%" }}>
      <View style={{flexDirection: 'row', marginBottom:20}}>
          <BackButton onPress={() => { navigation.goBack() }} />
          <View style={{flex:1,justifyContent: "center",marginRight:'15%',alignItems: "center", paddingTop: '15%'}}>
          <Text style={{fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf:'center', color: colors.theme.title}}>{lang.contatta}</Text>
          </View>
      </View>
      <ScrollView overScrollMode="never" style={{ marginTop: "5%", width: "75%", alignSelf: "center" }}>

        <MessageBox value={Message} onChangeText={onChangeText} theme={colors} icon="mail-open-outline"/>

        <View style={{ marginTop: 25, flexDirection: "row", width: 100, justifyContent: "center" }} alignSelf="center">
          <MaterialCommunityIcons name="telegram" color="#2da5e1" size={35} onPress={() => { Linking.openURL(`telegram://send?${Message}=&phone=+39 1122334455`) }} style={{ marginRight: 7.5 }} />
          <MaterialCommunityIcons name="whatsapp" color="#2ac54d" size={35} onPress={() => { Linking.openURL(`whatsapp://send?${Message}=&phone=+39 1122334455`) }} style={{ marginLeft: 7.5 }} />
        </View>
        <InputButton params={{ marginTop: 100, width: "100%" }} name={lang.invia} icon="arrow-forward-outline" rotation="-45deg"
          onPress={() => { console.log("Invia Messaggio " + Message) }} />
        <View style={{marginBottom: tabBarHeight+ 10}}></View>
      </ScrollView>
    </View>
  )
};

export default Communication;
