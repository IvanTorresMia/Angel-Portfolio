import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AdminLogIn = () => {

  const [ user, setUser ] = useState({
    password: "",
    email: "",
    admin: true
  });


  let { password, email, admin } = user;


function handleChange(event) {
event.preventDefault();


}


function handleSubmit() {

}
    
  return (
  
  <>
  
  <Form className="col-md-6 mx-auto mt-5 mb-5"  onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button className="mt-4" type="submit">
        LogIn
      </Button>
    </Form>
  
  </>
      )
};

export default AdminLogIn;
