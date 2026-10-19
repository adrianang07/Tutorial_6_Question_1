import { useState } from "react";

function Competition() {
    const [player1score, setPlayer1score] = useState("");
    const [player2score, setPlayer2score] = useState("");
    const [winMessage, setWinMessage] = useState("");
    const [gameWon, setGameWon] = useState(false);

    const increasePlayer1 = () => {
        if (player1score < 5) {
            setPlayer1score(Number(player1score + 1));
        }

        if (player1score == 4) {
            setWinMessage("Player 1 Won!");
            setGameWon(true);
        }
    }

    const increasePlayer2 = () => {
        if (player2score < 5) {
            setPlayer2score(Number(player2score + 1));
        }

        if (player2score == 4) {
            setWinMessage("Player 2 Won!");
            setGameWon(true);
        }
    }

    const decreasePlayer1 = () => {
        if (player1score > 0) {
            setPlayer1score(Number(player1score - 1));
        }
    }

    const decreasePlayer2 = () => {
        if (player2score > 0) {
            setPlayer2score(Number(player2score - 1));
        }
    }

    const resetAll = () => {
        setPlayer1score(0);
        setPlayer2score(0);
        setWinMessage("");
        setGameWon(false);
    }

    return (
        <div>
            <h2>Score Tracker</h2>
            <p><b>Player 1 Score: {player1score}</b></p>
            <button onClick={increasePlayer1} disabled={gameWon || player1score == 5}>Correct +1</button>
            <button onClick={decreasePlayer1} disabled={gameWon || player1score == 0}>Wrong -1</button>
            {player1score == 5 && <p>Max limit reached!</p>}
            {player1score == 0 && <p>Min limit reached!</p>}

            <br /><br />
            <p><b>Player 2 Score: {player2score}</b></p>
            <button onClick={increasePlayer2} disabled={gameWon || player2score == 5}>Correct +1</button>
            <button onClick={decreasePlayer2} disabled={gameWon || player2score == 0}>Wrong -1</button>
            
            {player2score == 5 && <p>Max limit reached!</p>}
            {player2score == 0 && <p>Min limit reached!</p>}

            <br />
            <p>{winMessage}</p>

            <br />
            <button onClick={resetAll}>Reset</button>
        </div>
    )

}

export default Competition;