import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SuccessToast() {
    return <ToastContainer />;
}

export const showToast = (message) => {
    toast.success(message, {
        position: "bottom-right",
        hideProgressBar:true
      
    });
};

export default SuccessToast;
