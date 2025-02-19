import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { UserCircle, } from "lucide-react";
import Dropdown from "./Dropdown";

function Header() {
    const { user, checkAuth } = useAuth();
    const options = [
        { label: "Opção 1", href: "#" },
        { label: "Opção 2", href: "#" },
        { label: "Opção 3", href: "#" },
      ];
  useEffect(() => {
    checkAuth(); 
  }, []);

  return (
    
    <header className='flex items-center mt-8 mx-8 h-[100px] rounded-xl shadow-2xl bg-[#235347]'>
        <nav className="flex items-center  justify-between w-full px-20">
            <img className="w-46 " src="/logo.png" alt="" />
            <div className="flex gap-8 text-[#C0D0C3]">
                <a className="flex justify-center items-center shadow-2xl border bg-[#061A23] rounded-md border-[#336c5d] px-8 py-1 hover:scale-105 duration-300 cursor-pointer" href="">Cadastre um achado</a>
                {
                    !user ? 
                    (<>
                    <a className="shadow-4xl border rounded-md border-[#C0D0C3] px-8 py-1 hover:scale-105 duration-300 cursor-pointer" href="/cadastro">Cadastre-se</a>
                    <a className="shadow-2xl border rounded-md border-[#C0D0C3] px-8 py-1 hover:scale-105 duration-300 cursor-pointer" href="/login">Login</a>
                    </>
                    ) : (
                    <>
                    
                    <Dropdown buttonLabel={<UserCircle size={40}/>} options={options}/>
                    </>
                )
                    
                }
                
            </div>
        </nav>
    </header>
  )
}

export default Header