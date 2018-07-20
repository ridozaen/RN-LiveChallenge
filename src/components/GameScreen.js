import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionReset, actionBoardPress } from '../store/actions'


class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countClick : 0
        };
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress(x, y) {
        const board = this.props.board
        let player = this.props.player
        this.setState({
            countClick : this.state.countClick +1
        })
        if (board[x][y] === 0){
            if(player === 1){
                board[x][y] = 1
                player = 2
            }else{
                board[x][y] = 2
                player = 1
            }
        }
        let newBoard = [...board]
        this.props.actionBoardPress(newBoard, player)
        if(this.state.countClick === 5){
            this.gameOver()
        }
    }
    gameOver(){
        this.props.navigation.navigate('End')
    }
    checkWinner(){
        let board = this.props.board
        //check atas 

        for(var i = 0; i < 2; i++) {
            if (board[i][0] === 1) {
            }
          }
    }
    render() {
        // if(this.state.countClick === 6){
        //     this.gameOver()
        // }
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight onPress={() => this.handlePress(0, 0)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[0][0] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[0][0] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}

                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(0, 1)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[0][1] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[0][1] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(0, 2)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[0][2] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[0][2] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight onPress={() => this.handlePress(1, 0)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[1][0] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[1][0] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(1, 1)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[1][1] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[1][1] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(1, 2)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[1][2] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[1][2] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 40 }}>
                    <TouchableHighlight onPress={() => this.handlePress(2, 0)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[2][0] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[2][0] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(2, 1)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[2][1] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[2][1] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(2, 2)}>
                        <View style={{ width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center' }}>
                            {this.props.board[2][2] === 1 && <Text style={{ textAlign: 'center' }}> O </Text>}
                            {this.props.board[2][2] === 2 && <Text style={{ textAlign: 'center' }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.board,
        player: state.player
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        actionReset,
        actionBoardPress
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);