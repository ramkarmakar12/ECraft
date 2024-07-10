import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SellerDashboard = () => {
  const [sellers, setSellers] = useState([]);
  const [name, setName] = useState('');
  const [product, setProduct] = useState('');

  useEffect(() => {
    fetchSellers();
  }, []);

  const fetchSellers = async () => {
    try {
      const response = await axios.get('/api/sellers');
      setSellers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addSeller = async () => {
    try {
      await axios.post('/api/sellers', { name, product });
      setName('');
      setProduct('');
      fetchSellers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Seller Details</h1>

      <form>
        <input
          type="text"
          placeholder="Seller Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
        <button type="button" onClick={addSeller}>
          Add Seller
        </button>
      </form>

      <ul>
        {sellers.map((seller) => (
          <li key={seller.id}>
            {seller.name} - {seller.product}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
