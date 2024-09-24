import React from 'react';

interface MyButtonProps {
  onClick: () => void;
  label: string;
}

const MyButton: React.FC<MyButtonProps> = ({onClick, label}) => {
  return <button onClick={onClick}>{label}</button>;
};

export default MyButton;
