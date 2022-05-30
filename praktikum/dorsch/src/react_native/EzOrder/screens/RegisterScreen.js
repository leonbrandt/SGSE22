import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Alert } from 'react-native';

import Header from '../components/Header';
import Input from '../components/Input';
import Colors from '../constants/colors';

const RegisterScreen = props => {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');

    const lastnameInputHandler = inputText => {
        setLastname(inputText);
    }

    const firstnameInputHandler = inputText => {
        setFirstname(inputText);
    }

    const emailInputHandler = inputText => {
        setEmail(inputText);
    }

    const phoneInputHandler = inputText => {
        setPhone(inputText);
    }

    const addressInputHandler = inputText => {
        setAddress(inputText);
    }

    const zipInputHandler = inputText => {
        setZip(inputText);
    }

    const cityInputHandler = inputText => {
        setCity(inputText);
    }

    const companyInputHandler = inputText => {
        setCompany(inputText);
    }

    const departmentInputHandler = inputText => {
        setDepartment(inputText);
    }

    const confirmInputHandler = () => {
        if (!lastname) {
            Alert.alert("Bitte Nachnamen eingeben!");
            return;
        }
        if (!firstname) {
            Alert.alert("Bitte Vornamen eingeben!");
            return;
        }
        if (!email) {
            Alert.alert("Bitte E-Mail-Adresse eingeben!");
            return;
        }
        if (!phone) {
            Alert.alert("Bitte Telefonnummer eingeben!");
            return;
        }
        // register backend call
    }

    return (
        <View>
            <Header title="Registrierung" />
            <View style={styles.screen}>
                <View style={styles.contentPadding}>
                    <Text style={styles.text}>Nachname*:</Text><Input placeholder="Nachname (benötigt)" style={styles.input} autoCorrect={false} onChangeText={lastnameInputHandler} />
                    <Text style={styles.text}>Vorname*:</Text><Input placeholder="Vorname (benötigt)" style={styles.input} autoCorrect={false} onChangeText={firstnameInputHandler} />
                    <Text style={styles.text}>E-Mail-Adresse*:</Text><Input placeholder="E-Mail-Adresse (benötigt)" style={styles.input} autoCorrect={false} keyboardType="email-address" onChangeText={emailInputHandler} />
                    <Text style={styles.text}>Telefonnummer*:</Text><Input placeholder="0123456 98765" style={styles.input} autoCorrect={false} keyboardType="phone-pad" onChangeText={phoneInputHandler} />
                    <Text style={styles.text}>Straße und Hausnummer:</Text><Input placeholder="Straße und Hausnummer (optional)" style={styles.input} autoCorrect={false} onChangeText={addressInputHandler} />
                    <Text style={styles.text}>PLZ:</Text><Input placeholder="PLZ (optional)" style={styles.input} autoCorrect={false} keyboardType="numeric" onChangeText={zipInputHandler} />
                    <Text style={styles.text}>Ort:</Text><Input placeholder="Ort (optional)" style={styles.input} autoCorrect={false} onChangeText={cityInputHandler} />
                    <Text style={styles.text}>Firmenname:</Text><Input placeholder="Firmenname (optional)" style={styles.input} autoCorrect={false} onChangeText={companyInputHandler} />
                    <Text style={styles.text}>Abteilung / Kommission:</Text><Input placeholder="Abteilung / Kommission (optional)" style={styles.input} autoCorrect={false} onChangeText={departmentInputHandler} />
                    <View style={styles.button}>
                        <Button style={styles.button} title="Registrieren" color={Colors.primary} onPress={confirmInputHandler} />
                    </View>
                </View>
            </View>
        </View>
    );
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
    input: {
        width: Dimensions.get('window').width - 50
    },
    text: {
        fontSize: 20
    },
    button: {
        padding: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    }
});

export default RegisterScreen;