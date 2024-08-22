import React from 'react';

const securtitySvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{
            height: "40px",
            width: "40px",
            backgroundColor: "brown",
            color: "#ffff",
            borderRadius: "21px",
            padding: "5px",
            cursor: "pointer",
            transition: "transform 0.7s ease", 
            transform: "scale(1)", 
        }}
        className="h-10 w-10 bg-brown text-white rounded-[21px] p-1.5"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(0.9)"} 
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
    </svg>

);

const exchangeSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{
            height: "40px",
            width: "40px",
            backgroundColor: "brown",
            color: "#ffff",
            cursor: "pointer",
            borderRadius: "21px",
            padding: "5px",
            transition: "transform 0.7s ease",
            transform: "scale(1)",
        }}
        className="h-10 w-10 bg-brown text-white rounded-[21px] p-1.5"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(0.9)"} 
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>


);

const moneySvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        style={{
            height: "40px",
            width: "40px",
            backgroundColor: "brown",
            color: "#ffff",
            borderRadius: "21px",
            padding: "5px",
            cursor:"pointer",
            transition: "transform 0.7s ease", 
            transform: "scale(1)", 
        }}
        className="h-10 w-10 bg-brown text-white rounded-[21px] p-1.5"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(0.9)"} 
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"} 
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

);

const app_Info = [
    {
        logo: securtitySvg,
        title: "Notch Security for Peace of Mind",
        subTitle: "Our platform prioritizes your safety with advanced security measures, ensuring a worry-free shopping experience."
    },
    {
        logo: exchangeSvg,
        title: "Reliable Platform for Transactions",
        subTitle: "Our platform is built with state-of-the-art security to guarantee that all your transactions and data remain secure."
    },
    {
        logo: moneySvg,
        title: "Safe and Secure Online Payments",
        subTitle: "Experience peace of mind with our encrypted transactions and secure payment gateways, protecting your financial details."
    },
];


function AppInfo() {
    return (
        <div className="flex flex-col md:flex-row relative top-[50px] max-w-[85%] mx-auto justify-between" >
            {app_Info.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center m-4 h-[250px]">
                    {item.logo}
                    <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                    <h6 className="text-sm text-gray-600 mt-1">{item.subTitle}</h6>
                </div>
            ))}
        </div>
    );
}

export default AppInfo;
