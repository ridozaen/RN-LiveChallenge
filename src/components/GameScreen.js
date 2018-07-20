import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> o </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> o </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> o </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> X </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> X </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> X </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> X </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}} > X </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            <Text style={{textAlign: 'center'}}> X </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default GameScreen;