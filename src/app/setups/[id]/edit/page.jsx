
import { getConta } from "@/actions/setups";
import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function ContaEdit({params}) {
   
    const setup = await getConta(params.id)
    
    return (
        <>
            <NavBar active="setups" />
            <FormEdit conta={setup} />
        </>
    )
}
