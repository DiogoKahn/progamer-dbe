import React from 'react';
import DropMenu from "@/components/DropMenu";

export default function DataRow({ setup }) {
    return (
        <main className='bg-secondary m-12 p-8'>
            <div id="data-row" className="flex justify-between p-2 my-2 rounded hover:bg-primary">
                <div className="flex items-center">
                    <img src={setup.file} alt={setup.name} className="w-1/2 h-12 mr-4 object-cover" />
                    <div className="flex justify-between">
                        <div className='flex flex-col'>
                            <h3>Descrição:</h3>
                            <span className="text-sm">{setup.description}</span>
                        </div>
                        <div className='flex flex-col'>
                            <h3>Jogos:</h3>
                            <span className="text-sm">{setup.games}</span>
                        </div>
                    </div>
                </div>
                <span className="text-sm my-12">{`Preço: $${setup.price.toFixed(2)}`}</span>
                <DropMenu contaId={setup.id} />
            </div>
        </main>
    );
}