import Link from 'next/link' // Tag Link do Next faz o carregamento das páginas no client-side (sem fazer requisição ao servidor)

export default function NavBar({active}) {
    return (
    <nav className="flex justify-between items-center bg-primary px-4 py-2">
        <ul id="links" className="flex items-end gap-14 text-pink-700">
          <li>
            <Link href="/">
              <h1 className='text-2xl font-bold text-slate-100'>ProGamer</h1>
            </Link>
          </li>
          <li>
            <Link className={active=="setups" && "text-slate-300"} href="/setups">
              <h1>Setups</h1>
            </Link>
          </li>
          <li>
            <Link className={active=="perfil" && "text-slate-300"} href="/perfil">
              <h1>Pefil</h1>
            </Link>
          </li>
        </ul>

    </nav>
    )
}