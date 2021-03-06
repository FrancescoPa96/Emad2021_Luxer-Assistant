import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useTheme } from "../../theme/ThemeProvider";
import BackButton from "../../components/BackButton";
import { useLanguage } from "../../localization/Localization";


const Privacy = ({ navigation }) => {
    const { colors, setScheme, isDark } = useTheme();
    const [language, setLanguage] = useLanguage();
    const tabBarHeight = useBottomTabBarHeight();

    let [fontsLoaded] = useFonts({
        'SFProDisplayMedium': require('../../../assets/fonts/SFProDisplayMedium.otf'),
        'SFProDisplayBold': require('../../../assets/fonts/SFProDisplayBold.otf'),
        'SFProDisplayUltraLightItalic': require('../../../assets/fonts/SFProDisplayUltraLightItalic.otf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ backgroundColor: colors.theme.background, flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <BackButton onPress={() => { navigation.goBack() }} />
                    <View style={{ flex: 1, justifyContent: "center", marginRight: '15%', alignItems: "center", paddingTop: '15%' }}>
                        <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 22, alignSelf: 'center', color: colors.theme.title }}>{language.privacy}</Text>
                    </View>
                </View>
                <ScrollView overScrollMode="never" style={{ marginBottom: tabBarHeight, marginTop: "10%", marginLeft:25, marginRight:25}}>
                <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 16, textAlign: 'justify', color: colors.theme.title }}>
                {language.introduzione }               

                <Text style={{ fontFamily: "SFProDisplayMedium",fontSize: 22, alignSelf: 'center', fontWeight: "bold", color: colors.theme.title}}>{language.funzioni}</Text>
                {language.funzioniContent}

                <Text style={{ fontFamily: "SFProDisplayMedium",fontSize: 22, alignSelf: 'center', fontWeight: "bold", color: colors.theme.title}}>{language.dati}</Text>
                {language.datiContent}

                <Text style={{ fontFamily: "SFProDisplayMedium",fontSize: 22, alignSelf: 'center', fontWeight: "bold", color: colors.theme.title}}>{language.reclami}</Text>
                {language.reclamiContent}

                <Text style={{ fontFamily: "SFProDisplayMedium",fontSize: 22, alignSelf: 'center', fontWeight: "bold", color: colors.theme.title }}>{language.contattaci}</Text>
                {language.contattaciContent}   

                <TouchableOpacity onPress={() => Linking.openURL(`mailto:luxerassistant@gmail.com?subject=${'Luxer Assistant Privacy Support'}`)}>
                <Text style={{ fontFamily: "SFProDisplayMedium", fontSize: 18, alignSelf: 'auto', color: colors.theme.title }}>luxerassistant@gmail.com</Text>
                </TouchableOpacity>    

                {"\n\n"}
                </Text>

                </ScrollView>
                </View>
                )
            }
};

export default Privacy;