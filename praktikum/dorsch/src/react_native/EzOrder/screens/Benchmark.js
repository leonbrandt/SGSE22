import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import Header from '../components/Header';
import Colors from '../constants/colors';
import { Logs } from 'expo';
Logs.enableExpoCliLogging();

import EzOrderBackend from '../javascript-client';



const Benchmark = props => {

    
    const [benchmarkResult, setBenchmarkResult] = useState("Kein Benchmark ausgeführt!");

    const benchmarkResultInputHandler = inputValue => {
        setBenchmarkResult(inputValue);
    }
    const bench = () => {
        var api = new EzOrderBackend.PositionApi();
        let categories = api.getPositions((categories) => { console.log(categories)});
        let result = "";

            let start = performance.now();
            let temp = 1;
            for (let i = 0; i < 200000000; i++)
            {
                temp += temp;
            }
            let stop =  performance.now();
            result += "Integer Addition Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            let tempd = 1.0;
            for (let d = 0.0; d < 200000000.0; d++)
            {
                temp += temp;
            }
            stop =  performance.now();
            result += "Double Addition Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            for (let d = 0.0; d < 100000000.0; d++)
            {
                tempd = Math.log(d);
            }
            stop =  performance.now();
            result += "Logarithm Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            temp = 1;
            for (let i = 0; i < 200000000; i++)
            {
                temp *= i;
            }
            stop =  performance.now();
            result += "Integer Multiplication Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            temp = Number.MAX_VALUE;
            for (let i = 1; i < 200000000; i++)
            {
                let dummy = temp / i;
            }
            stop =  performance.now();
            result += "Integer Division Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            tempd = 1.0;
            for (let d = 0.0; d < 200000000.0; d++)
            {
                tempd *= d;
            }
            stop =  performance.now();
            result += "Double Multiplication Score (lower is better): " + (stop - start).toString() + "\n";

            start = performance.now();
            tempd = Number.MAX_VALUE;
            for (let d = 1.0; d < 200000000.0; d++)
            {
                let dummy = tempd / d;
            }
            stop =  performance.now();
            result += "Double Division Score (lower is better): " + (stop - start).toString() + "\n";
            console.log(result);
            setBenchmarkResult(result);
    };
    return (
        <View>
            <Header title="Benchmark" />
            <View style={styles.screen}>
                <View style={{ ...styles.rowContainer, ...{ borderBottomWidth: 0 } }}>
                    <Text style={{ ...styles.text, ...styles.textLeft, ...styles.fill }}>Ergebnisse: {benchmarkResult}</Text>
                </View>
                <View style={{ ...styles.rowContainer, ...styles.button }}>
                    <View style={{ width: '100%', padding: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: Colors.primary, width: '100%', borderRadius: 10, elevation: 5  }} onPress={bench}>
                            <Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 20,
                                fontWeight: 'bold',
                                padding: 10
                            }}>Benchmark!</Text>
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