import React, { useState, useEffect } from 'react';

function SplashPage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="splash-page">
      <h1>Welcome to my website!</h1>
      <p>Loading...</p>
    </div>
  );
}

export default SplashPage;
