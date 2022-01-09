import React from "react";
import Carousel from "react-bootstrap/Carousel";
import forestOne from '../assets/forestOne.jpg';
import forestTwo from '../assets/forestTwo.jpg';
import forestThree from '../assets/pexels-photo-7364559.jpeg';
import forestFour from '../assets/pexels-photo-4099158.jpeg'
import "./carouselbar.scss"

export default function CarouselBar () {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 imageCarousel"
                src={forestOne}
                alt='forestOne'
                />
                <Carousel.Caption>
                    <h3 className='caption'>Winter Forest</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imageCarousel"
                    src={forestFour}
                    alt='forestfour'
                />
                <Carousel.Caption>
                    <h3>Spring Forest</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imageCarousel"
                    src={forestTwo}
                    alt='forestTwo'
                />
                <Carousel.Caption>
                    <h3>Summer Forest</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imageCarousel"
                    src={forestThree}
                    alt='forestthree'
                />
                <Carousel.Caption>
                    <h3>Autumn Forest</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}