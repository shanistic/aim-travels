import Hero from "../components/heroFlight";
import FlightTable from "../components/flightproduct";
import OurServices from "../components/services";
import HotelTable from "../components/hotelproduct";
import ProductGridhajj from "../components/pakagesproduct";
import ProductGrid from "../components/pakagevacation";
import ContactForm from "../components/aboveFooter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <FlightTable />
      <ProductGridhajj />
      <HotelTable />
      <ProductGrid />
      <Link to={"/admin/dashboard"}>
        <button className="contact-button m-3"> Login </button>
      </Link>

      <ContactForm />
    </>
  );
};

export default Home;
