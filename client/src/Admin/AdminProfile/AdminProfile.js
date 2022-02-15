import React, { useEffect, useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import { ProgramsContext } from "../../Utils/ProgramsContext";

const AdminProfile = () => {
  let [admin, setAdmin] = useState(null);

  let { getProfile } = useContext(ProgramsContext);

  useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem("userInfo")) || [];
    async function fetch() {
      console.log(userToken);
      await getProfile(userToken).then((res) => {
        setAdmin(res[0])
      });
    }

    fetch();
  }, []);



  const test = () => {
      console.log(admin)
  }

  return (
  <>

  <Button onClick={test}>test</Button>


  <h1>{admin.FirstName}</h1>
  </>
  
  )
};

export default AdminProfile;
