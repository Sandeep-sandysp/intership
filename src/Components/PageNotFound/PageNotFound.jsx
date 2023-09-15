import { useNavigate } from 'react-router-dom';
import './PageNotFound.css'
import React from 'react'

function PageNotFound() {

  const navigate = useNavigate();
  const homeClicked=()=>{
    return navigate('/');}

  return (
    <>
    {/* <div className='pagetopnot'> */}
      {/* <div className='found'> */}
        {/* <div className='page'>
          <h1 style={{textAlign:'center', position:"relative"}}>PageNotFound!!!!</h1>
        </div> */}
        <div className="home">
          <h5
          onClick={()=>homeClicked()}>HOME</h5>
        </div> 
      {/* </div> */}
      <div className="photopage"></div>
    {/* </div> */}
    </>
  )
}

export default PageNotFound