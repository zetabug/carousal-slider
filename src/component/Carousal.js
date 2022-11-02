import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './carousal.css'

const Carousal = () => {
    const [images, setImages] = useState([])

    async function fetchImages() {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12').then(response => response.json())
        setImages(response)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='container'>
            <Slider {...settings}>
                {images.map((item) => (
                    <div className='img-container'>
                        <img src={item.url} key={item.id} alt="slide" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousal