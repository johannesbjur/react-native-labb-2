import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export const Device = ({itemName, setActiveDevices, activeDevices}) => {

    const [active, setActive] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('red')

    const changeActive = (toggleType) => {

        if( active == toggleType ) {
            return
        }

        setActive(toggleType)

        if(toggleType) {
            setBackgroundColor('green')
            setActiveDevices(activeDevices + 1)
        }
        else {
            setBackgroundColor('red')
            setActiveDevices(activeDevices - 1)
        }  
    }

    return (
        <View style={styles.container}>

            <View style={styles.indicatorContainer}>
                <View style={[styles.indicator, { backgroundColor: backgroundColor }]}></View>
                <Text style={styles.deviceName}>{itemName}</Text>
            </View>

            <View style={styles.btnContainer}>
                <Button
                    title="on"
                    onPress={ () => changeActive(true)}
                />
                <Button
                    title="off"
                    onPress={ () => changeActive(false)}
                />
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fef5af',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnContainer: {
        alignSelf: 'flex-end',
        padding: 10
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    indicator: {
        height: 20,
        width: 20,
        marginRight: 15
    },
    deviceName: {
        fontSize: 20,
    }
});