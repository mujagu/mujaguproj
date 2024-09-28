import Link from 'next/link';
import LoginForm from '@components/Form/LoginForm';
import RootLayout from "@app/layout";


import React from 'react'

const LoginPage = () => {
  return (
	<RootLayout>
		<div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className=' text-center text-3xl font-extrabold text-gray-900'>Login to your account</h2>
			</div>

			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md'>
				<div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
					<LoginForm />
				</div>
			</div>
		</div>
	</RootLayout>
    
  )
}

export default LoginPage