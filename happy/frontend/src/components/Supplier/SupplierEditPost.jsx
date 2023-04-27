import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [updatedPost, setUpdatedPost] = useState({
      SupplierID:"",
      Name:"",
      contactNumber:"",
      ItemList:"",
      // Brand:"",
      // Model:"",
      // reason:"",
      // givenDate:"",
      // customerAddress:"",
      // supplierPrize:"",
  });

  useEffect(() => {
    axios.get(`/supplier/${id}`).then((res) => {
      if (res.data.success) {
        setPost(res.data.post);
        setUpdatedPost({
          SupplierID: res.data.post.SupplierID,
          Name: res.data.post.Name,
          contactNumber: res.data.post.contactNumber,
          ItemList: res.data.post.ItemList,
          // Brand: res.data.post.Brand,
          // Model: res.data.post.Model,
          // reason: res.data.post.reason,
          // givenDate: res.data.post.givenDate,
          // customerAddress: res.data.post.customerAddress,
          // supplierPrize: res.data.post.supplierPrize,
        });
      }
    });
  }, [id]);
  console.log(post);

  const {SupplierID, Name, contactNumber,ItemList,} = updatedPost;

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
      SupplierID: updatedPost.SupplierID,
      Name: updatedPost.Name,
      contactNumber: updatedPost.contactNumber,
      ItemList: updatedPost.ItemList,
      // Brand: updatedPost.Brand,
      // Model: updatedPost.Model,
      // reason: updatedPost.reason,
      // givenDate: updatedPost.givenDate,
      // customerAddress: updatedPost.customerAddress,
      // supplierPrize: updatedPost.supplierPrize,
    };

    axios.put(`/supplier/update/${id}`, data).then((res) => {
      console.log(res.data);
      alert('Post updated successfully!');
      setUpdatedPost({
        SupplierID:"",
        Name:"",
        contactNumber:"",
        ItemList:"",
        // Brand:"",
        // Model:"",
        // reason:"",
        // givenDate:"",
        // customerAddress:"",
        // supplierPrize:"",
      });
      navigate('/supplier');
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Edit suppliers</h4>
      <hr />

      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>supplier ID:</label>
          <input
            type='text'
            className='form-control'
            name='supplierID'
            value={SupplierID}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Name:</label>
          <input
            type='text'
            className='form-control'
            name='customerName'
            value={Name}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Phone Number:</label>
          <input
            type='number'
            // pattern="[0-9]{10}"
            className='form-control'
            name='phoneNum'
            value={contactNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>ItemList:</label>
          <input
            type='text'
            className='form-control'
            name='ItemList'
            value={ItemList}
            onChange={handleInputChange}
          />
        </div>

        {/* <div className='form-group'>
          <label>Brand:</label>
          <input
            type='text'
            className='form-control'
            name='Brand'
            value={Brand}
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
          <label>Reason:</label>
          <input
            type='text'
            className='form-control'
            name='reason'
            value={reason}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Date:</label>
          <input
            type='date'
            className='form-control'
            name='givenDate'
            value={givenDate}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>Customer Address:</label>
          <input
            type='text'
            className='form-control'
            name='customerAddress'
            value={customerAddress}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-group'>
          <label>supplier Price:</label>
          <input
            type='text'
            className='form-control'
            name='supplierPrize'
            value={supplierPrize}
            onChange={handleInputChange}
          />
        </div> */}

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
