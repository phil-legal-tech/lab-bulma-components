import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './CoolButton/CoolButton.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" name="potato" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" name="tomato" />
      <FormField label="Email" type="password" placeholder="password"name ="bla bla" />
      <CoolButton name="Login" />
      <CoolButton name="SignUp" />
    </div>
  );
};

export default App;
