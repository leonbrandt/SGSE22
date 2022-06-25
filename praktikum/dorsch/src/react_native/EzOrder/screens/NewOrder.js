import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import CheckBox from 'expo-checkbox';
import NumericInput from 'react-native-numeric-input';
import DatePicker from 'react-native-datepicker';

import Header from '../components/Header';
import Colors from '../constants/colors';

const NewOrder = props => {
    const [date, setDate] = useState();
    const [coffeeAmount, setCoffeeAmount] = useState(0);
    const [milkCleanerAmount, setMilkCleanerAmount] = useState(0);
    const [cleaningTabletsAmount, setCleaningTabletsAmount] = useState(0);
    const [decalcTabletsAmount, setDecalcTabletsAmount] = useState(0);
    const [maintenanceNeeded, setMaintenanceNeeded] = useState();

    const coffeeInputHandler = inputValue => {
        setCoffeeAmount(inputValue);
    }

    const milkCleanerInputHandler = inputValue => {
        setMilkCleanerAmount(inputValue);
    }

    const cleaningTabletsInputHandler = inputValue => {
        setCleaningTabletsAmount(inputValue);
    }

    const decalcTabletsInputHandler = inputValue => {
        setDecalcTabletsAmount(inputValue);
    }

    const maintenanceNeededInputHandler = inputValue => {
        setMaintenanceNeeded(inputValue);
    }

    return (
        <View>
            <Header title="Neue Bestellung" />
            <View style={styles.screen}>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>1. Kaffee:</Text>
                </View><View style={styles.rowContainer}>
                    <Image source={{ uri: 'https://dorsch.it/Products/Kaffee.png' }} style={{ width: 200, height: 200, marginRight: 10 }} />
                    <View style={{ paddingTop: '10%' }}><NumericInput onChange={coffeeInputHandler}></NumericInput><Text style={{ ...{ ...styles.text, ...{ paddingTop: 20 }, ...styles.textRight } }}>* 1 kg</Text></View>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>2. Reinigungsmittel:</Text>
                </View>
                <View>
                    <Text style={styles.text}>Milchsystem-Reiniger</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: 'https://dorsch.it/Products/Milchsystem-Reiniger.png' }} style={{ width: 200, height: 200, marginRight: 10 }} />
                    <View style={{ paddingTop: '10%' }}><NumericInput onChange={milkCleanerInputHandler}></NumericInput><Text style={{ ...{ ...styles.text, ...{ paddingTop: 20 }, ...styles.textRight } }}>* Flaschen je 1l</Text></View>
                </View>
                <View>
                    <Text style={styles.text}>Reinigungstabletten</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: 'https://dorsch.it/Products/Reinigungstabletten.png' }} style={{ width: 200, height: 200, marginRight: 10 }} />
                    <View style={{ paddingTop: '10%' }}><NumericInput onChange={cleaningTabletsInputHandler}></NumericInput><Text style={{ ...{ ...styles.text, ...{ paddingTop: 20 }, ...styles.textRight } }}>* 6 Tabletten</Text></View>
                </View>
                <View>
                    <Text style={styles.text}>Entkalkungstabletten</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: 'https://dorsch.it/Products/Entkalkungstabletten.png' }} style={{ width: 200, height: 200, marginRight: 10 }} />
                    <View style={{ paddingTop: '10%' }}><NumericInput onChange={decalcTabletsInputHandler}></NumericInput><Text style={{ ...{ ...styles.text, ...{ paddingTop: 20 }, ...styles.textRight } }}>* 3 x 3 Tabletten</Text></View>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>3. Wartung:</Text>
                    <CheckBox style={{ marginLeft: '20%' }} onValueChange={maintenanceNeededInputHandler} value={maintenanceNeeded}></CheckBox><Text style={styles.text}>Wartung nötig</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Wartungstermin:</Text>
                    <DatePicker style={styles.datePicker} onDateChange={(date) => { setDate(date) }} date={date}></DatePicker>
                </View>
                <View style={{ ...styles.rowContainer, ...styles.button }}>
                    <View style={{ width: '50%', padding: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.accent, width: '100%', borderRadius: 10, elevation: 5  }} onPress={() => { onCancelPress }}>
                            <Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}>Abbrechen</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', padding: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.primary, width: '100%', borderRadius: 10, elevation: 5  }} onPress={() => { onSumbitPress }}>
                            <Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}>Bestätigen</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    contentPadding: {
        padding: 20
    },
    button: {
        padding: 20,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        fontWeight: 'bold',
        fontSize: 60,
        alignSelf: 'stretch',
        borderRadius: 10 
    },
    textLeft: {
        textAlign: "left"
    },
    textRight: {
        paddingRight: 25,
        textAlign: "right",
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'left',
        flex: 1,
        width: '90%',
        padding: 10
    },
    datePicker: {
        paddingLeft: 25,
        width: '60%'
    }
});

export default NewOrder;