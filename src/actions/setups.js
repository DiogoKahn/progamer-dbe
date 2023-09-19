"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
    // const url = "http://localhost:8080/progamer/api/setups"
    const url = "https://progamer-dbe-api-production.up.railway.app/progamer/api/setups"

    const options = {
        method: "POST",
        body: JSON.stringify( Object.fromEntries(formData) ),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
    console.log(options.body)

    if (resp.status !== 201){
        const json = await resp.json()
        const errors = json.reduce((str, error) => str += error.message + ". ", "")
        return {message: `Erro ao cadastrar setup. ${errors}`}
    }

    revalidatePath("/setups")
    return {success: "ok"}
}