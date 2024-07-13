import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FlightData {
  from: string;
  to: string;
  depart: string;
  return: string;
  class: string;
  price: string;
  airlines: string;
  airlinesLogo: string;
}

const FlightTable: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // @ts-ignore
  const [flightData, setFlightData] = useState<FlightData[]>([
    {
      from: "Toronto",
      to: "London LHR",
      depart: "December Departures",
      return: "Valid For 6 Months",
      class: "Economy",
      price: "From C$800.00",
      airlines: "AIR CANADA",
      airlinesLogo:
        "https://www.aircanada.com/content/dam/aircanada/en/assets/brand/logo/AirCanada_Logo_RGB.svg",
    },
    {
      from: "Calgary",
      to: "London",
      depart: "December Departures",
      return: "Valid For 6 Months",
      class: "Economy",
      price: "From C$750.00",
      airlines: "WESTJET",
      airlinesLogo:
        "https://www.westjet.com/content/dam/westjet/images/brand/logo/logo-symbol-red.svg",
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flight-table">
        <h3 className="text-center">Flights</h3>
        {isSmallScreen ? (
          <div className="flight-cards">
            {flightData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className="flight-card"
              >
                <div className="card-header">
                  <p>
                    {" "}
                    <b>From </b> : {item.from}
                  </p>
                  <p>
                    <b> To </b> : {item.to}
                  </p>
                </div>
                <div className="card-body">
                  <p>
                    <b> Depart </b>: {item.depart}
                  </p>
                  <p>
                    {" "}
                    <b> Return </b>: {item.return}
                  </p>
                  <p>
                    <b> Class </b>: {item.class}
                  </p>
                  <p>
                    <b> Price </b>: {item.price}
                  </p>
                  <p>
                    <b> Airlines </b>: {item.airlines}
                  </p>
                </div>
                <div className="card-footer">
                  <button className="contact-button">Contact Us</button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.table
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Depart</th>
                <th>Return</th>
                <th>Class</th>
                <th>Starting Price</th>
                <th>Airlines</th>
                <th>For More Info</th>
              </tr>
            </thead>
            <tbody>
              {flightData.map((item, index) => (
                <tr key={index}>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>{item.depart}</td>
                  <td>{item.return}</td>
                  <td>{item.class}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      src={item.airlinesLogo}
                      alt={item.airlines}
                      className="airline-logo"
                    />
                  </td>
                  <td>
                    <button className="contact-button">Contact Us</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        )}
        <div className="text-center" style={{ width: "100%" }}>
          {" "}
          <button className="contact-button mt-3"> View More </button>{" "}
        </div>
      </div>
    </>
  );
};

export default FlightTable;
