import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCart from './components/CoffeeCart';
import { useState } from 'react';

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);


  return (
    <>
      <h1 className='text-6xl text-purple-600'>Coffee Store:{loadedCoffee.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          loadedCoffee.map(coffee =>
            <CoffeeCart key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            >

            </CoffeeCart>)
        }
      </div>
    </>
  )
}

export default App
