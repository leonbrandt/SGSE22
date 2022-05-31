import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

import Header from '../components/Header';
import Colors from '../constants/colors';

const ViewOrder = props => {
    const [date, setDate] = useState();
    return (
        <View>
            <Header title="Bestelldetails" />
            <View style={styles.screen}>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Name: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>Max Mustermann</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>E-Mail-Adresse: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>max.muster@firma.tld</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Telefonnummer: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>012345 98765321</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Adresse: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>Teststraße 10</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textRight }}>12345 Stadt</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Firmenname: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>Firma</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Abteilung: </Text>
                    <Text style={{ ...styles.text, ...styles.textRight }}>-</Text>
                </View>
                <Text style={styles.title}>Positionen:</Text>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>1. Kaffee: </Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Kaffeebohnen: </Text><Text style={{ ...styles.text, ...styles.textRight }}>1 *</Text><Text style={{ ...styles.text, ...styles.textRight }}>1 kg</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>2. Reinigungsmittel: </Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Milchsystem-Reiniger</Text><Text style={{ ...styles.text, ...styles.textRight }}>1 *</Text><Text style={{ ...styles.text, ...styles.textRight }}>1l</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Reinigungs-Tabletten</Text><Text style={{ ...styles.text, ...styles.textRight }}>2 *</Text><Text style={{ ...styles.text, ...styles.textRight }}>1 P</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Entkalkungstabletten</Text><Text style={{ ...styles.text, ...styles.textRight }}>4 *</Text><Text style={{ ...styles.text, ...styles.textRight }}>1 P</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>3. Wartung: </Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Wartung wird benötigt!</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Gewünschter Termin: 01.12.2019</Text>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={{ ...styles.text, ...styles.textLeft }}>Lieferdatum:</Text>
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
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    button: {
        fontWeight: 'bold',
        fontSize: 60,
        alignSelf: 'stretch'
    },
    textLeft: {
        paddingLeft: 25,
        textAlign: "left",
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
        paddingLeft: 20,
        width: '65%'
    }
});

export default ViewOrder;