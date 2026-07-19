import coverImg from "../assets/cover.png";

type Props = {
    hide: boolean
}

export const Cover = ({hide}: Props) => {
    return <img src={coverImg}
                className="cover"
                alt=""
                style={{
                    transform: `rotate(${hide ? 180 : 0}deg)`,
                    transformOrigin: "58% 0%",
                    transitionDuration: "1s"
                }}
    />
}