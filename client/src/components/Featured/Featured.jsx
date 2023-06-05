import React from 'react';
import "./Featured.scss";
import Card from '../Card/Card';

import useFetch from '../../hooks/useFetch';

const Featured = ({ type }) => {

const {data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  return (
    <div className='featured'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam possimus excepturi ab eos nulla aut ipsa sapiente nesciunt esse. Mollitia, voluptas adipisci? Necessitatibus culpa magnam error voluptates, possimus incidunt delectus alias, rerum ipsum architecto distinctio quisquam blanditiis explicabo? Soluta delectus assumenda molestiae facere cupiditate autem quae voluptate libero est dolor!</p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Featured;




// //---------------------------------------

// const [data, setData] = useState([]);
// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_API_URL}/products?populate=*&[filters][type][$eq]=${type}`,
//           {
//             headers: {
//               Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
//             },
//           }
//         );
//         setData(response.data.data)
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);





// import React, { useEffect, useState } from 'react'
// import "./Featured.scss"
// import Card from '../Card/Card'
// import axios from 'axios'

// const Featured = ({type}) => {

//  const data = [
//     {
//         id:1, 
//         img: "https://images.pexels.com/photos/8306363/pexels-photo-8306363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         img2: "https://images.pexels.com/photos/8307678/pexels-photo-8307678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         title: "White oversized t-shirt ", 
//         isNew: true, 
//         oldPrice: 19, 
//         price: 12,
//     },
//     {
//         id:2, 
//         img: "https://images.pexels.com/photos/6127392/pexels-photo-6127392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         img2: "https://images.pexels.com/photos/6127385/pexels-photo-6127385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         title: "Pillow old and clfvf", 
//         isNew: true, 
//         oldPrice: 66, 
//         price: 50,
//     },
//     {
//         id:3, 
//         img: "https://images.pexels.com/photos/7256925/pexels-photo-7256925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         img2: "https://images.pexels.com/photos/7256868/pexels-photo-7256868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//         title: "Little blacj dress", 
//         isNew: false, 
//         oldPrice: 23, 
//         price: 15,
//     }
//  ]

//  const [products, setProducts] = useState([])


//  //FETCHINH DATA VIA STRAPI => !! NOT TO FORGET TO SEND A HEADER, cause otherwise we will
//     // not be able to use it  (part on " Authorization: "bearer"  + proces........")
//  useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const data = await axios.get( 
//                 process.import.meta.env.API_URL + "/products",
//                 {
//                  headers: {
//                         Authorization: "bearer" + process.import.meta.env.API_TOKEN, 
//                     },
//             });
//             console.log(data);
//         } catch(err) {
//             console.log(err)
//         }
//     }
//     fetchData();   
//  }, []);


//   return (
//     <div className='featured'>
       
//        <div className="top">
//         <h1>{type} products </h1>
//         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam possimus excepturi ab eos nulla aut ipsa sapiente nesciunt esse. Mollitia, voluptas adipisci? Necessitatibus culpa magnam error voluptates, possimus incidunt delectus alias, rerum ipsum architecto distinctio quisquam blanditiis explicabo? Soluta delectus assumenda molestiae facere cupiditate autem quae voluptate libero est dolor!</p>
//        </div>


//        <div className="bottom">
//         {data.map(item => (
//             <Card item={item} key={item.id}/> 
//         ))}
//        </div>
//     </div>
//   )
// }

// export default Featured 