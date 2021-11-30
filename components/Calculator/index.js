import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Body from './components/Body';
import Result from './components/Result';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberResult: undefined,
            headerContent: '',
        };
    }

    submitValue = () => {
        if (
            !isNaN(
                parseInt(
                    this.state.headerContent[this.state.headerContent.length - 1],
                ),
            )
        ) {
            this.setState({
                numberResult: eval(this.state.headerContent),
                headerContent: '',
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Header content={this.state.headerContent} />
                <Result numberResult={this.state.numberResult} />
                <Body
                    clear={() => {
                        this.setState({numberResult: undefined, headerContent: ''});
                    }}
                    countResult={this.submitValue}
                    content={this.state.headerContent}
                    onUpdate={(value) => {
                        this.setState({
                            headerContent: value,
                        });
                    }}
                    countExtendedResult={(result)=>{
                        this.setState({
                            numberResult:result,
                            headerContent:""
                        })
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
