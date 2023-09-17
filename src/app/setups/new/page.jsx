"use client"

import { create } from "@/actions/setups";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function FormSetups() {
    const [error, setError] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)

        if (!resp.success) {
            setError(resp.message)
            return
        }

        redirect("/setups")

    }

    return (
        <>
            <NavBar active="setups" />

            <main className="bg-primary mt-20 m-auto p-12 rounded max-w-lg">
                <h2 className="text-2xl text-slate-100">Cadastrar Setup</h2>

                <form action={handleSubmit} className="flex flex-col gap-4">
                    <InputText
                        label="name"
                        id="name"
                        name="name"
                    />
                    <InputText
                        label="Descrição"
                        id="description"
                        name="description"
                    />
                    <InputText
                        label="Games"
                        id="games"
                        name="games"
                    />
                    <InputText
                        label="Preço"
                        id="price"
                        name="price"
                    />
                    <InputText
                        label="File"
                        id="file"
                        name="file"
                    />

                    <div className="flex justify-around">
                        <Button href="/setups" variant="secondary">
                            cancelar
                        </Button>
                        <Button type="button">
                            salvar
                        </Button>
                    </div>

                    <span className="text-red-500">{error}</span>

                </form>

            </main>
        </>


    )
}