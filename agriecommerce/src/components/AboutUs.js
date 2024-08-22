//npm run start:both
import React from 'react';
import FarmHistoryImage from '../images/image6.jpeg';
import MissionAndValuesImage from '../images/image7.jpg';
import SustainabilityPracticesImage from '../images/image8.jpg';

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto py-8 px-4 sky-blue-bg">
            {/* Farm History */}
            <section className="mb-8 flex items-center">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Join us</h2>
                    <p className="text-lg">
                        Join us in revolutionizing the way we nourish ourselves. Hambat is on a mission to simplify your shopping experience by connecting you directly with local farms, small-scale enterprises, and artisans. By supporting these grassroots efforts, we empower communities to challenge the hegemony of corporate giants in our food ecosystem.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src={FarmHistoryImage} alt="Farm History" className="w-full h-auto max-h-300px mr-6 ml-6" />
                </div>
            </section>

            {/* Mission and Values */}
            <section className="mb-8 flex items-center">
                <div className="w-1/2 order-2 flex justify-center items-center">
                    <img src={MissionAndValuesImage} alt="Mission and Values" className="w-full h-auto max-h-300px ml-8" />
                </div>
                <div className="w-1/2 order-1">
                    <h2 className="text-3xl font-bold mb-4">Directly from farm to your table</h2>
                    <p className="text-lg">
                        Indulge in the opulence of premium ingredients meticulously procured from boutique farms and artisans, championing their community's culinary heritage. Embrace the ease of a few simple clicks as you immerse yourself in a world of flavor and freshness.

                        Elevate your culinary journey by joining our membership, where the bounty of local farms and artisans is delivered to your doorstep with personalized precision. Unleash your creativity by curating each box to your exact preferences, ensuring every meal is a masterpiece.
                    </p>
                </div>
            </section>

            {/* Sustainability Practices */}
            <section className="mb-8 flex items-center">
                <div className="w-1/2 flex justify-center items-center">
                    <img src={SustainabilityPracticesImage} alt="Sustainability Practices" className="w-full h-auto max-h-300px mr-8" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Make your choice now</h2>
                    <p className="text-lg">
                        At Hambat, we believe in personalization without compromise! Take the reins by joining us today - express your unique tastes and preferences, and let us craft a box tailored exclusively for you. With the freedom to customize before delivery and the flexibility to choose your ideal schedule, the power is in your hands to create a culinary experience that's truly your own.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
