import React from 'react';

import Item from '../Item/Item';
import './PackList.module.css';

const PackList = ({ items, deleteItem, checkItem }) => {

  return (
    <div className='list'>
      PackList
      <ul className='list'>
        {items.map((item) => <Item key={item.id} item={item} checkItem={checkItem} deleteItem={deleteItem} />)}
      </ul>
    </div>
  )
}

export default PackList;
