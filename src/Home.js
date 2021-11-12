import React from 'react';

import './home.css';

function Home() {
    document.title = "Home Page";
    return (
        <div>
            <div className="card p-3 my-4 bg-light">
                <h3>Welcome to Home</h3>
              <p>please select any one of the above link to view the operation</p>
            </div>
        </div>
    )
}

export default Home
