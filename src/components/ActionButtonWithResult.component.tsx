import {type Dispatch, type SetStateAction, useMemo} from "react";
import type {GameStatus} from "../commons/gameStatus.tsx";
import {HideButton} from "./HideButton.component.tsx";
import {GuessButton} from "./GuessButton.component.tsx";
import {RepeatButton} from "./RepeatButton.component.tsx";
import {GameSetup} from "./GameSetup.component.tsx";

type Props = {
    selectorAngle: number,
    pointerAngle: number,
    gameStatus: GameStatus,
    setGameStatus: Dispatch<SetStateAction<GameStatus>>
    calculateSelection: () => void
    setHideWheel: Dispatch<SetStateAction<boolean>>
    setFirstCategory: Dispatch<SetStateAction<string>>
    setSecondCategory: Dispatch<SetStateAction<string>>
}

//5, 12, 21

export const ActionButtonWithResult = ({
                                           selectorAngle, pointerAngle,
                                           gameStatus, setGameStatus, calculateSelection, setHideWheel,
                                           setFirstCategory, setSecondCategory
                                       }: Props) => {

    const result = useMemo(() => {
        const guessDifference = Math.abs(selectorAngle - pointerAngle)
        if (guessDifference <= 5) {
            return <div className="result" style={{color: "#38b6ff"}}>IDEALNIE</div>
        } else if (guessDifference <= 12) {
            return <div className="result" style={{color: "#ff5050"}}>DOBRZE</div>
        } else if (guessDifference <= 21) {
            return <div className="result" style={{color: "#ffc500"}}>OK</div>
        } else {
            return <div className="result">SLABO</div>
        }
    }, [selectorAngle, pointerAngle])

    const newGame = () => {
        setGameStatus("SHOW_SELECTOR")
        calculateSelection()
    }

    switch (gameStatus) {
        case "NEW_GAME":
            return <div className="action-buttons">
                <GameSetup setFirstCategory={setFirstCategory}
                           setSecondCategory={setSecondCategory}
                           buttonText="Nowa gra"
                           newGame={newGame}/>
            </div>
        case "SHOW_SELECTOR":
            return <div className="action-buttons">
                <HideButton changeGameStatus={() => {
                    setGameStatus("GUESS")
                    setHideWheel(true)
                }}/>
            </div>
        case "GUESS":
            return <div className="action-buttons">
                <GuessButton changeGameStatus={() => {
                    setGameStatus("CHECK")
                    setHideWheel(false)
                }}/>
            </div>
        case "CHECK":
            return <div className="action-buttons">
                {result}
                <RepeatButton changeGameStatus={newGame}/>
                <GameSetup setFirstCategory={setFirstCategory}
                           setSecondCategory={setSecondCategory}
                           buttonText="Zmien kategorie"
                           newGame={newGame}/>
            </div>
    }
}