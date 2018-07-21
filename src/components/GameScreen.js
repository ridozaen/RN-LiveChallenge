import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionReset, actionBoardPress, actionSetWinner } from '../store/actions'
import Promise from 'bluebird'


class GameScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countClick: 0
        };
        this.handlePress = this.handlePress.bind(this)
        this.setStateAsync = Promise.promisify(this.setState) //async await the count state
    }
    async handlePress(x, y) {
        const board = this.props.board
        let player = this.props.player
        let newPlayer = ''
        this.setState({
            countClick: this.state.countClick + 1
        })
        if (board[x][y] === 0) {
            if (player === 1) {
                board[x][y] = 1
                newPlayer = 2
            } else {
                board[x][y] = 2
                newPlayer = 1
            }
        }
        let newBoard = [...board]
        this.props.actionBoardPress(newBoard, newPlayer)
        await this.setStateAsync({count: this.state.countClick + 1})
        if (this.checkWinner(x, y, player) && this.state.countClick < 9) {
            this.props.actionSetWinner(player)
            this.gameOver()
        }

        if (this.state.countClick === 9){
            this.props.actionSetWinner(0)
            this.gameOver()
        }
    }
    gameOver() {
        this.props.navigation.navigate('End')
    }
    checkWinner(x, y, player) {
        let board = this.props.board

        //check horizontal 
        if (this.checkHorizontal(board, x, player)) return true
        //check vertical
        if (this.checkVertical(board, y, player)) return true
        //check serong kiri
        if (this.checkCrossleft(board, player)) return true
        //check serong kanan
        if (this.checkCrossRight(board, player)) return true

        return false
    }
    checkHorizontal(board, x, player) {
        for (var i = 0; i <= 2; i++) {
            if (board[x][i] !== player) {
                return false
            }
        }
        return true
    }
    checkVertical(board, y, player) {
        for (var i = 0; i <= 2; i++) {
            if (board[i][y] !== player) {
                return false
            }
        }
        return true
    }
    checkCrossRight(board, player) {
        for (var i = 0; i <= 2; i++) {
            if (board[i][2 - i] !== player) {
                return false
            }
        }
        return true
    }
    checkCrossleft(board, player) {
        for (var i = 0; i <= 2; i++) {
            if (board[i][i] !== player) {
                return false
            }
        }
        return true
    }

    render() {
        // if(this.state.countClick === 6){
        //     this.gameOver()
        // }
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 70 }}>
                    <TouchableHighlight onPress={() => this.handlePress(0, 0)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[0][0] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[0][0] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}

                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(0, 1)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[0][1] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[0][1] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(0, 2)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[0][2] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[0][2] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 70 }}>
                    <TouchableHighlight onPress={() => this.handlePress(1, 0)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[1][0] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[1][0] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(1, 1)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[1][1] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[1][1] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(1, 2)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[1][2] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[1][2] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginBottom: 70 }}>
                    <TouchableHighlight onPress={() => this.handlePress(2, 0)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[2][0] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[2][0] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(2, 1)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[2][1] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[2][1] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.handlePress(2, 2)}>
                        <View style={{ width: 70, height: 70, backgroundColor: '#c5cae9', justifyContent: 'center', borderWidth: 1 }}>
                            {this.props.board[2][2] === 1 && <Text style={{ textAlign: 'center', fontSize: 30 }}> O </Text>}
                            {this.props.board[2][2] === 2 && <Text style={{ textAlign: 'center', fontSize: 30 }}> X </Text>}
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
        player: state.player,
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        actionReset,
        actionBoardPress,
        actionSetWinner
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);