"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = "http://localhost:8080/progamer/api/setups"

export async function create(formData){
    const token = cookies().get('progamer_token')
   
    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData) ),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar setup. ${errors}`}
    }

    revalidatePath("/setups")
    return {success: "ok"}
}

export async function getsetups() {
    const token = cookies().get('setup_token')

    const options = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) 
        console.log(resp)

    return resp.json()
}

export async function destroy(id){

    const urlDelete = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(urlDelete, options)

    if (resp.status !== 204)
        return {error: "Erro ao apagar a setup. " + resp.status}

    revalidatePath("/setups")

}

export async function getsetup(id){
    const getUrl = url + "/" + id

    const resp = await fetch(getUrl)

    if(resp.status !== 200)
        return {error: "Erro ao buscar dados da setup"}

    return await resp.json()
}

export async function update(setup){
    const updateUrl = url + "/" + setup.id

    const options = {
        method: "PUT",
        body: JSON.stringify( setup ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateUrl, options)

    if(resp.status !== 200)
        return {error: "erro ao atualizar setup"}

    revalidatePath("/setups")
}