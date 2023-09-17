import NavBar from '../../components/NavBar'
import Image from 'next/image'

export default function Perfil() {
  return (
    <>
      <NavBar active={"perfil"} />

      <main className='bg-secondary m-20 p-12'>
        <h2>Perfil</h2>
      </main>

    </>
    
  )
}
