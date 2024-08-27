import React from 'react';
import "./Newsletter.css"

const EmailSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 block mx-auto mb-4"
        style={{
            height: "40px",
            width: "40px",
            backgroundColor: "brown",
            color: "#ffff",
            borderRadius: "21px",
            padding: "5px"
        }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        />
    </svg >
);

function Newsletter() {
    return (
        <div className='text-center tracking-wide mb-4 mt-10 relative top-50px' style={{ top: '50px' }}>
            <span className='mb-10'>{EmailSvg}</span>
            <h1 style={{ fontSize: "22px" }}>Subscribe To Our Newsletter</h1>
            <h4 className='mt-1 mb-2' style={{ fontSize: "15px" }}>and receive a $200 coupon for your first order when you checkout!</h4>
            <input className='letter_input' placeholder='Enter Email' /> <button className='send-btn'>Send</button>
        </div>
    )
}

export default Newsletter;
