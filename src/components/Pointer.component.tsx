import pointerImg from "../assets/pointer.png";
import {type Dispatch, type SetStateAction, useEffect, useRef, useState} from "react";

type Props = {
    setPointerAngle: Dispatch<SetStateAction<number>>
}

export const Pointer = ({setPointerAngle}: Props) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging || !imgRef.current) return;

            const rect = imgRef.current.getBoundingClientRect();

            const pivotX = rect.left + rect.width * 0.5;
            const pivotY = rect.top + rect.height * 0.8;

            const pointX = e.clientX - pivotX === 0 ? 1 : e.clientX - pivotX
            const pointY = e.clientY - pivotY < 0 ? e.clientY - pivotY : 0

            const angle =
                Math.atan2(
                    pointY,
                    pointX
                ) *
                (180 / Math.PI);

            if(angle < -170) {
                setRotation(-80)
                setPointerAngle(-80);
            } else if (angle > -10) {
                setRotation(80)
                setPointerAngle(80);
            } else {
                setRotation(angle + 90);
                setPointerAngle(Math.floor(angle) + 90);
            }
        };

        const handlePointerUp = () => {
            setIsDragging(false);
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerup", handlePointerUp);
        };
    }, [isDragging]);

    return (
        <img
            ref={imgRef}
            src={pointerImg}
            alt=""
            className="pointer"
            onPointerDown={() => setIsDragging(true)}
            style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "50% 80%",
                cursor: isDragging ? "grabbing" : "grab"
            }}
            draggable={false}
        />
    );
}