import React from 'react';

export default function DataRow({ setup }) {
    return (
        <main className='bg-secondary m-12 p-8'>
            <div id="data-row" className="group flex items-center justify-between p-2 my-2 rounded cursor-pointer hover:bg-primary">
                <div className="flex items-center">
                    <img src={setup.file} alt={setup.name} className="w-1/2 h-12 mr-4 object-cover" />
                    <div className="flex flex-col">
                        <span className="block font-bold">{setup.name}</span>
                        <span className="text-sm flex-grow">{setup.description}</span>
                        <span className="text-sm flex-grow">{setup.games}</span>
                        <span className="text-sm self-end">{`Preço: $${setup.price.toFixed(2)}`}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
