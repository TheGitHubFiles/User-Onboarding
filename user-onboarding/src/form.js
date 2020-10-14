import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

const notToday = yup.object().shape({
    user: yup.string().required('required').min(3, 'name needs to be at least 3 chars'),
    email: yup.string(),
    password: yup.string().required('required').min(6, 'password needs to be at least 6 chars'),
    agree: yup.boolean().oneOf([true], 'you must agree to Terms Of Service')
})

const startValues = {
    user: '',
    email: '',
    password: '',
    agree: false,
}
const errorValues = {
    user: '',
    email: '',
    password: '',
    agree: '',
}

export default function Form(props) {
    const { submit } = props
    const [form, setForm] = useState(startValues)
    const [error, setError] = useState(errorValues)
    const [disabled, setDisabled] = useState(true)

    const setFormError = (name, value) => {
        yup.reach(notToday, name).validate(value)
            .then(() => setError({ ...error, [name]: '' }))
            .catch(err => setError({ ...error, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormError(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })

    }
    const doSubmit = evt => {
        evt.preventDefault()

        submit({
            ...form,
            user: form.user.trim(),
            email: form.email.trim(),
            password: form.password.trim()
        })
        setForm(startValues)




    }

    useEffect(() => {
        notToday.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <div>
            <form onSubmit={doSubmit}>
                <label>Name
                    <input onChange={change}
                        value={form.user}
                        name='user'
                        type='text'>
                    </input>
                </label>
                <label>Email
                    <input onChange={change}
                        value={form.email}
                        name='email'
                        type='email'>
                    </input>
                </label>
                <label>Password
                    <input onChange={change}
                        value={form.password}
                        name='password'
                        type='text'>
                    </input>
                </label>
                <label>Terms of Service
                    <input onChange={change}
                        checked={form.agree}
                        name='agree'
                        type='checkbox'>
                    </input>
                </label>
                <button disabled={disabled}>Submit</button>
            </form>
            <div className='red'>
                <div>{error.user}</div>
                <div>{error.email}</div>
                <div>{error.password}</div>
                <div>{error.agree}</div>
            </div>
        </div >
    )
}