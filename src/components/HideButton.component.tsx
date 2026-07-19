import {Button} from "@mui/material";

type Props = {
    changeGameStatus: () => void
}

export const HideButton = ({changeGameStatus}: Props) => {
    return <Button variant="contained"
        onClick={changeGameStatus}>Ukryj</Button>
}