import React from 'react';

interface InputProps {
  iconSrc: string;
  placeholder: string;
  type: string;
  id: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ iconSrc, placeholder, type, id, name }) => {
  return (
    <div className="relative flex items-center">
      <img src={iconSrc} alt="" className="absolute left-2 w-5 h-5" aria-hidden="true" />
      <input
        type={type}
        name={name}
        id={id} 
        placeholder={placeholder}
        className="pl-10 py-2 text-sm font-bold border border-gray-300 rounded-md w-full bg-gray-100 focus:bg-gray-200 focus:outline-none focus:border-gray-400"
        aria-label={placeholder} 
      />
    </div>
  );
};

export default Input;
