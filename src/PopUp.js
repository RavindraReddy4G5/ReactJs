import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Formik,Form } from "formik";
import Validate from './components/Validate';
import * as Yup from 'yup';
export default function PopUp() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  const validate=Yup.object({
    firstName:Yup.string().max(15,'Must be 15 characters or less than u can enter').required('required'),
    lastName:Yup.string().max(10,'must be enter less than 10 charcters').required('required'),
    emailId:Yup.string().email('enter valid email ').required('mandatory'),
    password:Yup.string().min(8, 'enter same password which you enter in the above').required('confirm passsword is required'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'at least 8 charecter should maintain').required('required')
   
})
  return (
    <div>
      <Button color="danger" onClick={toggle}>
       Add Task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Registration Form</ModalHeader>
        <ModalBody>
        <Formik 
       initialValues={{
           firstName:'',
           lastName:'',
           emailId:'',
           password:'',
           confirmPassword:''
       }}
       validationSchema={validate}
       >
           {formik=>(
               <div>
                   <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>
                   {console.log(formik.values)}
                   <Form>
                        <Validate label="first Name" name="firstname" type="text" />
                        <Validate label="last Name" name="lastname" type="text" />
                        <Validate label="email " name="email" type="email" />
                        <Validate label="password" name="passsword" type="password" />
                        <Validate label="confirm Password" name="confirmPassword" type="text" />
                      </Form>
               </div>
           )}
       </Formik>
          <br />
          <Button color="success" onClick={toggleNested}>
            Add Another task
          </Button>
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Defination for toggle</ModalHeader>
            <ModalBody>
            The toggleClass() method toggles between adding and removing one or more class names from the selected 
            elements. This method checks each element for the specified class names. 
            The class names are added if missing, and removed if already set - This creates a toggle effect.{" "}
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={toggleNested}>
                Done
              </Button>
              <Button color="secondary" onClick={toggleAll}>
                close
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Save
          </Button>
          <Button color="dark" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}