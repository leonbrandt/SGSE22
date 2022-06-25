import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput  {...props} style={{ ...styles.input, ...props.style }} blurOnSubmit autoCapitalize='sentences' />
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'grey',
        borderWidth: 1,
        margin: 2,
        fontSize: 20,
    }
});

export default Input;