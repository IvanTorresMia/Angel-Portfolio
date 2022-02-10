import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProgramsContext = createContext();

export const ProgramsProvider = (props) => {

    const [ applicants, setApplicants ] = useState([]);


    function addApplicant(applicant) {
        console.log(applicant)
    };



    return (
        <ProgramsContext.Provider
            value={{
                addApplicant
            }}
        >
            {props.children}
        </ProgramsContext.Provider>
    );



}