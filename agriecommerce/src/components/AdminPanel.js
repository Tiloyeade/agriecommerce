import { firestore } from '../firebase';

const AdminPanel = () => {
    const deleteProduct = async (productId) => {
        await firestore.collection('products').doc(productId).delete();
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <button onClick={() => deleteProduct('PRODUCT_ID')}>Delete Product</button>
        </div>
    );
};

export default AdminPanel;
