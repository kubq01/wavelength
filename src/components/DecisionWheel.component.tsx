import decisionWheelImg from '../assets/decisionWheel.png'
import selectorImg from '../assets/selector.png'
import {Pointer} from "./Pointer.component.tsx";
import {type Dispatch, type SetStateAction} from "react";
import {Cover} from "./Cover.component.tsx";

type Props = {
    selectorAngle: number
    setPointerAngle: Dispatch<SetStateAction<number>>
    hideWheel: boolean
}

export const DecisionWheel = ({selectorAngle, setPointerAngle, hideWheel}: Props) => {

    return <>
        <div className="wheel-container">
            <img src={decisionWheelImg} className="decision-wheel" alt="" draggable={false}/>
            <img src={selectorImg}
                 className="selector"
                 alt=""
                 style={{
                     transform: `rotate(${selectorAngle}deg)`,
                     transformOrigin: "50% 90%"
                 }}
                 draggable={false}
            />
            <Pointer setPointerAngle={setPointerAngle}/>
            <Cover hide={hideWheel}/>
        </div>
    </>
}