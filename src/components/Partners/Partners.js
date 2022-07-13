import React from 'react'
import img1 from './compressed/microsoft.png'
import img2 from './compressed/crowdstrike.png'
import img3 from './compressed/cisco.png'
import img4 from './compressed/vmware.png'
import img5 from './compressed/fortinet.png'
import img6 from './compressed/tenable.png'

export const Partners = () => {
  return (
    <>
    <div className='container content-space-4 p-4'>
{
    /*
 
 <div className='row'>
     <div className='col text-center py-12'>
         <div className='w-md-75 w-lg-50 text-center mx-md-auto mb-7'>
             <h1 className='display-5'>Partners</h1>
             <p className='text-muted'>Somos distribuidores autorizados de las principales empresas Tecnológicas.</p>
         </div>
     </div>
 </div>
 <hr/>*/
}
   
        <div className='row'>

            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img1} alt='Logo'/>
            </div>
            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img2} alt='Logo'/>
            </div>
            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img3} alt='Logo'/>
            </div>
            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img4} alt='Logo'/>
            </div>
            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img5} alt='Logo'/>
            </div>
            <div className='col text-center py-3'>
                <img className='avatar avatar-lg avatar-4*3' src={img6} alt='Logo'/>
            </div>

        </div>
        <hr/>
    </div>
    
    
    </>
  )
}
