import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AdminLogIn = () => {

  const [ user, setUser ] = useState({
    
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    admin: true
  });


  let { firstName, lastName, password, email, admin } = user;


function handleChange(event) {
event.preventDefault();


}


function handleSubmit() {

}
    
  return (
  
  <>
  
  <Form className="col-md-6 mx-auto mt-5 mb-5"  onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={email}
          placeholder="type an image URL"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button className="mt-4" type="submit">
        Save
      </Button>
    </Form>
  
  </>
      )
};

export default AdminLogIn;
