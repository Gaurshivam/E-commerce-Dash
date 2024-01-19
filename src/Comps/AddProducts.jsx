import React, { useState } from 'react';

const Products = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

const HandleProduct = async() =>{
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method:"Post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        await result.json();
    }

    const handleform = (e) =>{
        e.preventDefault();
    }
    return (
        <form className='Login' onSubmit={handleform}>
            <h2 style={{marginLeft:"20px"}}>Add Products</h2>
            <input type="text" className="form-control w-50 m-3" id="validationDefault01" placeholder='Enter Product name' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" className="form-control w-50 m-3" id="validationDefault02" placeholder='Enter Product price' value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="text" className="form-control w-50 m-3" id="validationDefault03"  placeholder='Enter Product category' value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" className="form-control w-50 m-3" id="validationDefault04" placeholder='Enter Product company' value={company} onChange={(e) => setCompany(e.target.value)}/>
            <button onClick={HandleProduct} className='btn btn-primary m-3 w-50'>Add Product</button>
        </form>
    );
}

export default Products;