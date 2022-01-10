import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carouselbar.scss"

export default function CarouselBar () {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 imageCarousel"
                src="https://images.pexels.com/photos/7078661/pexels-photo-7078661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt='forestOne'
                />
                <Carousel.Caption>
                    <h3 className='caption'>Development</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imageCarousel"
                    src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt='forestfour'
                />
                <Carousel.Caption>
                    <h3>Programing</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 imageCarousel"
                    src="https://images.pexels.com/photos/67789/pexels-photo-67789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt='forestthree'
                />
                <Carousel.Caption>
                    <h3>Network</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}