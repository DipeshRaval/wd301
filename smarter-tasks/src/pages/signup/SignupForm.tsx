import React, { useState } from 'react';
import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  organisationName: string,
  userName: string,
  userEmail: string,
  userPassword: string
};

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const {organisationName,userName,userEmail,userPassword} = data
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword}),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }
      console.log('Sign-up successful');
      const data = await response.json();
      // Dialogue: After successful signin, first we will save the token in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));

      // Redirect users to account path after login
      navigate("/account")
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
        <input type="text" id="organisationName" {...register('organisationName', { required: true })}  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
        {errors.organisationName && <span className='text-red-500 text-sm'>This field is required</span>}

      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type="text" id="userName" {...register('userName', { required: true })}  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
        {errors.userName && <span className='text-red-500 text-sm'>This field is required</span>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" id="userEmail" {...register('userEmail', { required: true })}   className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
        {errors.userEmail && <span className='text-red-500 text-sm'>This field is required</span>}

      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" id="userPassword" {...register('userPassword', { required: true })}  className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
        {errors.userPassword && <span className='text-red-500 text-sm'>This field is required</span>}

      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
    </form>
  );
};

export default SignupForm;
