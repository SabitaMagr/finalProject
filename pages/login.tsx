import LoginForm from '@/components/Form/LoginForm'
import RegitserForm from '@/components/Form/RegitserForm';
import { stat } from 'fs/promises';
import React, { useState } from 'react'

const login = () => {
  const [state, setState] = useState<boolean>(false);
  return (
     <div className=" relative flex mx-auto p-16  justify-start pl-[10rem] min-h-screen !bg-no-repeat !bg-cover !bg-center" style={{background:'url(/images/Login.avif)'}}> 
     <div className=' absolute  bg-black bg-opacity-30 inset-0' />
      {
        !state ?
          <LoginForm setState={setState} state={state} />
          :
          <RegitserForm setState={setState} state={state}/>
      }
    </div>
    // <LoginForm/>
  )
}

export default login

