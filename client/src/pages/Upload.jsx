import React from 'react';
import InsertForm from '../components/InsertForm';
import { NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button"

const Upload = () => {

   

  return (
    <div className="flex flex-col min-h-screen bg-white">

<div className="flex flex-col justify-center items-center gap-8">

        <h1 className=" text-xl text-center font-quick font-semibold text-black  whitespace-nowrap sm:text-3xl mt-8  ">

            Upload Data 

        </h1>

        <NavLink to="/"  > <Button variant="link" className=" font-quick font-semibold "> SEARCH </Button>  </NavLink>
</div>

        <InsertForm />
       
       


</div>


  );
};

export default Upload;