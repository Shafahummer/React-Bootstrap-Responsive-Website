import React from 'react';
import './CorouselSlider.css'
import { Carousel } from 'react-bootstrap'

const CorouselSlider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="carousel-label">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-label">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel-label">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="d-flex mt-5 justify-content-center">
                <h1>Build with ease</h1>
            </div>
            <div className="border-top w-25 border-primary mx-auto"></div>

            <div className="container">
                <div className="row p-4 justify-content-center">
                    <div className="col-md-4 my-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/5596125/pexels-photo-5596125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/5512749/pexels-photo-5512749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 my-4">
                        <div class="card">
                            <img class="card-img-top" src="https://images.pexels.com/photos/5020995/pexels-photo-5020995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <h1 className="text-center">Welcome to my responsive website</h1>
                    </div>
                    <div className="col-md-8">
                        <img alt="loading..." className="w-100" height={500} src="https://images.pexels.com/photos/5674976/pexels-photo-5674976.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                </div>
            </div>

            <div className="jumbotron py-4 mt-5 mb-0">
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-center">
                        <h4>Please feel to contact us for any query...</h4>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <button type="button" class="btn btn-info">Contact Us</button>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-3 d-flex justify-content-center">
                <h6 className="text-white">Connect us social media</h6>
            </div>

        </div>
    )
}
export default CorouselSlider;
