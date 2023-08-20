import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function Setups() {
  return (
    <>
      <NavBar active={"setups"}/>

      <main className='bg-secondary m-20 p-12'>
        <h2>Setups</h2>
      </main>

    </>
    
  )
}
