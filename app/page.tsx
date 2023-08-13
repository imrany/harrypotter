'use client'
import Image from 'next/image'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react'

export default function Home() {
  const router=useRouter()
  const [items,setItems]=useState([])

  const fetchItems=async()=>{
    try{
      const url =`https://hp-api.onrender.com/api/characters`
      const response=await fetch(url,{
        method:"GET"
      })
      const parseRes=await response.json()
      setItems(parseRes)
    }catch(error:any){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchItems()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className="grid grid-cols-3 gap-[10px] max-md:grid-cols-2 max-sm:flex ">
      {items?items.map((item:any)=>(
        <div onClick={()=>router.push(`/characters/${item.id}`)} className="" key={item.id}>
          <Image
            src={item.image}
            alt={item.name}
          />
        </div>
      )):(
        <>
          <div className='text-xl'>Error: Failed to Fetch, try again</div>
          <button className="bg-black text-white w-[100px] h-[35px] rounded-[50px] flex justify-center items-center mt-6" onClick={()=>window.location.reload()}>Back</button>
        </>
      )}
     </div>
    </main>
  )
}
