import React from 'react';
interface MyButtonProps {
    onClick: () => void;
    label: string;
}
declare const MyButton: React.FC<MyButtonProps>;
export default MyButton;
