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
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
     <div className="md:grid lg:grid-cols-4 gap-[30px] max-md:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center" >
      {items?items.map((item:any)=>(
        <div onClick={()=>router.push(`/characters/${item.id}`)} className='flex w-[270px]  flex-col justify-center cursor-pointer shadow-lg rounded-lg border-[1px] border-gray-100' key={item.id}>
          <Image
            src={`${item.image}`}
            width={270}
            height={230}
            alt={item.name}
            className='h-[200px] w-full rounded-t-lg'
          />
          <div className="ml-6 my-2 text-lg" id={item.id}>
            <p>Name: {item.name}</p>
            <p>{item.dateOfBirth===null?"no DoB":item.dateOfBirth}</p>
          </div>
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
