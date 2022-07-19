import React from 'react'
import img1 from './img/swirly-arrow.jpg'
import img2 from './img/automatization.svg'
import img3 from './img/security.svg'
import img4 from './img/paperless.svg'
import img5 from './img/consulting.svg'
import { GiCycle } from 'react-icons/gi';
import { GrShieldSecurity } from 'react-icons/gr';
import { RiNewspaperLine } from 'react-icons/ri';
import { CgRead } from 'react-icons/cg';
import './styles.css'

export const InfoSection5 = () => {


  return (
    <>
    <main className='container page-wrapper pt-5 pb-5'>

          <h1 className="display-4 text-center text-md-start">Soluciones tecnológicas</h1>
          
          <div className="row pt-5">
            <div className="d-none d-md-block col-md-2 pt-4 mt-4"><img src={img1} alt="Arrow" className='imagenHome' /></div>
            <div className="col-md-10 d-md-flex mt-md-n4">
              
              <div className="d-block hover-img-scale position-relative zindex-5 mt-md-5 mx-auto me-md-n5 mb-4 mb-md-0"  >
        
                <div className="mt-4 me-md-n5">
                  <h2 className="h4 mb-2 pb-1 ms-md-3 pb-4"><GiCycle /><span> Automatización</span></h2>
                  <div className="position-relative zindex-6"><img className="imagenHome position-relative zindex-5" src={img2} alt="Real Estate Demo" />
                    <div className="d-none d-md-block position-absolute zindex-1" style={{top: "15px; left: 20px", width: "calc(100% - 40px)", height: "calc(100% - 50px)", boxShadow: "33px 26px 85px rgba(0, 0, 0, .14)"}}></div>
                  </div>
                </div>
              </div>
              <div className="d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3" style={{maxWidth: "550px;"}}>
                <h2 className="h4 ms-md-3 pb-4"><GrShieldSecurity/><span> Seguridad</span></h2> <img src={img3} className='imagenHome' alt="Job Board Demo" />
              </div>
            </div>
            <div className="col-md-12 d-md-flex pt-2 pt-md-0 mt-md-n5">
              
              <div className="d-block hover-img-scale position-relative my-4 mt-md-5 mb-md-0 mx-auto ms-md-0 me-md-3" style={{maxWidth: "550px;"}}>
                <h2 className="h4 ms-md-3 pb-4"><RiNewspaperLine/><span> Oficina sin papeles</span></h2><img src={img4} className='imagenHome' alt="City Guide Demo"/>
              </div>
              
              
              <div className="d-block hover-img-scale position-relative mt-md-n5 mx-auto me-md-n3" style={{maxWidth: "636px;"}}>
                <div className="d-flex flex-column">
                  <h2 className="h4 order-md-2 mb-4 mb-md-0 mt-md-4"><CgRead /><span> Consultoría</span></h2><img className="imagenHome d-block order-md-1 mt-md-n2" src={img5} alt="Car Finder Demo"/>
                </div>
              </div>
            
            </div>
          </div>

        </main>
    </>
  )
}
