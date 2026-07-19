import {useState} from "react";
import type {GameStatus} from "../commons/gameStatus.tsx";
import {ActionButtonWithResult} from "./ActionButtonWithResult.component.tsx";
import {DecisionWheel} from "./DecisionWheel.component.tsx";

export const GamePulpit = () => {
    const [selectorAngle, setSelectorAngle] = useState(0)
    const [pointerAngle, setPointerAngle] = useState(0)
    const [gameStatus, setGameStatus] = useState<GameStatus>("NEW_GAME")
    const [hideWheel, setHideWheel] = useState(false)
    const [firstCategory, setFirstCategory] = useState<string>("")
    const [secondCategory, setSecondCategory] = useState<string>("")

    const calculateSelection = () => {
        setSelectorAngle(Math.floor(Math.random() * 160) - 80)
    }

    return <>
        <div className="main-game-view">
            <div className="category-text">{firstCategory}</div>
            <DecisionWheel
                hideWheel={hideWheel}
                setPointerAngle={setPointerAngle}
                selectorAngle={selectorAngle}/>
            <div className="category-text">{secondCategory}</div>
        </div>
        <ActionButtonWithResult
            selectorAngle={selectorAngle}
            pointerAngle={pointerAngle}
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            calculateSelection={calculateSelection}
            setHideWheel={setHideWheel}
            setFirstCategory={setFirstCategory}
            setSecondCategory={setSecondCategory}
        />
    </>
}