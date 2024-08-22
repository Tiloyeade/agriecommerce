import React from 'react';
import { firestore } from '../firebase'; // Import only `firestore` from '../firebase'

const AddReviewForm = ({ vendorId }) => {
    const [text, setText] = React.useState('');
    const [rating, setRating] = React.useState(5); // Default rating

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firestore.collection('vendors').doc(vendorId).update({
                reviews: firestore.FieldValue.arrayUnion({ text, rating }), // Use `firestore.FieldValue` directly
            });
            setText('');
            setRating(5);
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your review..."
                    className="border border-gray-300 rounded-md p-2 w-full h-24 focus:outline-none focus:border-blue-500"
                    required
                />
                <div className="flex items-center justify-between">
                    <label className="block text-gray-700">Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-16 text-center focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReviewForm;
