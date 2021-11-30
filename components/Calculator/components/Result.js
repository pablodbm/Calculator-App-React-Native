import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.containe2r}>
                <Text>{this.props.numberResult} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containe2r: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center'
    },
});