import logo from './logo.svg';
import './App.css';
import './assets/textStyles.css';
import Modal from 'react-modal';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

import Chat from "./components/chat"

Modal.setAppElement('body');

function App() {
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return(
    <div className="App">
      {/* <Modal
        isOpen={isOpen}
        style={{width: "100%"}}
      >
        <Formik
          initialValues={{ user: ""}}
          onSubmit={(values, actions) => {
            setUser(values.user);
            setIsOpen(false);
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <Field
              id="user"
              name="user"
              type="text"
              placeholder="Your name"
            />
      
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Modal> */}
      <div style={{backgroundColor: "lightblue"}}>
        Upload your thing
      </div>
      <Chat user={user} />
    </div>
  );
}

export default App;
