'use client';

import Button from '@/components/ui/button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('name')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <label htmlFor='name'>_name</label>
        <input {...register('name')} id='name' />
      </div>

      <div className='form-control'>
        <label htmlFor='email'>_email</label>
        <input
          type='email'
          {...register('email', { required: true })}
          id='email'
        />
        <span className='error'>
          {errors.email && <span>This field is required</span>}
        </span>
      </div>

      <div className='form-control'>
        <label htmlFor='message'>_message</label>
        <textarea {...register('message', { required: true })} id='message' />
        <span className='error'>
          {errors.message && <span>This field is required</span>}
        </span>
      </div>

      <Button>submit-message</Button>
    </form>
  );
}
