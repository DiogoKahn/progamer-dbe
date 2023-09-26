"use client";
import { create, update } from "@/actions/setups";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { redirect } from 'next/navigation';

export default function FormEdit({ setup }) {
    const [error, setError] = useState("");
    const [setupEdit, setSetupEdit] = useState(setup || { name: "", description: "", games: "", price: "", file: "" });

    async function handleSubmit() {
        const resp = await update(setupEdit);

        if (resp?.error) {
            setError(resp.error);
            return;
        }

        redirect("/setups");
    }

    function handleFieldEdit(field, value) {
        setSetupEdit({
            ...setupEdit,
            [field]: value
        });
    }

    if (!setupEdit) {
        return null; 
    }


    return (
        <main className="bg-slate-900 mt-20 m-auto p-12 rounded max-w-lg">
            <h2 className="text-2xl text-slate-100">Editar setup</h2>

            <form action={handleSubmit} className="flex flex-col gap-4">
                <InputText
                    label="name"
                    id="name"
                    name="name"
                    value={setupEdit.name}
                    onChange={(e) => handleFieldEdit("name", e.target.value)}
                />

                <InputText
                    label="Descrição"
                    id="description"
                    name="description"
                    value={setupEdit.description}
                    onChange={(e) => handleFieldEdit("description", e.target.value)}
                />

                <InputText
                    label="Games"
                    id="games"
                    name="games"
                    value={setupEdit.games}
                    onChange={(e) => handleFieldEdit("games", e.target.value)}
                />

                <InputText
                    label="Preço"
                    id="price"
                    name="price"
                    value={setupEdit.price}
                    onChange={(e) => handleFieldEdit("price", e.target.value)}
                />

                <InputText
                    label="File"
                    id="file"
                    name="file"
                    value={setupEdit.file}
                    onChange={(e) => handleFieldEdit("file", e.target.value)}
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
    )
}