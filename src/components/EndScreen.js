import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionReset, actionBoardPress } from '../store/actions'

class EndScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.restartGame = this.restartGame.bind(this)
    }
    restartGame() {
        this.props.actionReset()
        this.props.navigation.navigate('Home')
    }
    componentDidMount() {
        // this.props.board
    }
    render() {
        return (
            <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                <Text>Congratulation!!!</Text>
                <Text>{(this.props.winner !== 0) ? "The Winner is: " + this.props.winner : "The Game is Draw!!"}</Text>
                <Button title='End Game' onPress={this.restartGame} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        board: state.board,
        player: state.player,
        winner: state.winner
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        actionReset,
        actionBoardPress
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);