
import { getSetup } from "@/actions/setups";
import NavBar from "@/components/NavBar";
import FormEdit from "./FormEdit";

export default async function SetupEdit({params}) {
   
    const setup = await getSetup(params.id)
    
    return (
        <>
            <NavBar active="setups" />
            <FormEdit setup={setup} />
        </>
    )
}
