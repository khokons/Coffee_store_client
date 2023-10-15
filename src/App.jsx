
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

const LoadedCoffees = useLoaderData()
const [coffees, setCoffees] = useState(LoadedCoffees)
  return (
    <div>
     
 <h1 className='text-4xl text-center font-extrabold py-12'>Coffee lenght : {coffees.length}</h1>

 <div className='grid md:grid-cols-2 gap-6 px-12'>
  {
    coffees.map(coffee => <CoffeeCard key={coffee._id}
      coffee={coffee}
      coffees={coffees}
      setCoffees={setCoffees}
    ></CoffeeCard>)
  }
 </div>
    
    </div>
  )
}

export default App
