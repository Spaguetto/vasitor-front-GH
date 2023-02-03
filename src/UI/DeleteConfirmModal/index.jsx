//FIXME: contexto del modal para que quede superpuesto en toda la pagina.
//FIXME: Modal no está cerrando al hacer click fuera de él.
//TODO: [VIS-89] integración con backend, eliminar datos
import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
//import axios from "axios";

// styled components
import "./style";

function DeleteConfirmAlert({ open, onClose, onDelete }) {
  const [data, setData] = useState({});

  const handleChangeField = (event) => {
    console.log(data);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  //TODO: Estandarizar variables para cambiar el texto del modal
  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Are you sure you want to delete this?</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Users will stop having access to this role and all the permissions
          related. You can undo this action unless you want to delete it
          permanently:
        </Typography>
        <FormControlLabel
          sx={{
            mt: 1,
            ml: 1,
          }}
          control={<Checkbox />}
          label={"delete permanently"}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmAlert;
