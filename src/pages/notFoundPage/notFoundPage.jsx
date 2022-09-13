import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => navigate('/animes', { replace: true });

  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={handleButtonClick}>Go back to homepage</button>
    </div>
  );
};

export default NotFoundPage;
