import React from 'react';

interface ModalBackgroundProps {
  children: React.ReactNode;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {children}
    </div>
  );
};

export default ModalBackground;

  