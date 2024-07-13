import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HotelData {
  hotelName: string;
  location: string;
  startingPrice: string;
  url: string;
}

const HotelTable: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // @ts-ignore
  const [HotelData, setHotelData] = useState<HotelData[]>([
    {
      hotelName: "Toronto",
      location: "London LHR",
      startingPrice: "December Departures",
      url: "https://www.aircanada.com/content/dam/aircanada/en/assets/brand/logo/AirCanada_Logo_RGB.svg",
    },
    {
      hotelName: "Toronto",
      location: "London LHR",
      startingPrice: "December Departures",
      url: "https://www.aircanada.com/content/dam/aircanada/en/assets/brand/logo/AirCanada_Logo_RGB.svg",
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
      <div className="hotel-table">
        <h3 className="text-center">Hotels</h3>
        {isSmallScreen ? (
          <div className="hotel-cards">
            {HotelData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                className="hotel-card"
              >
                <div className="card-header">
                  <p>
                    {" "}
                    <b>Hotel Name </b> : {item.hotelName}
                  </p>
                  <p>
                    <b> Location </b> : {item.location}
                  </p>
                </div>
                <div className="card-body">
                  <p>
                    <b> Starting Price </b>: {item.startingPrice}
                  </p>
                  {/* <p><b> Url </b>: {item.url}</p> */}
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
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Starting Price</th>
                <th>Url</th>
                <th>For More Info</th>
              </tr>
            </thead>
            <tbody>
              {HotelData.map((item, index) => (
                <tr key={index}>
                  <td>{item.hotelName}</td>
                  <td>{item.location}</td>
                  <td>{item.startingPrice}</td>
                  <td>
                    <img
                      src={item.url}
                      alt={item.hotelName}
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

export default HotelTable;
