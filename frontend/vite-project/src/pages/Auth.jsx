// фтраница аутентификации
import React, { Suspense, useEffect , useState, } from "react";
import {BrowserRouter, Link, Route, Routes, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";
import {Label, TextInput, Checkbox,Button} from "flowbite-react";
import axios from 'axios';
import AppRouted from "../components/AppRouted.jsx";

function Auth({ handleAuth }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleAuth(formData); // Call the handleAuth function passed from props
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Auth;