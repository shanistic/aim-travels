import { motion } from 'framer-motion';
import { FaHotel, FaMosque, FaShoppingBag } from 'react-icons/fa';
import { MdAirplaneTicket } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface ServiceItem {
    title: string;
    icon: JSX.Element;
    description: string;
    moreLink: string;
  }

const data = [
  {
    title: 'Airline Ticketing',
    icon: <MdAirplaneTicket size={60} />
    ,
    description: 'We enabel travelers to reserve cheapest air tickets well in advance for busy routes.',
    moreLink: '/flights',
  },
  {
    title: 'Hotel Booking',
    icon: <FaHotel size={60} />
    ,
    description: 'Cheapest hotel deals all around the world. Always lowest price guaranteed!',
    moreLink: '/hotels',
  },
  {
    title: 'Vacation Pakages',
    icon: <FaShoppingBag  size={60} />,
    description: 'We custamize for you an unforgetable vacation experience.',
    moreLink: '/vacation',
  },
  {
    title: 'Hajj & Umrah Pakages',
    icon: <FaMosque size={60} />
    ,
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    moreLink: '/hajj-umrah',
  },
];

const ServiceCard = ({ item }: { item: ServiceItem }) => {
    return (
        <Link to={item.moreLink}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="service-card"
      >
        <div className="icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </motion.div>
      </Link>
    );
  };

const OurServices = () => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="our-services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3 col-sm-6">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default OurServices;