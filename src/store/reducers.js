const initiateState ={
    board: [[0,0,0],[0,0,0],[0,0,0]],
    winner: '',
    player: 1,
    count: 0,
    isLoading: false
}

const ticReducers = (state = initiateState, action) => {
    switch (action.type) {
        case 'BOARD_PRESS':
            return {
                ...state,
                board: [...action.payload.board],
                player: action.payload.player,
                count: state.count + 1
            }
        case 'SET_WINNER':
            return {
                ...state,
                winner: action.payload
            }
        case 'RESET_GAME':
            return {
                ...state,
                board: [[0,0,0],[0,0,0],[0,0,0]],
                winner: '',
                player: 1,
                count: 0
            }
        default:
            return state
    }
}

export default ticReducers