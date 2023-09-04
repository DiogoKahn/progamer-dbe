import NavBar from '../components/NavBar'
import DataRow from "./DataRow";

async function getSetups(){
  const url = "http://localhost:8080/progamer/api/setups"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Setups() {
  const setups = await getSetups()
  return (
    <>
      <NavBar active={"setups"}/>
      <h2 className='m-20'>Setups</h2>
      {setups.map(setup => <DataRow key={setup.id} setup={setup} />)}
    </>
    
  )
}
