import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch featured blog posts or guides
        axios.get('https://api.example.com/posts')
            .then(response => {
                // Set the fetched posts to state
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Featured Blog Posts or Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-2">{post.summary}</p>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedPosts;
