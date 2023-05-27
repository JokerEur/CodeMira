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

function Home(props) {
    const { id:user_id } = props.user;
const [mit, getMit] = useState([])

  useEffect(() => {
      fetchMit()
  }, [])


  const fetchMit = () => {
      fetch('http://127.0.0.1:8000/all_products')
          .then((res) =>
              res.json())

          .then((response) => {
              console.log(response);
              getMit(response);
          })

  }
  return (
        
    <div>
       <Nav className="z-30"/>

    
{console.log(user_id)}

<div className='relative mt-5 flex items-center'>
        

            {mit.map((item) => (
 <div
            className=' whitespace-pre w-[300px] inline-block mt-1 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-2xl'
        >
            <Card
                href={'/object/'+ 1}
                imgSrc={item.picture}

            >
                <a href={'/object/'+ item.id}>
                    <h5 className="text-xs whitespace-pre-wrap font-semibold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        {item.name}
                    </p>
                        {item.description}
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.price} ₽
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
          ))}




    </div>



</div>

    );
};

export default Home;
