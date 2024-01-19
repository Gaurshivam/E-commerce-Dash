import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Common.css'

const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let results = await fetch("http://localhost:5000/products");
    let data = await results.json();
    setProducts(data)
  }

  const DeleteData = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete"
    });
    let data = await result.json();
    if (data) {
      getProducts();
    }
  }

  const SearchProductData = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts();
    }
  }

  return (
    <div className='product-list'>
      <h2 className='heading text-bold ' id='Refh2' style={{marginLeft:"40%",marginTop:"70px"}}>Product List</h2>
      <input type="text" className="form-control w-25  m-auto my-5" placeholder="Search Product" 
       onChange={SearchProductData}
      aria-label="Username" 
      aria-describedby="basic-addon1"/>
      <table className="table table-success table-striped m-auto">
        <thead className='bg-dark'>
          <tr >
            <th scope="col">S. No</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Company</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {
            Products.length > 0 ? Products.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                  <td>{item.company}</td>
                  <td><button id='tablebtn' className='btn btn-success' onClick={() => DeleteData(item._id)}>Delete</button>
                    &nbsp; &nbsp;<Link className='Update' to={'/update/' + item._id}> Update</Link></td>
                </tr>
              )
            })
              :
              <tr>
                <td className='text-center m-auto'>No Result Fond</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default Products;