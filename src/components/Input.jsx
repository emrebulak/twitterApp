import React from 'react'

const Input = ({ formik, title, name, type }) => {
    return (
        <div className='flex flex-col gap-1 w-full'>
            <label>{title}</label>
            <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values[name]} autoComplete="off" name={name} className='p-2 rounded border-none outline-none text-black transition focus:shadow-white focus:shadow-md' type={type} />
            <p className="text-sm text-red-500"> {formik.touched[name] && formik.errors[name] && formik.errors[name]} &nbsp;</p>
        </div>
    )
}

export default Input