export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...props} className="bg-secondary rounded py-1 px-2 outline-none focus:ring-1 focus:ring-pink-600 " />
        </div>
    )
}