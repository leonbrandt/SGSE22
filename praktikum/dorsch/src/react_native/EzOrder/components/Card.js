import React from 'react';

import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: '95%',
        maxWidth: '95%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Card;