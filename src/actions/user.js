"use server"

import { cookies } from 'next/headers'

export async function apiLogin(credenciais){
    const url = "http://localhost:8080/progamer/api/login"

    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers : {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 200) return {error: "credenciais inválidas"}

    const json = await resp.json()

    cookies().set('progamer_token', json.token, {
        maxAge: 60 * 60 * 24 * 5
    })
}

export async function apiLogout(){
    cookies().delete('progamer_token')
}