import React, { useState } from 'react';
import apiAxios from '../services/api.js';
import Popup from './Popup';

import { Button } from "@/components/ui/button"

const InsertForm = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const[PopupVisible, SetPopupVisible] = useState(null);

  const closePopup = () => {
    SetPopupVisible(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const data = {title,description};


      const response = await apiAxios.post(`/apiData/insert`,data);
        
      console.log('Response:', response.data);

      console.log('Response status', response.status);
      
      if (response.status === 201) {
        SetPopupVisible(true);
        setTitle('');
        setDescription('');

      } else {
        alert(`Error: ${response.data.error}`);
      }
      
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border-2 rounded w-40 h-8 mb-2 font-quick font-semibold ps-2 border-gray-800"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border-2 rounded w-72 h-24 sm:w-96 mb-10 font-quick font-semibold ps-2 border-gray-800"
        required
      />
      <Button type="submit"
       className="font-quick font-semibold border-2 border-gray-800 hover:bg-black hover:text-white  hover:shadow-custom-inner-sky-400  w-32 sm:w-60"
       variant="outline">
        Insert Item
      </Button>
    </form>

<p>
{ 
  PopupVisible === true &&
  <Popup isOpen={true} message={'Item inserted successfully'} onClose={closePopup} />
 }
</p>

</div>

  );
};

export default InsertForm;
