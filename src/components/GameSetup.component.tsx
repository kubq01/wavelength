import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {type Dispatch, type SetStateAction, useState} from "react";

type Props = {
    setFirstCategory: Dispatch<SetStateAction<string>>
    setSecondCategory: Dispatch<SetStateAction<string>>
    buttonText: string
    newGame: () => void
}

export const GameSetup = ({
                              setFirstCategory,
                              setSecondCategory,
                              newGame,
                              buttonText}: Props) => {
    const [open, setOpen] = useState(false);
    const [firstValue, setFirstValue] = useState<string>()
    const [secondValue, setSecondValue] = useState<string>()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFirstValue("")
        setSecondValue("")
    };

    const handleSubmit = () => {
        setFirstCategory(firstValue ?? "")
        setSecondCategory(secondValue ?? "")
        handleClose();
        newGame()
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {buttonText}
            </Button>
            <Dialog open={open} onClose={handleClose} className="category-dialog">
                <DialogTitle className="dialog-title">Wybierz kategorie</DialogTitle>
                <DialogContent>
                    <TextField
                        value={firstValue}
                        onChange={(e) =>
                            setFirstValue(e.target.value)}
                        autoFocus
                        id="kat1"
                        name="kat1"
                        label="Kategoria 1"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        value={secondValue}
                        onChange={(e) =>
                            setSecondValue(e.target.value)}
                        autoFocus
                        id="kat2"
                        name="kat2"
                        label="Kategoria 2"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className="dialog-button">Anuluj</Button>
                    <Button onClick={() => handleSubmit()} className="dialog-button">
                        Gotowe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}