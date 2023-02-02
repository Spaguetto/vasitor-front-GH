//TODO: clean file
//FIXME: contexto del modal para que quede superpuesto en toda la pagina.
//FIXME: Modal no está cerrando al hacer click fuera de él.
import React, { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Input,
  Box,
  Typography,
  Divider
} from "@mui/material";
//import axios from "axios";
import { registerStyles } from "@emotion/utils";
// styled components
import './style';
import Btn from "@ui/Btn";

function DeleteConfirmAlert({ open, onClose, onDelete }) {
  const [data, setData] = useState({});
  const [files, setFiles] = useState({});
  const [rformData, setRformdata] = useState(new FormData());
  const [previewImage, setPreviewImage] = useState('')
  const inputFileRef = useRef(null);

  const handleButtonClick = () => {
    if (inputFileRef.current !== null) {
      inputFileRef.current.click();
    }
  }

  const handleChangeField = (event) => {
    console.log(data);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    rformData.set(event.target.name, event.target.value);
    setRformdata(rformData);
  };

  const handleChangeFile = (event) => {
    console.log(event.target.files[0]);
    setFiles({
      ...files,
      [event.target.name]: event.target.files[0],
    });
    if(event.target.id == "main_image"){
      const file = event.target.files[0]
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      }
      reader.readAsDataURL(file);
      rformData.append("main_image", event.target.files[0]);
      setRformdata(rformData);
    }
    else{
      rformData.append("other_media", event.target.files[0]);
      setRformdata(rformData);
    }
    console.log(previewImage)
  };


  //TODO: Estandarizar variables para cambiar el texto del modal
  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Are you sure you want to delete this?</DialogTitle>
      <DialogContent dividers>
        <Typography>
          Users will stop having access to this role and all the permissions related. 
          You can undo this action unless you want to delete it permanently:
        </Typography>
        <FormControlLabel
          sx={{ 
            mt: 1,
            ml: 1
          }}
          control={<Checkbox/>}
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

