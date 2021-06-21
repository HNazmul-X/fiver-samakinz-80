import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyAppbar from './Components/Appbar/MyAppbar';
import Sitebar from "./Components/Sitebar/Sitebar";
import Display from "./Components/Display/Display"
import './styles/App.css';

function App() {
  return (
      <BrowserRouter>
          <section id="Deashboard-Cover" className="black-theme">
              <MyAppbar />
              <Sitebar />
              <Display />
          </section>
      </BrowserRouter>
  );
}

export default App;
