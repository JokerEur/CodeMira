import React, { useEffect, useState } from "react";
import '../App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, farmRoutes, adminRoutes } from '../router/routes';
import axios from 'axios';
import Home from '../pages/Home.jsx'
import Auth from '../pages/Auth.jsx'
import Object from "../pages/Object";
import Account from '../pages/user/Account';

const AppRouted = () => {
  const [user, setUser] = useState({ isAuth: false, role: '', id: '', chat: '', obj: '', trash: '' });


  useEffect(() => {
    fetchAuth();
  }, []);

 const fetchAuth = async () => {
  try {
    const response = await axios.get('http://localhost:8000/auth');
    setUser({ ...response.data, isAuth: true }); // Update the user state with the isAuth property
  } catch (error) {
    console.log(error);
  }
};

  let routesToRender;
  if (user.role === "3") {
    routesToRender = adminRoutes.map(({ path, Component }) => (
        <><Route key={path} path={path} element={<Component user={user} />} exact={true} />
          {console.log("!!!")}
        </>


    ));
  } else if (user.role === "2") {
    routesToRender = farmRoutes.map(({ path, Component }) => (
      <><Route key={path} path={path} element={<Component user={user} />} exact={true} />
          {console.log("!!")}
        </>
    ));
  } else {
    routesToRender = privateRoutes.map(({ path, Component }) => (
      <><Route key={path} path={path} element={<Component user={user} />} exact={true} />
          {console.log("!")}
        </>
    ));
  }


  return (
    <Routes>
      {console.log("?")}
      {routesToRender}
      <Route path="*" element={<Navigate to="/" user={user} />} />
    </Routes>
  );
};

export default AppRouted;
