import React from 'react'
import { useForm } from 'react-hook-form'

const TestForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => { console.log(data) }
    console.log(watch("example"))

    return (
        <div>

        </div>
    )
}

export default TestForm