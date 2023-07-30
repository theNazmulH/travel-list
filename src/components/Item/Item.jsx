import React, { useState } from 'react';
import { LiaCheckCircleSolid, LiaCircle, LiaTimesSolid } from "react-icons/lia";
import './Item.module.css';

const Item = (props) => {

  const [selected, setSelected] = useState(null);

  const handleDeleteItem = (id) => {
    props.deleteItem(id)
  }
  console.log(props);
  return (
    <li>
      <span>
        {
          props.item.packed ?
            <LiaCheckCircleSolid />
            :
            <LiaCircle />
        }
      </span>
      <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
        {props.item.qty} &nbsp;
        {props.item.description}
        <button className='close' onClick={() => handleDeleteItem(props.item.id)}>
          <LiaTimesSolid />
        </button>
      </span>
    </li>

  )
}

export default Item;
