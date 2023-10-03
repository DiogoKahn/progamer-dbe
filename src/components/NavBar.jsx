import Link from 'next/link' // Tag Link do Next faz o carregamento das páginas no client-side (sem fazer requisição ao servidor)
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({ active }) {
  const { user, logout } = useContext(AuthContext)
  const { push } = useRouter()

  function handleLogout(){
      logout()
      push("/login")
  }
  
  return (
      <nav className="flex justify-between items-center bg-primary px-4 py-2">
          <ul id="links" className="flex items-end gap-14 text-pink-700">
              <li>
                  <Link href="/">
                      <h1 className="text-2xl font-bold text-slate-100">ProGamer</h1>
                  </Link>
              </li>
              <li>
                  <Link className={active=="despesas" && "text-slate-300"} href="/setups">
                      Setups
                  </Link>
              </li>
              
              <li>
                  <Link className={active=="contas" && "text-slate-300"} href="/profile">
                      Profile
                  </Link>
              </li>
              
          </ul>

          <div className="flex items-center gap-2">
              <span>{user?.email}</span>                
              <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
              </div>
              <Button onClick={handleLogout} type="button">logout</Button>
          </div>
      </nav>
  )
}