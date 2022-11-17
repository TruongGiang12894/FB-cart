import React, {useState, useEffect} from 'react';
import Productcard from '../Productcard';
import './style.css'


function Productlist(props) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/list')
            .then((response) => response.json())
            .then((data) => setProductList(data));
    }, []);
    
    function handleDel(id) {
        
        if (window.confirm('Delete this product ?')) {
            fetch(`http://localhost:8000/list/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            fetch('http://localhost:8000/list')
            .then((response) => response.json())
            .then((data) => setProductList(data));
        }

        console.log(id);
    }

    return (
        <div className='product-list'>
            {productList.map((item, idx) => (
                <Productcard
                    key={idx}
                    nameP={item.nameP}
                    id = {item.id}
                    img={item.img}
                    price={item.price}
                    handleDel ={handleDel}
                />
            ))}
        </div>
    );
}

export default Productlist;