import React from 'react';
import Slider from "react-slick";
import img1 from "../../assests/img11.jpeg";
import img2 from "../../assests/Img13.jpg";
import img3 from "../../assests/img14.jpg";
import img4 from "../../assests/scrroll_img4.jpg";
import img5 from "../../assests/img15.jpg";
import img6 from "../../assests/img16.jpg";
import img9 from "../../assests/img17.jpg";
import img10 from "../../assests/img18.jpg";
import img11 from "../../assests/img19.jpg";
import img12 from "../../assests/Img13.jpg";
import Img13 from "../../assests/img20.jpg";
import Img20 from "../../assests/img21.jpg"
import Img21 from "../../assests/img22.jpg"
import Img22 from "../../assests/Img23.jpg"
import Img23 from "../../assests/Img24.webp";
import Img26 from "../../assests/Img25.webp";
import Img27 from "../../assests/Img26.webp"

const user_Img = [
    { userImg: Img27, text: "Active Wear" },
    { userImg: Img23, text: "Men Clothing" },
    { userImg: Img26, text: "Men Clothing" },
    { userImg: Img27, text: "Men Clothing" },
    { userImg: img1, text: "Winter Sale" },
    { userImg: img2, text: "Winter Sale" },
    { userImg: img3, text: "Winter Sale" },
    // { userImg: img4, text: "Winter Sale" },
    // { userImg: img5, text: "Winter Sale" },
    { userImg: img6, text: "Winter Sale" },
    { userImg: img11, text: "Winter Sale" },
    // { userImg: img12, text: "Winter Sale" },
    { userImg: img9, text: "Winter Sale" },
    { userImg: img10, text: "Winter Sale" },
    { userImg: Img13, text: "Winter Sale" },
    { userImg: Img20, text: "SHOP Now" },
    { userImg: Img21, text: "SHOP Now" },
    { userImg: Img22, text: "SHOP Now" },
    
];

export default function SimpleSlider() {
    var settings = {
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,

    };

    return (
        <Slider {...settings}>
            {user_Img.map((item, index) => (
                <div key={index} style={{ position: "relative", overflow: "hidden" }}>
                    <img src={item.userImg} alt={`userImg-${index}`} style={{
                        objectFit: "cover",
                        width: "100%",
                        borderRadius: "7px",
                        height: "415px",
                        marginTop: "5px",
                        backgroundAttachment: "fixed"
                    }} />
                    <h2 style={{
                        color: "#ffff",
                        padding: "20px",
                        borderRadius: "4px",
                        textAlign: "center",
                        maxWidth: "30%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        position: "realtive",
                        top: "10px",
                        left: "10%",
                        marginTop: "-50px",
                        marginLeft: "30px",
                        transform: "translateY(-50%)",
                        zIndex: 1,
                        fontWeight: "bold"
                    }}>
                        {item.text}
                    </h2>
                </div>
            ))}
        </Slider>
    );
}
