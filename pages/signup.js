import Router from 'next/router'
import { useState } from 'react'

import { Form, Field, Button, Error } from '../components/ui/Form'
import validateSignUp from '../validation/signUp'
import Layout from '../components/layout/Layout'
import useValidate from '../hooks/useValidate'
import firebase from '../firebase'

const USER = {
  name: '',
  email: '',
  password: '',
}

export default function SignUp() {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  } = useValidate(USER, validateSignUp, signUp)
  const { name, email, password } = values
  const [error, setError] = useState(false)

  async function signUp() {
    try {
      await firebase.signUp({ name, email, password })
      
      Router.push('/')
    }
    catch (error) {
      setError(error.message)
    }
  }

  return (
    <Layout>
      <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>Crear Cuenta</h1>

      <Form onSubmit={handleSubmit} noValidate>
        <Field>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Ingresa tu nombre'
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.name && <Error>{errors.name}</Error>}

        <Field>
          <label htmlFor='email'>Email</label>
          <input
            autoComplete='username'
            type='email'
            id='email'
            name='email'
            placeholder='Ingresa tu email'
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.email && <Error>{errors.email}</Error>}

        <Field>
          <label htmlFor='password'>Contraseña</label>
          <input
            autoComplete='new-password'
            type='password'
            id='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Field>

        {errors.password && <Error>{errors.password}</Error>}
        {error && <Error>{error}</Error>}

        <Button type='submit'>
          Crear Cuenta
        </Button>
      </Form>
    </Layout>
  )
}
