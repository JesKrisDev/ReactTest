import React, {Suspense} from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes,} from 'react-router-dom';

import Page1 from './components/Page1';
import {Page2} from './components/Page2';
import {Page3} from './components/Page3';
import {Page4} from './components/Page4';

 import {Page5} from './components/Page5';

//const Page5 = React.lazy(() => import('./components/Page5'));
const ColorSchemesExample = React.lazy(() => import('./components/Navbar'));
function App() {
  
  return (

    
    // <BrowserRouter>
    <div> 
      <div>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
      <ColorSchemesExample />
      </Suspense>
    </div>
      
      <Routes>
        <Route path="/components/Home" element={<Home />} />
        <Route path="/components/Page1" element={<Page1 />} />
        <Route path="/components/Page2" element={<Page2/>} />
        <Route path="/components/Page3" element={<Page3/>} />
        <Route path="/components/Page4" element={<Page4/>} />
        <Route path="/components/Page5" element={<Page5/>} />
     </Routes>
     </div>
     </div>
    //  </BrowserRouter>
  
  );
}

export default App;
