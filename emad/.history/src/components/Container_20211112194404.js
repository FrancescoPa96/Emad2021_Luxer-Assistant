import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';

const Container = (navigation) => {
    return(
        <TouchableOpacity activeOpacity={.6} style={{ padding: 15, paddingTop: 0, marginBottom: 40 }} onPress={() => navigation.navigate('Catalogo')}>
        <View style={styles.catalogCard} />
        </TouchableOpacity > 
    )
};


const styles = StyleSheet.create({
    catalogCard: {
        marginBottom: 0,
        backgroundColor: "white",
        height: 160,
        borderRadius: 20,
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 0
      },
  });

export default Container;