import React, { useEffect, useState } from 'react';

function App() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/news')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <h1>News List</h1>
            <ul>
                {news.map(item => (
                    <li key={item.id_berita}>
                        <h2>{item.judul_berita}</h2>
                        <p>{item.ringkasan}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
