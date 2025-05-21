import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
return (
    <view style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>
        <View style={styles.ButtonContainer}>
            <Button
            title="Go to Home"
            onPress={() =>navigation.navigate('Home')}
            />
        </View>
        <View style={styles.ButtonContariner}>
            <Button
            title="Go to Details"
            onPress={() =>navigation.navigate('Details')}
            />
        </View>
    </view>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6fa', //cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    ButtonContariner: {     
    },
    ButtonContariner: {
        backgroundColor: '#dda0dd', //cor de fundo do conteiner do botão
        margin: 10,
        width: windowWidth * 0.5, //50% da largura da tela
        borderRadius: 5,
    },
});