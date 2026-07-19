import {Button} from "@mui/material";

type Props = {
    changeGameStatus: () => void
}

export const RepeatButton = ({changeGameStatus}: Props) => {
    return <Button variant="contained"
        onClick={changeGameStatus}>Powtorz</Button>
}