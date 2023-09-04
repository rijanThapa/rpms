import React from 'react';
import './noodle.css';
import { lists } from './dummy'; 

function Product(props) {

  return (
    
    <div className="box">
      <img src={props.imgsrc} alt={props.desc} />
      <div className="desc">{props.desc}<br /></div>
      <div className="date">
        <p className="price">{props.price}</p>
        <p>{props.exprie}</p>
      </div>
    </div>
   
  );
  
}

function ProductList() {
  const filteredLists = lists.filter(item => item.id >= 1 && item.id <= 6);
 
  return (
    <div className="product-list">
      {filteredLists.map((item) => (
        <Product
          key={item.id}
          imgsrc={item.imgsrc}
          desc={item.desc}
          price={item.price}
          exprie={item.exprie}
        />
      ))}
    </div>
  );
}

export default ProductList;
