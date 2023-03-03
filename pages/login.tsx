import LoginForm from '@/components/Form/LoginForm'
import RegitserForm from '@/components/Form/RegitserForm';
import { stat } from 'fs/promises';
import React, { useState } from 'react'

const login = () => {
  const [state, setState] = useState<boolean>(false);
  return (
<<<<<<< HEAD
     <div className="flex mx-auto p-16  justify-start pl-[10rem] min-h-screen  w-[100%] h-[100%] !bg-no-repeat !bg-cover !bg-center " style={{background:'url(/images/Login.avif)'}}> 
       {
!state?
      <LoginForm setState={setState} state={state}/>
=======
    <div className="flex mx-auto p-16 justify-start pl-[10rem] min-h-screen  w-[100%] h-[100%] !bg-no-repeat !bg-cover !bg-center " style={{ background: 'url(/images/Login.avif)' }}>
      {
        state ?
          <LoginForm setState={setState} state={state} />
>>>>>>> 46b6e935e2e0daf5fbb95721b9c7082c85a1e575

          :
          <RegitserForm />
      }
      {/* <span onClick={() =>setState((state) => !state)}> {!state ? <LoginForm/> :<RegitserForm/>}</span> */}
    </div>
    // <LoginForm/>
  )
}

export default login

