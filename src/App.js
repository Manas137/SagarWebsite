import React from "react";
import { BrowserRouter } from "react-router-dom";


import MainPage from './ResponsiveReactWebsite/MainPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
};

export default App;
