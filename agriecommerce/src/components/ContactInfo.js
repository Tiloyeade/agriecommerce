import React from 'react';

const ContactInfo = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
            <p className="mb-2">Phone: 123-456-7890</p>
            <p className="mb-4">Email: info@example.com</p>

            {/* Optional: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2" />
                <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2" />
                <textarea placeholder="Message" className="border border-gray-300 rounded-md p-2"></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
            </form>
        </div>
    );
};

export default ContactInfo;
