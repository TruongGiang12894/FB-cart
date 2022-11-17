import React, { useState } from 'react';
import './style.css'

function Addform(props) {
    const [inputProduct, setInputProduct] = useState({
        nameP: '',
        img: '',
        price: ''
    })
    const [validate, setValidate] = useState({
        nameRequired: '',
        imgRequired: '',
        priceRequired:''
    })

    function handleInputProd(e) {
        setInputProduct({
            ...inputProduct,
            [e.target.name]:e.target.value
        })
        // console.log(inputProduct);
    }

    function handleAdd() {
        if (inputProduct.nameP === '') {
            setValidate({
                ...validate,
                nameRequired: 'Please fill the name!*'
            });
            return
        }
        if (inputProduct.img ==='') {
            setValidate({
                ...validate,
                imgRequired:'Please add image!*'
            });
            return
        };
        if (isNaN(inputProduct.price)||inputProduct.price ==='') {
            setValidate({
                ...validate,
                priceRequired:'Please fill number!*'
            });
            return
        }
        
        setValidate({
            nameRequired:'',
            imgRequired:'',
            priceRequired:''
        });

        fetch('http://localhost:8000/list', {
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(inputProduct)
        })
      .then((response) => response.json())
            .then((data) => console.log(data))
        .catch(console.log('Sending failed!'))
        console.log('Send....');
    }

    return (
        <div className='add-form'>
            <label htmlFor="">Name:</label>
            <input type="text" name='nameP' onChange={handleInputProd} value={inputProduct.nameP} placeholder='...Product name' /><br />
            <p>{ validate.nameRequired || ''}</p>
            <label htmlFor="">Image:</label>
            <input type="text" name='img' onChange={handleInputProd} value={inputProduct.img} placeholder='...Product image' /><br />
            <p>{ validate.imgRequired}</p>
            <label htmlFor="">Price:</label>
            <input type="text"
                name='price'
                onChange={handleInputProd}
                value={inputProduct.price}
                placeholder='...Product price'
            /><br />
            <p>{ (isNaN(inputProduct.price) && 'Please fill number!*')||'' }</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Addform;