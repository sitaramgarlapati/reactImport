import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FormGroup, FormLabel, FormControl  } from 'react-bootstrap';


function App() {
  
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
     <form>
      <FormGroup controlId="formName">
        <FormLabel>Name</FormLabel>
        <FormControl type="text" placeholder="Enter name" value={selectedOption} /> 
      </FormGroup>
      <FormGroup controlId="formEmail">
        <FormLabel>Email</FormLabel>
        <FormControl type="email" placeholder="Enter email" />
      </FormGroup>
      {/* Add your new FormGroup here */}
      <FormGroup controlId="formMessage">
        <FormLabel>Message</FormLabel>
        <FormControl as="textarea" placeholder="Enter message" />
      </FormGroup>
      <FormGroup controlId="formBasicSelect">
        <FormLabel>Select Type</FormLabel>
        <FormControl
  as="select"
  value={selectedOption}
  onChange={handleChange}
  aria-label="Select an option"
>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</FormControl>
      </FormGroup>
    </form>
  );
}

export default App;
