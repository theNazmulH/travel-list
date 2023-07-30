import React from 'react';

import './Stat.module.css';

const Stat = ({ numItems }) => {
  return (
    <div>
      You have {numItems} items on your list. You already packed x (x%)
    </div>
  )
}

export default Stat;
