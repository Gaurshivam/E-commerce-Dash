import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Common.css'

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getproductdetails();
    },[]);

    const getproductdetails = async (id) =>{
        // console.log(params);
        let results = await fetch(`http://localhost:5000/products/${params.id}`);
        let data = await results.json();
        setName(data.name);
        setPrice(data.price);
        setCategory(data.category);
        setCompany(data.company);
    }

    const UpdateProduct = async ()=>{
        // console.log(name,price,company,category);
        let results = await fetch(`http://localhost:5000/products/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,company,category}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        await results.json();
        navigate('/product')

    }

    return (
        <div className='Login'>
            <h2 style={{marginLeft:"20px"}}>Update Product</h2>
            <input  className="form-control w-50 m-3" id="validationDefault01" type='text' placeholder='Enter Product name' value={name} onChange={(e) => setName(e.target.value)} />
            <input  className="form-control w-50 m-3" id="validationDefault01" type='number' placeholder='Enter Product price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input  className="form-control w-50 m-3" id="validationDefault01" type='text' placeholder='Enter Product category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input  className="form-control w-50 m-3" id="validationDefault01" type='text' placeholder='Enter Product company' value={company} onChange={(e) => setCompany(e.target.value)} />
            <button onClick={UpdateProduct} className='btn btn-primary w-50 m-3'>Update Product</button>
        </div>
    );
}

export default UpdateProduct;
