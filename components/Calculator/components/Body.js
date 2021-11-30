import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nums from './Nums';
import Operators from './Operators';
export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Nums  countResult={this.props.countResult} onClick={this.props.onUpdate} content={this.props.content}  />
                <Operators clear={this.props.clear} countExtendedResult={this.props.countExtendedResult} content={this.props.content} onClick={this.props.onUpdate} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#A9A9A9',
        flexDirection: "row"
    },
});

