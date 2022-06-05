import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Colors from '../constants/colors';

const Benchmark = props => {
    const [date, setDate] = useState();
    return (
        <View>
            <Header title="Benchmark" />
            <View style={styles.screen}>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft, ...styles.fill }}>Ergebnisse:</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...styles.button }}>
                    <View style={{ width: '100%', padding: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.primary, width: '100%', borderRadius: 10, elevation: 5  }} onPress={() => { onSumbitPress }}>
                            <Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}>Benchmark</Text>
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
    fill: {
        flex: 1,
        width: '90%'
    }
});

export default Benchmark;