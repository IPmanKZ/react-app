import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import makeStyles from "@mui/styles/makeStyles";
import { DeleteOutline } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "400px",
  },
  dialogActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between !important",
  },
  icon: {
    paddingBottom: "3px",
  },
}));

export default function FormDialog({
  dialogState,
  setDialogState,
  editedObj,
  setEditedObj,
  makeAction,
}) {
  const handleAction = (e) => {
    const action = e.target.name ? e.target.name : "cancel";
    setDialogState({ open: false, action });
    makeAction(action);
  };
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setEditedObj((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const classes = useStyles();
  console.log("dialogState.action = ", dialogState.action);
  return (
    <div>
      <Dialog open={dialogState.open} name="cancel" onClose={handleAction}>
        <DialogTitle>
          {dialogState.action === "change" ? `Изменить` : `Добавить`}
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            required
            id="login"
            name="login"
            label="Логин"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue={editedObj ? editedObj.login : ""}
            onChange={handleChange}
          />
          <TextField
            required
            id="password"
            name="password"
            label="Пароль"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue={editedObj ? editedObj.password : ""}
            onChange={handleChange}
          />

          <TextField
            required
            id="firstname"
            name="firstname"
            label="Имя"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue={editedObj ? editedObj.firstname : ""}
            onChange={handleChange}
          />
          <TextField
            required
            id="lastname"
            name="lastname"
            label="Фамилия"
            type="text"
            fullWidth
            margin="normal"
            variant="outlined"
            defaultValue={editedObj ? editedObj.lastname : ""}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <div>
            {dialogState.action === "change" ? (
              <Button onClick={handleAction} name="delete" color="error">
                <DeleteOutline className={classes.icon} /> Удалить
              </Button>
            ) : null}
          </div>
          <div>
            <Button onClick={handleAction} name="cancel">
              Отмена
            </Button>
            <Button
              onClick={handleAction}
              name={dialogState.action === "change" ? `change` : `add`}
            >
              {dialogState.action === "change" ? `Изменить` : `Добавить`}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
