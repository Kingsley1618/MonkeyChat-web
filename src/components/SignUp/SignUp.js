'use client'
import styles from "./signup.module.css";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";
import Link from "next/link";
import {googleHandler} from "@/utils/authUtils"
import Nft from "@/assets/Images/nft.jpg";
import { Button, Checkbox, Form, Input } from 'antd';

export default function SignUp() {
  const formItemLayout = {
    labelCol: { span: 24 }, 
    wrapperCol: { span: 24 }, 
  };

  const initialValues = {
    email: "",
    password: "",
    confirmpassword: ""
  };

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
      .min(6, 'Password must be at least 6 characters'),
    confirmpassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  function googleFunc() {
    googleHandler()
  }

  return (
    <>
      <Form
        onFinish={formik.handleSubmit}
        name="normal_login"
        className={styles.form}
      >
        <Image src={Nft} alt="nft" width={60} height={60} className="block mx-auto rounded-full" />
        <h2 className="font-bold mb-4 text-[34px] text-center text-white break-words">MonkeyChat</h2>
        <Form.Item
          label={<span style={{ color: "white", fontWeight: "900" }}>Email</span>}
          name="email"
          {...formItemLayout}
          validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
          help={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        >
          <Input placeholder="Email" {...formik.getFieldProps('email')} />
        </Form.Item>

        <Form.Item
          label={<span className="text-white font-bold">Password</span>}
          name="password"
          {...formItemLayout}
          validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''}
          help={formik.touched.password && formik.errors.password ? formik.errors.password : null}
        >
          <Input.Password {...formik.getFieldProps('password')} />
        </Form.Item>

        <Form.Item
          label={<span className="text-white font-bold">Confirm Password</span>}
          name="confirmpassword"
          {...formItemLayout}
          style={{ color: "white" }}
          validateStatus={formik.touched.confirmpassword && formik.errors.confirmpassword ? 'error' : ''}
          help={formik.touched.confirmpassword && formik.errors.confirmpassword ? formik.errors.confirmpassword : null}
        >
          <Input.Password {...formik.getFieldProps('confirmpassword')} />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="unchecked" noStyle>
            <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
          </Form.Item>

          <Link className={styles.forgot} href="#">
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.btn}>
            Sign up
          </Button>
          <span className="text-white">Or</span> <Link href="/auth/SignIn" className={styles.signuptext}>Login</Link>
        </Form.Item>

        <button onClick = {googleFunc} className="w-[100%] block mx-auto bg-[grey] font-bold  py-3 rounded-xl text-white" type="button">Sign In With Google</button>
      </Form>
    </>
  );
}
