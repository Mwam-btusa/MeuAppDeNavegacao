import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return(
        <View style={ style.container}>
            <Text style={style.title}>Home Screen</Text>
            <View style={style.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={style.buttonContainer}>
                <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
                />
            </View> 
        </View>
    );
}






const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',// cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6', //cor de fundo do container do botão    
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});