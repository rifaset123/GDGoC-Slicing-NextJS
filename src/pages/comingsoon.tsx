import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg mb-8">Stay tuned!</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-600">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-red-600">
            <i className="fab fa-youtube text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;