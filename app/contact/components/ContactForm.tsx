'use client';

import Button from '@/components/ui/button/Button';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

interface ContactFormProps {
  onFormChange: (data: Inputs) => void;
}

export default function ContactForm({ onFormChange }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const formData = watch(); // watch all inputs by default

  useEffect(() => {
    // Call the parent's callback with the latest form data
    onFormChange(formData);
  }, [formData, onFormChange]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label htmlFor='name'>_name</label>
          <input {...register('name')} id='name' placeholder='Name' />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>_email</label>
          <input
            type='email'
            {...register('email', { required: true })}
            id='email'
            placeholder='Email'
          />
          <span className='error'>
            {errors.email && <span>This field is required</span>}
          </span>
        </div>

        <div className='form-control'>
          <label htmlFor='message'>_message</label>
          <textarea
            {...register('message', { required: true })}
            id='message'
            placeholder='Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks! |'
          />
          <span className='error'>
            {errors.message && <span>This field is required</span>}
          </span>
        </div>

        <Button>submit-message</Button>
      </form>
    </div>
  );
}
