"use client"
import React from "react";
import {useRef} from 'react'
import {signIn} from 'next-auth/react'


const Page = () => {
  const username = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleLogin = () => {
    signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: '/'
    })
  }
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">Username</label>
      <input type="text" placeholder="username..." name="username" ref={username} />
    <br />
    <label htmlFor="password">Password</label>
      <input type="password" placeholder="password..." name="password" ref={password} />
      <br />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  )
};

export default Page;
