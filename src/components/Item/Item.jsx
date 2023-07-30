import React, { useState } from 'react';
import { LiaCheckCircleSolid, LiaCircle, LiaTimesSolid } from "react-icons/lia";
import './Item.module.css';

const Item = (props) => {

  const [selected, setSelected] = useState(null);



  return (
    <li>
      <span onClick={() => props.checkItem(props.item.id)}>
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
        <button className='close' onClick={() => props.deleteItem(props.item.id)}>
          <LiaTimesSolid />
        </button>
      </span>
    </li>

  )
}

export default Item;
