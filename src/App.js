import logo from './logo.svg';
import './App.css';
import './assets/textStyles.css';
import Modal from 'react-modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';

import Chat from "./components/chat"
import Presentation from './components/presentation';

function App() {
  return(
    <div className="App">
      <Presentation />
      <Chat />
    </div>
  );
}

export default App;
