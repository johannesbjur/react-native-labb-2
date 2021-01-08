import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export const Header = () => {

    return (
        <View style={styles.header}>
            <Image
                style={styles.image}
                source={require('../assets/house.png')}
            />

            <Text style={styles.title}>SmartHome</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 30
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3f7a79'
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 20
    }
});