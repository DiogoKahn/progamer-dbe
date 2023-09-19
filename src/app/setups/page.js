import { Button } from '@mui/material';
import NavBar from '../../components/NavBar'
import DataRow from "./DataRow";

async function getSetups(){
  // const url = "http://localhost:8080/progamer/api/setups"
  const url = "https://progamer-dbe-api-production.up.railway.app/progamer/api/setups"
  const resp = await fetch(url)
  return resp.json()
}

export default async function Setups() {
  const setups = await getSetups()
  return (
    <>
      <NavBar active={"setups"}/>
      <div className='flex justify-between'>
        <h2 className='m-20'>Setups</h2>
        <div className='rounded-sm p-5 m-20 bg-pink-600 hover:bg-secondary'>
          <Button href="/setups/new" variant='primary'>
            Adicionar Setup
          </Button>
        </div>
      </div>
      {setups.map(setup => <DataRow key={setup.id} setup={setup} />)}
    </>
    
  )
}
