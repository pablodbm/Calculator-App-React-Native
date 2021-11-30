import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
    Dimensions,
    Alert,
} from 'react-native';

export default class Operators extends Component {
    constructor(props) {
        super(props);
        Dimensions.addEventListener('change', this.checkOrientation);
        this.state = {
            orientantion: undefined,
        };
    }
    isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
    };
    checkOrientation = () => {
        this.setState({
            orientantion: this.isPortrait() ? 'pion' : 'poz',
        });
    };
    componentDidMount = () => {
        this.checkOrientation();
    };
    extentedActions = [
        {
            value: 'sqrt',
            onClick: () => {
                try {
                    this.props.countExtendedResult(
                        Math.sqrt(eval(this.props.content)),
                    );
                } catch (err) {
                    Alert.alert("błąd","Nie można obliczyć pierwiastka")
                }
                
            },
        },
        {
            value: 'pow',
            onClick: () => {
                try {
                    this.props.countExtendedResult(
                        Math.pow(eval(this.props.content),2),
                    );
                } catch (err) {
                    Alert.alert("błąd","Nie można obliczyć potęgi")
                }
            },
        },
        {
            value: 'sin',
            onClick: () => {
                try {
                    this.props.countExtendedResult(
                        Math.sin(eval(this.props.content)),
                    );
                } catch (err) {
                    Alert.alert("błąd","Nie można obliczyć sinusa")
                }
            },
        },
        {
            value: 'cos',
            onClick: () => {
                try {
                    this.props.countExtendedResult(
                        Math.cos(eval(this.props.content)),
                    );
                } catch (err) {
                    Alert.alert("błąd","Nie można obliczyć cosinus")
                }
            },
        },
    ];
    actions = [
        {
            value: 'Del',
            onClick: () => {
                this.props.onClick(
                    this.props.content.substring(0, this.props.content.length - 1),
                );
            },
        },
        {
            value: 'C',
            onClick: () => {
                this.props.clear();
            },
        },
        {
            value: '/',
            onClick: () => {
                
                if (
                    !isNaN(
                        parseInt(this.props.content[this.props.content.length - 1]),
                    )
                ) {
                    this.props.onClick(this.props.content + '/');
                } else if (this.props.content.length > 1) {
                    this.props.onClick(
                        this.props.content.substring(
                            0,
                            this.props.content.length - 1,
                        ) + '/',
                    );
                }
            },
        },
        {
            value: '*',
            onClick: () => {
                if (
                    !isNaN(
                        parseInt(this.props.content[this.props.content.length - 1]),
                    )
                ) {
                    this.props.onClick(this.props.content + '*');
                } else if (this.props.content.length > 1) {
                    this.props.onClick(
                        this.props.content.substring(
                            0,
                            this.props.content.length - 1,
                        ) + '*',
                    );
                }
            },
        },
        {
            value: '-',
            onClick: () => {
                if (
                    !isNaN(
                        parseInt(this.props.content[this.props.content.length - 1]),
                    ) ||
                    this.props.content.length == 0
                ) {
                    this.props.onClick(this.props.content + '-');
                } else {
                    this.props.onClick(
                        this.props.content.substring(
                            0,
                            this.props.content.length - 1,
                        ) + '-',
                    );
                }
            },
        },
        {
            value: '+',
            onClick: () => {
                if (
                    !isNaN(
                        parseInt(this.props.content[this.props.content.length - 1]),
                    )
                ) {
                    this.props.onClick(this.props.content + '+');
                } else if (this.props.content.length > 1) {
                    this.props.onClick(
                        this.props.content.substring(
                            0,
                            this.props.content.length - 1,
                        ) + '+',
                    );
                }
            },
        },
    ];

    render() {
        return (
            <View style={styles.mainContainer}>
                {this.state.orientantion === 'poz' && (
                    <View style={[styles.container, {backgroundColor: 'f2f2f2'}]}>
                        {this.extentedActions.map((item, index) => (
                            <TouchableOpacity
                                style={styles.single}
                                key={index}
                                onPress={item.onClick}
                            >
                                <Text>{item.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <View style={styles.container}>
                    {this.actions.map((item, index) => (
                        <TouchableOpacity
                            style={styles.single}
                            key={index}
                            onPress={item.onClick}
                        >
                            <Text>{item.value}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3DED97',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    single: {
        flex: 2,
        textAlign: 'center',
        justifyContent: 'center',
    },
});
