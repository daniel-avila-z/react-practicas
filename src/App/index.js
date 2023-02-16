import React from 'react'
import StateHook from '../components/StateHook'
import Counter from '../components/Counter'
import Conditional from '../components/Conditional'
import Error from '../components/Error'
import Product from '../components/Product'
import ShoppingCart from '../components/ShoppingCart'
import '../style/global.css'

function App() { // creamos el element

  return (
    <>
        <StateHook />
        <Counter />
        <Conditional />
        <Error />
        <Product />
        <ShoppingCart />
    </>
  )
}

export default App // exportamos