import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ProgramsContext = createContext();

export const ProgramsProvider = (props) => {
    const applicantsUrl = "http://localhost:3001/applicants";
    const adminUrl = "http://localhost:3001/admin";
    const [ applicants, setApplicants ] = useState([]);


    function addApplicant(applicant) {
        return axios.post(applicantsUrl, applicant).then(res => {
            console.log(res)
        });

    };

    function getUser(user) {

    }

    






    return (
        <ProgramsContext.Provider
            value={{
                addApplicant,
                getUser
            }}
        >
            {props.children}
        </ProgramsContext.Provider>
    );



}