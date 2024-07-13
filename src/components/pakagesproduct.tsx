import React from 'react';
import { motion } from 'framer-motion';
interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  price: string;
  soldOut: boolean;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="product-details">
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>{product.startDate} to {product.endDate}</p>
        <p className="price">{product.price}</p>
      </div>
    </div>
  );
};

const ProductGridhajj: React.FC = () => {
  const products: Product[] = [
    {
      _id: '1',
      name: 'Umrah Package 1',
      description: '5-star hotel, 7 nights',
      imageUrl: 'https://via.placeholder.com/300x200',
      startDate: '21 Dec 2023',
      endDate: '01 Jan 2024',
      price: '$4,099',
      soldOut: false,
    },
    {
      _id: '2',
      name: 'Umrah Package 2',
      description: 'Economy hotel, 10 nights',
      imageUrl: 'https://via.placeholder.com/300x200',
      startDate: '28 Dec 2023',
      endDate: '08 Jan 2024',
      price: '$3,199',
      soldOut: false,
    },
    {
      _id: '3',
      name: 'Umrah Package 3',
      description: '5-star hotel, 7 nights',
      imageUrl: 'https://via.placeholder.com/300x200',
      startDate: '21 Dec 2023',
      endDate: '01 Jan 2024',
      price: '$4,099',
      soldOut: true,
    },
    {
      _id: '4',
      name: 'Umrah Package 4',
      description: 'Economy hotel, 10 nights',
      imageUrl: 'https://via.placeholder.com/300x200',
      startDate: '17 Oct 2023',
      endDate: '29 Oct 2023',
      price: '$3,199',
      soldOut: false,
    },
    {
        _id: '4',
        name: 'Umrah Package 4',
        description: 'Economy hotel, 10 nights',
        imageUrl: 'https://via.placeholder.com/300x200',
        startDate: '17 Oct 2023',
        endDate: '29 Oct 2023',
        price: '$3,199',
        soldOut: false,
      },
  ];

  return (
    <>
    
    
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className="container-fluid packagessection">
        <h3 className='text-center py-5'>Packages</h3>
      <div className="row">
        <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }} className="col-lg-12 product-grid ">
        {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
        </motion.div>
      </div>
    </motion.div>

    </>
  );
};

export default ProductGridhajj;