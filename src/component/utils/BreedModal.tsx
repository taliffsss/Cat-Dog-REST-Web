import React from 'react';
import { BreedModalProps } from '../interface/DataInterface';

export const BreedModal: React.FC<BreedModalProps> = ({ breed, onClose }) => {
  if (!breed) return null;

  const getProgressBarValue = (val: number | undefined) => {
    const maxValue = 10; // Assuming the maximum possible value is 10

    if (typeof val !== "number") {
      return 0; // Return 0 if val is not a number
    }
    
    let percentage = (val / maxValue) * 100;

    // Ensure percentage is between 0 and 100 to avoid UI issues
    percentage = Math.max(0, Math.min(percentage, 100));

    return percentage;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-white p-6 rounded-lg shadow-2xl max-w-lg w-full">
        <button 
            onClick={onClose} 
            className="float-right mb-2 text-gray-700 hover:text-gray-900"
        >
          X
        </button>
        <img src={breed.url} alt={breed.alt} className="w-full mb-4" />
        <p className="font-bold text-lg">{breed.name}</p>
        <p className="font-bold">
          Description: <small className="font-normal">{breed.description}</small>
        </p>
        {
          !breed.isDog ? (
            <div>
              <p className="font-bold">Adaptability:</p>
              <div className="bg-gray-300 w-full h-4 rounded my-2">
                <div style={{ width: `${getProgressBarValue(breed.adaptability)}%` }} className="bg-blue-500 h-4 rounded"></div>
              </div>
              <p className="font-bold">Child Friendly:</p>
              <div className="bg-gray-300 w-full h-4 rounded my-2">
                <div style={{ width: `${getProgressBarValue(breed.child_friendly)}%` }} className="bg-blue-500 h-4 rounded"></div>
              </div>
              <p className="font-bold">Dog Friendly:</p>
              <div className="bg-gray-300 w-full h-4 rounded my-2">
                <div style={{ width: `${getProgressBarValue(breed.dog_friendly)}%` }} className="bg-blue-500 h-4 rounded"></div>
              </div>
              <p className="font-bold">Intelligence:</p>
              <div className="bg-gray-300 w-full h-4 rounded my-2">
                <div style={{ width: `${getProgressBarValue(breed.intelligence)}%` }} className="bg-blue-500 h-4 rounded"></div>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-bold">Bred For: <small className="font-normal">{breed.bred_for}</small></p>
              <p className="font-bold">Breed Group: <small className="font-normal">{breed.breed_group}</small></p>
              <p className="font-bold">Life Span: <small className="font-normal">{breed.life_span}</small></p>
              <p className="font-bold">Height (Metric): <small className="font-normal">{breed.height}</small></p>
              <p className="font-bold">Weight (Metric): <small className="font-normal">{breed.weight}</small></p>
            </div>
          )
        }
      </div>
    </div>
  );
};
