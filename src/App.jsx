import React, { useState } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import PackList from './components/PackList/PackList'
import Stat from './components/Stat/Stat'

const initialItems = [
  {
    id: 1,
    description: "Passports",
    qty: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Suitcase",
    qty: 1,
    packed: true,
  },
  {
    id: 3,
    description: "Computer",
    qty: 1,
    packed: false,
  }
]

// initialItems.map((item) => <Item key={item.key} items={item} />)

const App = () => {
  const [infos, setInfos] = useState(initialItems);
  const handleInfos = (info) => {
    setInfos((pInfo) => {
      return [...pInfo, info]
    })

  }

  const deleteItem = (id) => {
    setInfos(items => items.filter(item => item.id !== id))
  }

  return (
    <div className='app'>
      <Header />
      <Form handleInfos={handleInfos} />
      <PackList items={infos} deleteItem={deleteItem} />
      <Stat />
    </div>
  )
}

export default App