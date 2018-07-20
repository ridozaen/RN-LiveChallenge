const actionBoardPress = (board, player) => {
    return {
        type: 'BOARD_PRESS',
        payload: {board, player}
    }
}
const actionSetWinner = (player) => {
    return {
        type: 'SET_WINNER',
        payload: player
    }
}

const actionReset = () => {
    return {
        type: 'RESET_GAME'
    }
}

export {
    actionSetWinner,
    actionReset,
    actionBoardPress
}