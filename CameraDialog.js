import React from 'react';
import {StyleSheet, AppRegistry, View, Text } from 'react-native';
import App from "../App";


export default class CameraDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi!!!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center'
    },
    image: {
        width: 300,
        resizeMode: 'contain',
        height: 400
    },
    textContainer: {
        width: 280,
        textAlign: 'center',
        padding: 10
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 20
    },
});

AppRegistry.registerComponent('CameraDialog', () => App);