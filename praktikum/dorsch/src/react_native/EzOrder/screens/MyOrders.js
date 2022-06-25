import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Colors from '../constants/colors';

const MyOrders = props => {
    return (
        <View>
            <Header title="Meine Bestellungen" />
            <View style={styles.screen}>
                <View style={styles.container}>
                    <Text style={styles.title}>Bestellung vom 05.01.2019</Text>
                    <Text style={styles.text}>Status: offen</Text>
                    <View style={{ width: '100%', padding: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.primary, width: '100%', borderRadius: 10  }} onPress={() => { this.handleClick }}>
                            <Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 25,
                                fontWeight: 'bold',
                                padding: 10,
                                elevation: 5
                            }}>Bestelldetails ansehen</Text>
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
        fontWeight: 'bold',
        marginLeft: 43
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
    container: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: 2,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        flex: 1,
        width: '90%',
        padding: 10
    },
});

export default MyOrders;