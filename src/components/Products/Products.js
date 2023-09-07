import React, { useEffect, useContext, useState } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import { api } from '../../api/fetchProducts';

function Products() {

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
    const [cart, setCart] = useState([]);
    const productObject = {
      name: 'produto',
      category: 'categoria',
      price: randomNumber(90, 1200),
      quantity: 1,
    };
  
    const fetchData = () => {
      console.log('fetch data');
      api.get('/cart').then((response) => setCart(response.data));
    };
  
    useEffect(() => {
      fetchData();
    }, []);
    api.post('/cart', productObject).then((response) => {
      console.log(response);
      fetchData();
    });
  // const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    // fetchProducts('iphone').then((response) => {
    //   setProducts(response);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div>teste</div>
    // (loading && <Loading /> ) || (
    //   <section className="products container">
    //     {products.map((product) => <ProductCard key={product.id} data={product} />)}
    //   </section>
  );
}

export default Products;
