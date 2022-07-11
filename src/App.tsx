import React, { useEffect } from 'react';
import Router from '@/router';
import '@/styles/App.css';

const App: React.FC = () => {
  useEffect(() => {
    console.log('%c DEVNOLOGY', 'color: green;  font-size: 100px; font-weight: 900;');
    console.log(
      '                                                                   You only have one %cChance',
      'color: yellow'
    );

    //     __
    //     |  |                                       ____
    // ____  |  |____    ___  _   _ ____     ______   / ___ |
    // /   __| |  ___  \  /  _ ' | | ' __  \  |   ___| |  ____|
    // |  |__  |  |  |  | | (_|  | |  |  |  | |  |___  | |____
    // \_____| |__|  |__| \____,_| |__|  |__| |______| \______|

    console.log('         __');
    console.log('        |  |                                       ____');
    console.log('  ____  |  |____     ___ _   _ ____     ______   / ___ |');
    console.log(" /  __| |  ___   \\ /  _ ' | | ' __  \\  |   ___| |  ____|");
    console.log('|  |__  |  |  |  | | (_|  | |  |  |  | |  |___  | |____');
    console.log(' \\____| |__|  |__| \\____,_| |__|  |__| |______| \\______|');
  });

  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default App;
