import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Form } from './components/Form';
import { Message } from './components/Message';

const App = () => {
    return (
        <Router>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/message/:username" element={<Message />} />
	          </Routes>
        </Router>
    );
}

export default App;