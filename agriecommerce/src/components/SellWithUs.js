import React, { useState } from 'react';

const SellWithUs = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        primaryContactName: '',
        email: '',
        phoneNumber: '',
        address: '',
        businessSummary: '',
        story: '',
        wholesalePriceList: '',
        productImages: null,
        foodSafety: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            productImages: file
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // Reset form data after submission
        setFormData({
            companyName: '',
            primaryContactName: '',
            email: '',
            phoneNumber: '',
            address: '',
            businessSummary: '',
            story: '',
            wholesalePriceList: '',
            productImages: null,
            foodSafety: ''
        });
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Sell with Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} className="border rounded-md p-2" />
                <input type="text" name="primaryContactName" placeholder="Primary Contact Name" value={formData.primaryContactName} onChange={handleInputChange} className="border rounded-md p-2" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="border rounded-md p-2" />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleInputChange} className="border rounded-md p-2" />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} className="border rounded-md p-2" />
                <textarea name="businessSummary" placeholder="Business Summary" value={formData.businessSummary} onChange={handleInputChange} className="border rounded-md p-2"></textarea>
                <textarea name="story" placeholder="Story" value={formData.story} onChange={handleInputChange} className="border rounded-md p-2"></textarea>
                <input type="text" name="wholesalePriceList" placeholder="Wholesale Price List" value={formData.wholesalePriceList} onChange={handleInputChange} className="border rounded-md p-2" />
                <input type="file" name="productImages" onChange={handleFileInputChange} className="border rounded-md p-2" />
                <textarea name="foodSafety" placeholder="Food Safety" value={formData.foodSafety} onChange={handleInputChange} className="border rounded-md p-2"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
            </form>
        </div>
    );
};

export default SellWithUs;
