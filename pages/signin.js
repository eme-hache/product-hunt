import Router from 'next/router'
import { useState } from 'react'

import { Form, Field, Button, Error } from '../components/ui/Form'
import validateSignIn from '../validation/signIn'
import Layout from '../components/layout/Layout'
import useValidate from '../hooks/useValidate'
import firebase from '../firebase'

const USER = {
  email: '',
  password: '',
}

export default function SignIn() {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit
  } = useValidate(USER, validateSignIn, signIn)
  const { name, email, password } = values
  const [error, setError] = useState(false)

  async function signIn() {
    console.log("iniciando sesión")
  }

  return (
    <Layout>
      <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>Iniciar Sesión</h1>

      <Form onSubmit={handleSubmit} noValidate>
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
          Iniciar Sesión
        </Button>
      </Form>
    </Layout>
  )
}
