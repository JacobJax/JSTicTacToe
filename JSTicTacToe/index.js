postn = document.querySelectorAll('th')
banner = document.querySelector('.banner')
rButton = document.querySelector('button')
pOneScore = document.querySelector('.player-1-score')
pTwoScore = document.querySelector('.player-2-score')

let playerOne = 'X'
let playerTwo = 'O'

rButton.addEventListener('click', () => {
    resetBoard(postn)
    banner.innerText = ''
})

let turn = 'player1'
postn.forEach(post => {
    post.addEventListener('click', e => {
        if(turn === 'player1'){
            turn = 'player2'
            drawCharacter(e.target, playerOne)
            if (winCheck(postn, playerOne)) {
                banner.innerText = 'PLAYER 1 WINS🎉🎉'
                let newScore = increaseScore(parseInt(pOneScore.innerText))
                pOneScore.innerText = newScore
                
            }
        }else{
            turn = 'player1'
            drawCharacter(e.target, playerTwo)
            if (winCheck(postn, playerTwo)) {
                banner.innerText = 'PLAYER 2 WINS🎉🎉'
                let newScore = increaseScore(parseInt(pTwoScore.innerText))
                pTwoScore.innerText = newScore
                
            }
        }
    })
})

const increaseScore = score => {
    return score + 1
}

const drawCharacter = (position, character) => {
    let mty = checkEmpty(position.innerText)
    if(mty) {
        position.innerText = character
    }
}

const checkEmpty = (position) => {
    let isEmpty = false
    if(position === ''){
        isEmpty = true
    }else{
        isEmpty = false
    }

    return isEmpty
}

const winCheck = (board, mark) => {
    if (board[0].innerText === mark && board[1].innerText === mark && board[2].innerText === mark || board[3].innerText === mark && board[4].innerText === mark && board[5].innerText === mark || board[6].innerText === mark && board[7].innerText === mark && board[8].innerText === mark || board[0].innerText === mark && board[3].innerText === mark && board[6].innerText === mark || board[1].innerText === mark && board[4].innerText === mark && board[7].innerText === mark || board[2].innerText == mark && board[5].innerText === mark && board[8].innerText === mark || board[2].innerText === mark && board[4].innerText === mark && board[6].innerText === mark || board[0].innerText === mark && board[4].innerText === mark && board[8].innerText === mark ) {
        return true
    }else{
        return false
    }
}

const resetBoard = (board) => {
    board.forEach(sect => {
        sect.innerText = ''
    })
}