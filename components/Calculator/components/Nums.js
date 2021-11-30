import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
} from 'react-native';

const numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '='],
];

export default class Nums extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleNumberAdd = (value) => {
        switch (value) {
            case '=':
                this.props.countResult();

                break;
            case '.':
                const expressions = this.props.content.split(/[\+\-\*\/]/);
                if (expressions[expressions.length - 1].indexOf('.') == -1) {
                    this.props.onClick(this.props.content + value);
                }

                break;

            default:
                this.props.onClick(this.props.content + value);
                break;
        }
    };
    render() {
        return (
            <View style={styles.container}>
                {numbers.map((row, rowIndex) => (
                    <View key={`row_${rowIndex}`} style={styles.row}>
                        {row.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => this.handleNumberAdd(item)}
                                    style={styles.single}
                                    key={index}
                                >
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ))}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#A9A9A9',
    },
    row: {
        flex: 2,
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
    },
    single: {
        flex: 4,
        color: '#ff00ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
