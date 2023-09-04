import React from 'react';
import './noodle.css';
import { lists } from './dummy'; 

function Noodle(props) {
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

function BiscutsList() {

  const filteredLists = lists.filter(item => item.id >= 7 && item.id <= 10);

  return (
    <div className="product-list">
      {filteredLists.map((item) => (
        <Noodle
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

export default BiscutsList;
