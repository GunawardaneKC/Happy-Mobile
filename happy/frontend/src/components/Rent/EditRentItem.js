// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
 
// export default function EditRentIem() {
//   let navigate = useNavigate();

//   const { id } = useParams();

//   const [rent, setRentItem] = useState({
//     ProductName:"",
//     SKU: "",
//     Model: "",
//     UPC: "",
//     Price: "",
//     Features: ""


//   });

//   const { ProductName, SKU,Model,UPC,Price,Features} = rent;

//   const onInputChange = (e) => {
//     setRentItem({ ...rent, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadRentItem();
//   }, []);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8070/rentItem/update/${id}`, rent);
//     navigate("/rentItem");
//   };

//   const loadRentItem = async () => {
//     const result = await axios.get(`http://localhost:8070/rentItem/update/${id}`);
//     setRentItem(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Edit Rent Item Deatils</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="ProductName" className="form-label">
//                 ProductName
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter"
//                 name="ProductName"
//                 value={ProductName}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="SKU" className="form-label">
//                 Description
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your address"
//                 name="SKU"
//                 value={SKU}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="Model" className="form-label">
//                 Model
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your number"
//                 name="Model"
//                 value={Model}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="UPC" className="form-label">
//                 SKU
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your UPC"
//                 name="UPC"
//                 value={UPC}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="Price" className="form-label">
//                 Price
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your UPC"
//                 name="Price"
//                 value={Price}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="Features" className="form-label">
//                 Features
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your UPC"
//                 name="Features"
//                 value={Features}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>

//             <button type="submit" className="btn btn-outline-primary" >
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/rentitem">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Editproduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
    ProductName: "",
    SKU: "",
    Model:"",
    UPC: "",
    Price:"" ,
    Features:"" 
    
  });

  useEffect(() => {
    axios.get(`/rentItems/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          ProductName: res.data.post.ProductName,
          SKU: res.data.post.SKU,
          Model: res.data.post.Model,
          UPC: res.data.post.UPC,
          Price: res.data.post.Price,
          Features:res.data.post.Features
           
        });
      }
    });
  }, [id]);
  console.log(post);

  const {ProductName,SKU,Price,Model,UPC,Features} = updatedPost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPost({
      ...updatedPost,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      ProductName: updatedPost.ProductName,
      SKU: updatedPost.SKU,
      Price: updatedPost.Price,
      Model: updatedPost.Model,
      UPC: updatedPost.UPC,
      Features:updatedPost.Features
       
       
    };

    axios.put(`/product/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        ProductName: "",
        SKU: "",
        Price: "",
        Model:"",
        UPC:"" ,
        Features:"" 
      });
      navigate('/adminManageProduct');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit Rent</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>ProductName:</label>
          <input
            type='text'
            className='form-control'
            name='ProductName'
            value={ProductName}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Description:</label>
          <input
            type='text'
            className='form-control'
            name='SKU'
            value={SKU}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Price:</label>
          <input
            type='number'
            className='form-control'
            name='Price'
            value={Price}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Model:</label>
          <input
            type='text'
            className='form-control'
            name='Model'
            value={Model}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Brand:</label>
          <input
            type='text'
            className='form-control'
            name='UPC'
            value={UPC}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label>Features:</label>
          <input
            type='text'
            className='form-control'
            name='Features'
            value={Features}
            onChange={handleInputChange}
          />
        </div>
          
     

        <button
          type='submit'
          className='btn btn-success'
          style={{ marginTop: '15px' }}
        >
          <i className='far fa-check-square'></i>
          &nbsp;Update
        </button>
      </form>
 </div>
);
}