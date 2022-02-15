import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProgramsContext = createContext();

export const ProgramsProvider = (props) => {
  const applicantsUrl = "http://localhost:3001/applicants";
  const usersUrl = "http://localhost:3001/users";
  const [applicants, setApplicants] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetch() {
      await getApplicants();
    }

    fetch();
  }, []);

  function addApplicant(applicant) {
    return axios.post(applicantsUrl, applicant).then((res) => {
      console.log(res);
    });
  }

  function login(user) {
    return axios.post(`${usersUrl}/login`, user).then((res) => {
      console.log(res);
      return new Promise((resolve) => resolve(res.data));
    });
  }

  function getApplicants() {
    return axios.get(applicantsUrl).then((response) => {
      //   console.log(response);
      setApplicants(response.data);
    });
  }

  function getProfile(token) {
    return axios.get(`${usersUrl}/profile/${token}`).then((res) => {
      return new Promise((resolve) => {
        resolve(res.data);
      });
    });
  }

  return (
    <ProgramsContext.Provider
      value={{
        addApplicant,
        login,
        applicants,
        user,
        getProfile,
      }}
    >
      {props.children}
    </ProgramsContext.Provider>
  );
};
