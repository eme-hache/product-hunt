import { useState, useEffect } from 'react'

export default function useValidate(state, validate, callback) {
  const [isSubmit, setIsSubmit] = useState(false)
  const [values, setValues] = useState(state)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isSubmit) {
      const noErrors = Object.keys(errors).length === 0
      
      if (noErrors) {
        callback()
      }

      setIsSubmit(false)
    }
  }, [callback, errors, isSubmit])

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    const newErrors = validate(values)

    setErrors(newErrors)
    setIsSubmit(true)
  }

  const handleBlur = evt => {
    const newErrors = validate(values)

    setErrors(newErrors)
  }

  return {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  }
}