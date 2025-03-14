import React, { useState } from 'react';
import { Input } from '../components/Input';
import { MailIcon } from '../assets/icons/mail';
import { CheckIcon } from '../assets/icons/checkbox';

const ExampleForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setError('Minimum 3 characters required');
    } else {
      setError('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        debounceTime={500}
        onDebouncedChange={(val) => console.log('Debounced:', val)}
        prefix="@"
        suffix=".com"
        leftIcon={<MailIcon />}
        rightIcon={<CheckIcon />}
        error={error}
      />
    </div>
  );
};

export default ExampleForm;
