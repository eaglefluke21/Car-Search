import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="flex flex-col gap-1 mb-2 p-2 bg-gray-50 shadow-xs rounded-md">     
        <div key={results._id} className=" py-4">
          <h3 className="font-quick  text-sm font-bold text-gray-800 sm:text-base text-center">{results.title}</h3>
          <p className="font-quick text-gray-800 text-md  sm:text-base text-center">{results.description}</p>
        </div>
    
    </div>
  );
};

export default Results;
