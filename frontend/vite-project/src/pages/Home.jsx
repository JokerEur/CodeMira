// Домашняя страница

import React, { Suspense, useEffect , useState, } from "react";
import { Link, useParams} from 'react-router-dom';
import '../App.css';
import {Card} from "flowbite-react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import 'flowbite';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../components/Nav";


const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

function Home() {

  return (
        
    <div>
       <Nav className="z-30"/>

    


<div className='relative mt-5 flex items-center'>
        
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                href={'/object/'+ 1}
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                
            >
                <a href={'/object/'+ 1}>
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href='#'
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
    </div>
    <div className='relative flex items-center'>
        
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
        <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'    
        >
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG"
                className=""
            >
                <a href="#">
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </p>
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    $599
                    </span>
                    <a
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    href="#"
                    >
                    <p>
                        Add to cart
                    </p>
                    </a>
                </div>
            </Card>
        </div>
    </div>



</div>

    );
};

export default Home;
