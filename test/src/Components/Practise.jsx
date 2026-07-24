import React from 'react'
import { useForm } from 'react-hook-form'


const Practise = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh] flex-col  '>
            <div className='w-[500px] bg-white p-5 rounded-3xl items-center text-center'>
                <h1 className='text-3xl border-b text-center mb-5 border-black'>Register</h1>

                <form action="/" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input className='border-b border-gray-500 my-4 text-3xl' type="text" defaultValue={"Jhon"} {...register("userName", { required: true })} placeholder='Name' />
                        {errors.userName && <p className='text-red-500 text-sm'>Name is required</p>}
                    </div>
                    <div>
                        <input className='border-b border-gray-500 my-4 text-3xl' type="text" {...register("userEmail", { required: true })} placeholder='Email' defaultValue={"jhonddoes@gmail.com"} />
                        {errors.userEmail && <p className='text-red-500 text-sm'>Email is required</p>}
                    </div>
                    <div>
                        <input className='border-b border-gray-500 my-4 text-3xl' type="password" placeholder='Password' {...register("password", { required: true })} />
                        {errors.password && <p className='text-red-500 text-sm'>Password is required</p>}
                    </div>
                    <div>
                        <input className='border-b border-gray-500 my-4 text-3xl' type="password" placeholder='Confirm Password' {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === watch("password") || "Passwords do not match"
                        })} />
                        {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword.message || 'Confirm your password'}</p>}
                    </div>

                    <button type="submit" className='border w-[67%] p-3 rounded-2xl '>Sign Up</button>

                </form>
            </div>

        </div>
    )
}

export default Practise