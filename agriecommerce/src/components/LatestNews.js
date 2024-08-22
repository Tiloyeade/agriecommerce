import React from 'react';

const LatestNews = () => {
    // Sample news data
    const news = [
        { id: 1, title: 'New Product Launch', date: 'January 15, 2024', content: 'We are excited to announce the launch of our new product line!' },
        { id: 2, title: 'Industry Insights', date: 'January 10, 2024', content: 'Read our latest blog post for insights into the agriculture industry.' },
        // Add more news items as needed
    ];

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Latest News/Updates</h2>
            <div className="grid gap-4">
                {news.map(item => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-1">{item.date}</p>
                        <p className="text-gray-800">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestNews;
