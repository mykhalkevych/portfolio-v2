'use client';

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

      {/* include validation with required or other standard HTML validation rules */}
      <input type='email' {...register('email', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <textarea {...register('message', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}
