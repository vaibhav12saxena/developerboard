import React, { useState } from 'react';
import { Input } from '../components/Input';

const ExampleForm = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setError('Minimum 3 characters required');
    } else {
      setError('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input
        label="Name"
        placeholder="Enter your name"
        type="text"
        value={name}
        onChange={handleChange}
        error={error}
        fullWidth={false}
      />
    </div>
  );
};

export default ExampleForm;
