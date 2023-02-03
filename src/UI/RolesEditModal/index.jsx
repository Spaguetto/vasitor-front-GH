//TODO: clean file
//FIXME: contexto del modal para que quede superpuesto en toda la pagina.
//TODO: [VIS-90] integración con backend, crear o editar datos
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";
//import axios from "axios";
// styled components
import './style';
import Btn from "@ui/Btn";
import LabeledFormInput from "@ui/LabeledFormInput";
import { Container, TextAreaField } from "./style";

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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Register new role</DialogTitle>
      <DialogContent>
        <form>
          <Container>
            <LabeledFormInput 
              id={`${data.id}rolename`}
              title="Role Name"
              fieldName="roleName"
              placeholder="role name"
              handler={handleChangeField}
              defaultValue={data.roleName ? data.roleName : undefined}
            />
            <LabeledFormInput 
              id={`${data.id}description`}
              title="Description" 
              placeholder="description"
              name="description"
              customInput={
                <TextAreaField
                  name="description"
                  defaultValue={data.description ? data.description : undefined}
                  placeholder="description"
                  onChange={handleChangeField}
                />
              }
            />
          </Container>
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

