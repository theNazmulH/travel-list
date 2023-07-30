import React from 'react';

import Item from '../Item/Item';
import './PackList.module.css';

const PackList = ({ items, deleteItem }) => {

  return (
    <div className='list'>
      PackList
      <ul className='list'>
        {items.map((item) => <Item key={item.id} item={item} deleteItem={deleteItem} />)}
      </ul>
    </div>
  )
}

export default PackList;
