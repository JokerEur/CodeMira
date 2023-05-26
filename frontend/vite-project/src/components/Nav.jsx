import React from 'react';

import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
<div className='shadow'>
      <div className="nav h-[60px] z-30 ">
        
        <a href="https://youtu.be/dQw4w9WgXcQ"  className='ml-1 pt-1' target="_blank" draggable="false" display="false">
            <img src="/static/MISIShunters.svg" className='ml-1 py-1' draggable="false" width="60%"/>
        </a>
        <br/>
        <w className=' text-base mr-[200px] mt-[10px]'>
            <Link to='/' >
                <w > 
                    Главная
                </w>
            </Link>
            <b>&nbsp;&nbsp;&nbsp;</b>
            <Link to='/profile'>
                <w>
                     Аккаунт
                </w>
            </Link>
        </w>
        <form className="w-[50%]">   
    
    <div class="relative">
       
        <input 
            type="search" 
            id="default-search" 
            class="block w-full mt-1 h-[30px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search Mockups, Logos..." 
            required
        />
        <button 
            type="submit" 
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            Search
        </button>
    </div>
</form>
      </div>
       
          
</div>
  );
}

export default Nav;

