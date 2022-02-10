import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Beginner = () => {
    let navigate = useNavigate();



    return (
        <>
        <Button onClick={() => navigate("/signup")}>
            Sign up!
        </Button>

        </>
    )
};

export default Beginner;
