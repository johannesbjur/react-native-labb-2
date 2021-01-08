import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/header';
import { Room } from './components/room';
import { Device } from './components/device';


export default function App() {

    const [activeDevices, setActiveDevices] = useState(0)
    
  return (
    <View>
        <Header/>

        <Text style={styles.title}>Rooms</Text>
        <View style={styles.rooms}>
            <Room
                title="Living Room"
                image={ require('./assets/living-room.png') }
            />
            <Room
                title="Bedroom"
                image={ require('./assets/bed.png') }
            />
            <Room
                title="Kitchen"
                image={ require('./assets/kitchen.png') }
            />
        </View>

        <Text style={styles.title}>Devices</Text>
        
        <Device
            itemName="Living Room Lamp"
            setActiveDevices={setActiveDevices}
            activeDevices={activeDevices}
        />

        <Device
            itemName="Heater"
            setActiveDevices={setActiveDevices}
            activeDevices={activeDevices}
        />

        <Device
            itemName="TV"
            setActiveDevices={setActiveDevices}
            activeDevices={activeDevices}
        />

        <Text style={styles.deviceAmount}><Text style={{fontWeight: 'bold'}}>Total Devices On: </Text>{activeDevices}</Text>

    </View>
  );
}


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 10
    },
    rooms: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    deviceAmount: {
        fontSize: 20,
        marginLeft: 20
    }
});
