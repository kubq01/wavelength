import {Button} from "@mui/material";

type Props = {
    changeGameStatus: () => void
}

export const GuessButton = ({changeGameStatus}: Props) => {
    return <Button variant="contained"
        onClick={changeGameStatus}>Zgadnij</Button>
}