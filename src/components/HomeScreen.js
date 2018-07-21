import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.startGame = this.startGame.bind(this)
    }
    startGame(){
        this.props.navigation.navigate('Game')
    }
    render() {
        return (
            <View>
                <Button title='Start Game' onPress={this.startGame}/>
            </View>
        );
    }
}

export default HomeScreen;