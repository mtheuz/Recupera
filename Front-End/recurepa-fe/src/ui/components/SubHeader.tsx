import {Smartphone, Search, Clock} from 'lucide-react'

function SubHeader() {
  return (
    <header className='flex items-center justify-center bg-[#AEBFB1] h-[125px] px-36 mx-16 rounded-b-2xl shadow-xl -z-10'>
        <div className='flex gap-2'>
            <button className='flex gap-3 bg-green-100 py-3 px-5 rounded-xl'><Smartphone/><span>Elétronico</span></button>
            <button className='flex gap-3 bg-green-100 py-3 px-5 rounded-xl'><Clock/><span>Elétronico</span></button>
        </div>
        <div className='flex items-center p-2 rounded-full w-full max-w-lg'>
            <input placeholder='Busque um objeto' className='flex-1 bg-green-100 rounded-xl p-3 outline-none text-gray-900' type="text" />
            <button className='cursor-pointer bg-gray-900 px-5 py-3 rounded-l-3xl rounded-r-xl flex items-center justify-center -ml-10  border-[#AEBFB1]'><Search color='#DAF1DE'/></button>
        </div>
        
    </header>
  )
}

export default SubHeader