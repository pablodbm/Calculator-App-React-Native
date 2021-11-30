import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Result from './Result';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> {this.props.content} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

