// Home.js
import React from 'react';
import FeaturedProducts from './FeaturedProducts'; // Import the FeaturedProducts component
import HeroSlider from './HeroSlide';
import AboutUs from './AboutUs';


const Home = () => {
    return (
        <div>
            <HeroSlider /> {/* Include the HeroSlide component */}
            <AboutUs /> {/* Include the AboutUs component */}


            <FeaturedProducts /> {/* Include the FeaturedProducts component */}


        </div>
    );
};

export default Home;
