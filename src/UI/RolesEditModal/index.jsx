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
  Box
} from "@mui/material";
//import axios from "axios";
import { Image } from "@mui/icons-material";
import { registerStyles } from "@emotion/utils";
// styled components
import './style';
import Btn from "@ui/Btn";

function RolesEditModal({ open, onClose, onRegister }) {
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

  const handleRegister = (event) => {
    event.preventDefault();

    onRegister();
    onClose();

    //console.log(rformData)

    // axios
    //   .post("http://192.168.1.92:5000/Item/createNew", rformData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Register new role</DialogTitle>
      <DialogContent>
        <form>
          <FormGroup>
            <TextField
              onChange={handleChangeField}
              required
              name="roleName"
              color="primary"
              variant="standard"
              label="Role Name"
            />
            <TextField
              onChange={handleChangeField}
              required
              name="description"
              color="primary"
              variant="standard"
              label="Description"
            />
          </FormGroup>
        </form>
      </DialogContent>
      <DialogActions>
        <Btn text="Cancel" handler={onClose}/>
        <Btn text="Register" handler={handleRegister} type="submit"/>
      </DialogActions>
    </Dialog>
  );
  // DISCUSS: cambiar los estilos de botones para el modal.
  // DISCUSS: cambiar el estilo del modal
  // DISCUSS: considerar más campos de ser necesario(?)
}

export default RolesEditModal;

