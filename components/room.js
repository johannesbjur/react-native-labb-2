import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export const Room = ({title, image}) => {
    
    var icon = image

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={icon}
            />
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#64b8b8',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70
    }
});

Room.defaultProps = {
    title: 'Bedroom',
    image: require('../assets/bed.png')
}

