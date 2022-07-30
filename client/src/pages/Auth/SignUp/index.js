import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";

import { useFormik } from "formik"
import validationSchema from './validations';
import { registrateUser } from '../../../api';

function SignUp() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const registerResponse = await registrateUser(values); 
        console.log(registerResponse);
      } catch (error) {
        bag.setErrors({general: error.response.data.message})
        console.log(error);
      }
    }
  });


  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box padding="10">
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>

          <Box my={5}>
            {
              formik.errors.general && (
                <Alert status='error'>
                  { formik.errors.general}
                </Alert>
              )
            }
          </Box>

          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>

              <FormControl>
                <FormLabel>E-Mail</FormLabel>
                <Input name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Password Confirm</FormLabel>
                <Input name='passwordConfirm'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirm}
                  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm} />
              </FormControl>

              <Button mt={4} width="full" type='submit' colorScheme="facebook" variant='outline'>Sign Up</Button>
            </form>
          </Box>
        </Box>

      </Flex>
    </div>
  )
}

export default SignUp