import RegisterForm from "@components/Form/RegisterForm";
import React from 'react'

const SignupPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className=' text-center text-3xl font-extrabold text-gray-900'>SignUp for an account</h2>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<RegisterForm />
				</div>
			</div>
		</div>
  )
}

export default SignupPage