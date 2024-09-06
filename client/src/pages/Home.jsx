import React from 'react';
import SearchBar from '../components/SearchBar';
import Results from '../components/Result';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button"

const Home = () => {

    const [results, setResults] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

        <div className="flex flex-col justify-center items-center  gap-8">
        <h1 className=" text-xl text-center font-quick font-semibold text-black  whitespace-nowrap sm:text-3xl mt-8  ">
         Welcome to  Car Search

        </h1>

        

        <NavLink to="/upload"  > <Button variant="link" className=" font-quick font-semibold "> UPLOAD </Button>  </NavLink>

 


</div>
        <SearchBar setResults={setResults} />
        <Results results={results} />
       

</div>


  );
};

export default Home;