import React from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

const VendorProfile = () => {
    const { vendorId } = useParams();
    const [vendor, setVendor] = React.useState(null);

    React.useEffect(() => {
        const fetchVendor = async () => {
            try {
                const vendorRef = firestore.collection('vendors').doc(vendorId);
                const doc = await vendorRef.get();
                if (doc.exists) {
                    setVendor(doc.data());
                } else {
                    console.log('Vendor not found');
                }
            } catch (error) {
                console.error('Error fetching vendor:', error);
            }
        };

        fetchVendor();
    }, [vendorId]);

    if (!vendor) {
        return <p>Loading vendor profile...</p>;
    }

    return (
        <div>
            <h2>{vendor.farmName}</h2>
            <p>Location: {vendor.location}</p>
            <p>Products: {vendor.products.join(', ')}</p>
            {/* Add more vendor details here */}
            <h3>Reviews</h3>
            <ul>
                {vendor.reviews.map((review, index) => (
                    <li key={index}>
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}/5</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorProfile;
