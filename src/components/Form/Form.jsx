import React, { useState } from 'react';

import './Form.module.css';

const Form = (props) => {

  const [data, setData] = useState({
    description: "",
    qty: 0,
    packed: false,

  });
  // const [info, setInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInfo((pInfo) => {
    //   return [...pInfo, data];
    // })

    const newItem = {
      ...data,
      id: Date.now()
    }
    props.handleInfos(newItem);
    // console.log("newItem", newItem);
  }
  const handleChange = (e) => {
    setData((pData) => {
      return { ...pData, [e.target.name]: e.target.value }
    });
  }
  return (
    <div className='add-form'>
      <form onSubmit={handleSubmit}>
        <h3>What so you need for your trip</h3>
        <select
          name="qty"
          id="qty"
          value={data.qty}
          onChange={handleChange}
        >
          {Array.from(
            { length: 20 }, (_, i) => i + 1).map(num => <option key={num} value={num}>{num}</option>)}

        </select>
        <input
          required
          type="text"
          placeholder='description'
          value={data.description}
          onChange={handleChange}
          name='description'
        />
        <button className='submit' type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form;
