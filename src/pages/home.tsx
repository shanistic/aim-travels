import Hero from "../components/heroFlight"
import FlightTable from "../components/flightproduct"
import OurServices from "../components/services"
import HotelTable from "../components/hotelproduct"
import ProductGridhajj from "../components/pakagesproduct"
import ProductGrid from "../components/pakagevacation"
import ContactForm from "../components/aboveFooter"

const Home = () => {
  return (
    <>
    <Hero/>
    <OurServices/>
    <FlightTable/>
    <ProductGridhajj/>
    <HotelTable/>
    <ProductGrid/>
    
    <ContactForm/>
    </>
  )
}

export default Home
