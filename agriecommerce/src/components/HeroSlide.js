import React, { useState, useEffect } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpg';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // 5 is the total number of images
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const images = [image1, image2, image3, image4, image5];

    return (
        <div className="relative overflow-hidden h-screen">
            {/* Images */}
            <div className="absolute inset-0 w-full h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`object-cover w-full h-full ${index === currentSlide ? '' : 'hidden'}`}
                        src={image}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="max-w-lg mx-auto">
                    {/* Tagline or Message */}
                    <h1 className="text-4xl font-bold mb-4">WELCOME TO HAMBAT FARM & AGRO LIMITED</h1>
                    <p className="text-lg mb-8">Fresh produce delivered to your doorstep.</p>
                    {/* Call to Action (CTA) */}
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Explore Products
                    </button>
                </div>
            </div>

            {/* Navigation or Scroll Indicators */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
                {/* Example arrow indicators */}
                <div className="flex">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-4 h-4 mx-1 bg-gray-500 rounded-full ${index === currentSlide ? 'bg-gray-700' : ''
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
