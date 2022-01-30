import '../App.css';
import '../assets/textStyles.css';
import Iframe from 'react-iframe';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';

function Presentation() {
  const [presUrl, setPresUrl] = useState("");
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  const Upload = () => (
    <Formik
        initialValues={{ pres: ""}}
        onSubmit={(values, actions) => {
        if (values.pres.match(re)) {
            console.log("yay")
            setPresUrl(values.pres);
        } else {
            alert("Invalid URL")
        }
        actions.setSubmitting(false);
        }}
    >
        <Form>
        <Field
            id="pres"
            name="pres"
            type="text"
            placeholder="Presentation Link"
        />
        <button type="submit">Submit</button>
        </Form>
    </Formik>
  );

  console.log(presUrl)

  return ( 
    <div className="presentation">
    {presUrl ?
  <Iframe url={presUrl}
    width="450px"
    height="450px"
    id="myId"
    className="myClassname"
    display="initial"
    sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation"
    position="relative"/>
    : 
      <Upload />}
    </div>
  );
}

export default Presentation;
