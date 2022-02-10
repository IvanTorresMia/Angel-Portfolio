import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SignUp = () => {


    return (
        <>
        <Form>
        <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
        //   value={}
        //   onChange={}
        />
      </Form.Group>
        </Form>
        </>
    )
}

export default SignUp;