import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FormGroup, FormLabel, FormControl  } from 'react-bootstrap';




  

  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
  ];
  

  const App = () => {

  
    // State to store the selected option
    const [selectedOptionica, setSelectedOptionica] = React.useState('');
    const [selectedOptionproduct, setSelectedOptionproduct] = React.useState('');

 // Event handler for option selection
 const handleChange = (event) => {
  setSelectedOptionproduct(event.target.value);
};
    

  // Event handler for option selection
  const handleOptionChange = (event) => {
    setSelectedOptionica(event.target.value);
  };

    return (
     <form>
      <FormGroup controlId="formName">
        <FormLabel>Name</FormLabel>
        <FormControl type="text" placeholder="Enter name" value={selectedOptionproduct} /> 
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
  value={selectedOptionproduct}
  onChange={handleChange}
  aria-label="Select an option"
>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</FormControl>
      </FormGroup>

      <div>
      <select value={selectedOptionica} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOptionica}</p>
    </div>

    </form>
  );
};

export default App;
