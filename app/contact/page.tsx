'use client';

import { SetStateAction, useCallback, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import FormValueExample from './components/FormValueExample';

import './contact.css';

export default function Page() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: '',
    email: '',
    message: '',
  });
  const handleFormDataChange = useCallback(
    (data: { name: string; email: string; message: string }) => {
      if (
        data.name !== formData.name ||
        data.email !== formData.email ||
        data.message !== formData.message
      ) {
        setFormData(data); // Update state only if there are changes
      }
    },
    [formData] // Add formData as a dependency
  );
  return (
    <div className='contact-page'>
      <ContactInfo></ContactInfo>
      <div className='contact-form'>
        <ContactForm onFormChange={handleFormDataChange}></ContactForm>
        <FormValueExample
          name={formData.name}
          email={formData.email}
          message={formData.message}
        ></FormValueExample>
      </div>
    </div>
  );
}
