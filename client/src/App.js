import React from 'react';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
        <div className='app'>
            <Routes>
              <Route path='/:id' element={<><Toolbar /><SettingBar /><Canvas /></>} />                
              <Route
                path="*"
                element={<Navigate to={`f${(+new Date).toString(16)}`} replace />}
            />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
