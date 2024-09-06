import React, { useState ,useEffect } from 'react';
import apiAxios from '../services/api';


import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import { Button } from "@/components/ui/button"


const SearchBar = ({ setResults }) => {
 

  const[carData , setcarData] = useState({});

  useEffect(() => {
    const fetchcarData = async () => {
      
        try {
          const response = await apiAxios.get(`/apiData/cardata`);
            console.log("Fetched Car data", response.data.datafetched);
             setcarData(response.data.datafetched);
        
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      
    };

    fetchcarData();
  }, []);

  const [open, setOpen] = useState(false);

  const handleSelect = (car) => {
    setOpen(false);
    setResults(car);
  };



  const toggleDialog = () => setOpen((prev) => !prev);

  return (

<div className="flex flex-col items-center justify-center">

<Button className="font-quick font-semibold border-2 border-gray-800 bg-gray-100 hover:bg-black hover:text-white  hover:shadow-custom-inner-sky-400  w-64 sm:w-96" variant="outline" onClick={toggleDialog}> Search</Button>


<CommandDialog className="w-72 sm:w-96" open={open} onOpenChange={setOpen}>

  <CommandInput placeholder="Search Car ..." />

  <CommandList>



    <CommandGroup heading="Suggestions">

      {carData.length > 0 ? (

carData.map((car) => (
<CommandItem key={car._id} onSelect={()=> handleSelect(car)}>
      
      {car.title}
    
      </CommandItem>
))

  ):(

    <CommandEmpty> Not Results found </CommandEmpty>

  ) }
   


    </CommandGroup>

  </CommandList>
  
</CommandDialog>


    </div>
    
  );
};

export default SearchBar;
