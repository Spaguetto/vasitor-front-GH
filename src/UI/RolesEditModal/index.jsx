//TODO: clean file
//FIXME: contexto del modal para que quede superpuesto en toda la pagina.
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

function RolesEditModal({ open, onClose, onRegister, data }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChangeField = (event) => {
    console.log(formData);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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


  //TODO: implementar fields del template:
  // usando <Container/> (ver ejemplo usersettings)
  // <LabeledFormInput id={`${type}ProfileBirthday`} title="Birthday" placeholder="Birthday"
  // customInput={<Input as={DateInput} id={`${type}ProfileBirthday`} />}/>
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
              defaultValue={data.roleName ? data.roleName : undefined}
            />
            <TextField
              onChange={handleChangeField}
              required
              name="description"
              color="primary"
              variant="standard"
              label="Description"
              defaultValue={data.description ? data.description : undefined}
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

