import { useState } from 'react';
import { firestore } from '../firebase';

const Review = () => {
    const [review, setReview] = useState('');

    const submitReview = async () => {
        await firestore.collection('reviews').add({ review });
        setReview('');
    };

    return (
        <div>
            <h2>Leave a Review</h2>
            <textarea value={review} onChange={(e) => setReview(e.target.value)} />
            <button onClick={submitReview}>Submit Review</button>
        </div>
    );
};

export default Review;
