import { useFormik } from 'formik'
import React from 'react'
import Button from '../../components/core/Button/Button'

import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})

const SampleForm = () => {
  const formik = useFormik({
    onSubmit: (values) => {},
    initialValues: { title: '' },
    validationSchema,
  })

  const { handleSubmit, values, errors, touched, handleBlur, handleChange } =
    formik

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type={'submit'}>Submit </Button>
      </form>

      <p>Errors</p>
      <pre>{JSON.stringify(errors, null, 2)}</pre>
    </>
  )
}

export default SampleForm
