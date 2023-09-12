'use client'
import styles from "./signin.module.css"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import * as Yup from 'yup'
import { useFormik } from 'formik';
import Nft from "@/assets/Images/nft.jpg"
import { Button, Checkbox, Form, Input } from 'antd';
export default function SignIn() {
    const formItemLayout = {
        labelCol: { span: 24 }, 
        wrapperCol: { span: 24 }, 
      };

      const initialValues = {
        email : "",
        password: ""
      }
      const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(
          /^[A-Za-z0-9._%-]+@gmail\.com$/,
          'Invalid email domain. Only gmail.com emails are allowed.'
        ),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
      })

      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit :(values)=> {
            console.log(values)
        }
      })
  return (
   <>
  
    <Form
    onFinish={formik.handleSubmit}
      name="normal_login"
      className={styles.form}>
        <Image src = {Nft} alt = "nft" width={60} height={60} className="block mx-auto rounded-full"/>
         <h2 className="font-bold mb-7 text-[34px] text-center text-white break-words">MonkeyChat</h2>
      <Form.Item
      label = {<span style = {{color:"white", fontWeight:"900"}}>Email</span>}
        name="email"
        {...formItemLayout}
        validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
        help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        >
        <Input placeholder="Email" {...formik.getFieldProps('email')}/>
      </Form.Item>

      <Form.Item
   label={<span className="text-white font-bold">Password</span>}
      name="password"
      {...formItemLayout}
      validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''}
      help={formik.touched.password && formik.errors.password ? formik.errors.password : null}
      >
      <Input.Password      
      
          {...formik.getFieldProps('password')}/>
    </Form.Item>

   <Form.Item>

        <Link className={styles.forgot} href="#">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.btn}>
          Log in
        </Button>
       <span className="text-white">Or</span>  <Link href="/" className={styles.signuptext}>Sign up!</Link>
      </Form.Item>

      <button className="w-[100%] block mx-auto bg-[grey] font-bold  py-3 rounded-xl text-white" type="button">Sign In With Google</button>
    </Form>
   </>
  )
}