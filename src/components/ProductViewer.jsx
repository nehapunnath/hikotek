import React, { useState } from 'react';
import '../styles/ProductViewer.css';
import { motion, AnimatePresence } from 'framer-motion';

function ProductViewer() {
  const products = [
    { name: 'Vernier Caliper', image: "https://www.faithfulltools.com/images/full/FAICALVER.jpg" },
    { name: 'Digital Torque Driver', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnkmmhpHTq408nP2US0CqAitsA6RWHSKUb0A&s' },
    { name: 'PB 8326 Set A1', image: 'https://goodwill.in/pub/media/catalog/product/cache/affde3bad6fff216fce8dd9a3ef91de9/p/b/pb_8326.png' },
    { name: 'Jetech Bits', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtv6_1kyROIOuD_FEkduwbdHy6yGD4ZauaA&s' },
    { name: 'Mechanical External Micrometer', image: 'https://bakergauges.com/wp-content/uploads/2015/08/prod-feat-micromet-mech-0-200-2b.jpg' },

  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className="product-viewer">
      {/* Left - Small Thumbnails */}
      <div className="product-list">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className={`product-item ${selectedProduct.name === product.name ? 'active' : ''}`}
            onClick={() => setSelectedProduct(product)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Right - Enlarged View */}
      <div className="product-preview">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedProduct.image}
            src={selectedProduct.image}
            alt={selectedProduct.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <motion.h2
          key={selectedProduct.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedProduct.name}
        </motion.h2>
      </div>
    </div>
  );
}

export default ProductViewer;
