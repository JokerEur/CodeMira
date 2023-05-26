// Страница объекта

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";

import {Card, Sidebar} from "flowbite-react";

function Object() {
const [auth, getAuth] = useState([])

    useEffect(() => {
        fetchAuth()
    }, [])


    const fetchAuth = () => {
        fetch('http://127.0.0.1:8000/auth')
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getAuth(response);
            })
    }
  return (
        
    <div>
      <Nav className="z-30"/>
     
      {/* <Sidebar aria-label="Default sidebar example">
  <Sidebar.Items>
    <Sidebar.ItemGroup>
      <Sidebar.Item
        href="#"
      >
        Dashboard
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        label="Pro"
        labelColor="alternative"
      >
        Kanban
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
        label="3"
      >
        Inbox
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
      >
        Users
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
      >
        Products
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
      >
        Sign In
      </Sidebar.Item>
      <Sidebar.Item
        href="#"
      >
        Sign Up
      </Sidebar.Item>
    </Sidebar.ItemGroup>
  </Sidebar.Items>
</Sidebar> */}
      {/* <Card
  horizontal
  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      Noteworthy technology acquisitions 2021
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </p>
</Card> */}

<div class="grid grid-flow-row-dense grid-cols-3  mt-5">
  <div class="col-span-1 mr-[7%] row-span-2 "> 
  <Card
  horizontal
  imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
>
  
</Card>
  </div>


  <div class="col-span-2"> 
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>
      {auth.name}
      <br/>
      {auth.price}
    </p>
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    <p>
      {auth.description} </p>
  </p>
</div>

</div>
    </div>
        
      
       
  

    );
};

export default Object;
