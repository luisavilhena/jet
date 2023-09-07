// import { useEffect } from "react";
// import axios from 'axios';

// const productObject = {
//   name: 'produto',
//   category: 'categoria',
//   price: 100,
//   quantity: 1,
// }

// const fetchProducts = async () => {
//   const response = await fetch('https://crudcrud.com/api/1979eab51a144c7f9d0ef0c3b03f41ff');
//   const data = await response.json();
//   console.log(data)

//   return data.results;
// };
// // useEffect(()=>{
// //   fetchProducts();
// // }, [])
// BsAppIndicator.post('/cart'. productObject.then(response, console.log(response)))

// export default fetchProducts;

import axios from 'axios';

// se você não conseguir usar esse endpoint, é porque outros usuários estão usando também e o limite gratuito esgotou.
// basta que você entre em crudcrud.com e substitua a url abaixo, com um endpoint seu...

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/1979eab51a144c7f9d0ef0c3b03f41ff',
  timeout: 10000,
});
