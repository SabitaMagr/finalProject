import LoginForm from '@/components/Form/LoginForm'
import RegitserForm from '@/components/Form/RegitserForm';
import { stat } from 'fs/promises';
import React, { useState } from 'react'

const login = () => {
  const [state,setState] =useState<boolean>(false);
  return (
     <div className="flex mx-auto p-16 justify-start pl-[10rem] min-h-screen  w-[100%] h-[100%] !bg-no-repeat !bg-cover !bg-center " style={{background:'url(/images/Login.avif)'}}> 
       {
state?
      <LoginForm setState={setState} state={state}/>

:
<RegitserForm/>
       }
      {/* <span onClick={() =>setState((state) => !state)}> {!state ? <LoginForm/> :<RegitserForm/>}</span> */}
    </div>
    // <LoginForm/>
      )
}

export default login

