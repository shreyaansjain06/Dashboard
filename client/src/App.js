import React, { useState, useEffect } from 'react';
import DesktopManager from './DesktopManager';
import MobileManager from './MobileManager';
function App() {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch('/members')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <DesktopManager className="desktop-manager" data={data} />
      <MobileManager classNmae="mobile-manager" data={data} />
    </>
  );
}

export default App;
