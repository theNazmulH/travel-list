import React from 'react';

import './Stat.module.css';

const Stat = ({ numItems, numItemsPacked }) => {
  return (
    <div>
      You have {numItems} items on your list. You already packed {numItemsPacked} ( {Math.round((numItemsPacked / numItems) * 100)}%)
    </div>
  )
}

export default Stat;
