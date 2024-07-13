import { GiRotaryPhone } from "react-icons/gi"
import { Link } from "react-router-dom"
import image from '../assets/images/logo.jpg'
const Header = () => {
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header"> */}
  <div className="container-fluid navbar-expand-lg navbar-light bg-light" id="header">
    <div className="row row1">
        <div className="col-lg-3 col-12 col-md-12" id="logo">
        <Link className="navbar-brand" to="/"><img src={image} alt="" width={120} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{textAlign:"end"}}>
      <span className="navbar-toggler-icon" />
    </button>
        </div>
        <div className="col-lg-6" id="extraImages">
           <a href="#"> <img src="https://www.galatravels.com/assets/images/header-logo_1.jpg" alt="" /></a>
           <a href="#"> <img src="https://www.galatravels.com/assets/images/header-logo_2.jpg" alt="" /></a>
           <a href="#"> <img src="https://www.galatravels.com/assets/images/header-logo_3.jpg" alt="" /></a>
           <a href="#"> <img src="https://www.galatravels.com/assets/images/header-logo_4.jpg" alt="" /></a>
        </div>
        <div className="col-lg-3" id="extraImage2">
        <GiRotaryPhone  size={40}/>
        <div>
        <a href="tel:1 905 940 46461">1 905 940 46461</a>
        <br /> 
        <a href="tel:866 458 4252">866 458 4252</a>
        </div>
        </div>
    
        <div className="col-lg-12 " id="nav">
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"center"}}>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/flights">Flights</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hotels">Hotels</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vacations">Vacations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hajj-umrah">Hajj & Umrah</Link>
        </li>
      </ul>
    </div>
    </div>
    </div>
  </div>

  <div style={{visibility:"hidden"}}>
    <li className="nav-item" style={{listStyle:"none",lineHeight:"25px"}}>
          <Link className="nav-link" to="/hajj-umrah">Hajj & Umrah</Link>
        </li>
  </div>


{/* </nav> */}
    </>
  )
}

export default Header
