import React, { useState } from "react";
import "./App.css";

function App() {
  const [showWish, setShowWish] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🎂 Happy Birthday! 🎈</h1>
        <p className="subtitle">To my sweetest friend 💕</p>

        {!showWish ? (
          <button className="btn" onClick={() => setShowWish(true)}>
            Click here for your surprise! 🎁
          </button>
        ) : (
          <div className="wish-card">
            <p>Assalamualaikum Syed,</p>
            <p>
              On your special day, I just want to say how incredibly lucky I am
              to have you in my life. You bring joy, light, and laughter to
              everyone around you. ✨
            </p>
            <p>
              May this year bring you as much happiness and love as you bring to
              others. Stay the amazing person you are!
            </p>
            <h2>🎉 Happy Birthday once again! 🎉</h2>
            <p>— From your forever friend 💝</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
