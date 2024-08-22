import React from 'react';

const CustomerReviews = () => {
    // Sample data for customer reviews
    const reviews = [
        {
            id: 1,
            author: 'John Doe',
            rating: 5,
            review: 'Excellent product! Very satisfied with my purchase.',
            // You can include additional fields like date, photo, etc.
        },
        {
            id: 2,
            author: 'Jane Smith',
            rating: 4,
            review: 'Great customer service and fast shipping.',
        },
        // Add more reviews as needed
    ];

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Customer Reviews</h2>
            {reviews.map(review => (
                <div key={review.id} className="mb-4">
                    <h3 className="text-xl font-medium mb-2">{review.author}</h3>
                    <p className="text-gray-600 mb-1">Rating: {review.rating} stars</p>
                    <p className="text-gray-800">{review.review}</p>
                </div>
            ))}
        </div>
    );
};

export default CustomerReviews;
