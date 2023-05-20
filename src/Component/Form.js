import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  const renderSubmitted = () => {
    return (
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };

  return submitted ? renderSubmitted() : renderForm();
}

export default MyForm;