import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionReset, actionBoardPress } from '../store/actions'

class EndScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.restartGame = this.restartGame.bind(this)
    }
    restartGame(){
        this.props.actionReset()
        this.props.navigation.navigate('Home')
    }
    componentDidMount(){
        // this.props.board
    }
    render() {
        return (
            <View>
                <Text>Congratulation!!!</Text>
                <Text>The Winner is : Player {this.props.winner}</Text>
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

export default connect(mapStateToProps,mapDispatchToProps)(EndScreen);