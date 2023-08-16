'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Params={
  id: string
}
type Data={
  id:string,
  name: string,
  yearOfBirth:number,
  dateOfBirth:string,
  actor: string,
  image:string,
  role:string,
  house:string,
  alive:boolean,
  wizard:boolean,
  gender:string,
  wand:{
    core:string,
    length:number,
    wood:string
  }
}

export default function Page({ params }: { params: Params }) {
  const [data,setData]=useState<any>([])
  const [loading,setLoading]=useState(<p className='text-center text-3xl font-semibold'>Fetching data...</p>)
  async function getItem() {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${params.id}`)
    const data = await res.json()
    setLoading(<></>)
    setData(data)
    console.log(data)
  }
  useEffect(()=>{
    getItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data])
  return (
    <main className="flex h-[100vh] flex-col items-center justify-between md:p-24 max-md:py-16 max-md:px-10">
      <Link href='/' className='font-semibold text-4xl mb-8 -mt-8 ml-24 text-left w-full'><i className='ri ri-arrow-left-line'></i></Link>
      {loading}
      {data&&data.map((item:Data)=>(
        <div className="flex max-md:flex-col" key={item.id}>
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            className='w-[340px] h-[340px] max-md:w-[80vw] rounded-lg'
          />
          <div className="md:ml-10 max-md:mt-10">
            <p className='md:text-lg'><span className='font-semibold'>Name</span>: {item.name}</p>
            <p className='md:text-lg'><span className='font-semibold'>Actor's name</span>: {item.actor}</p>
            <p className='md:text-lg'><span className='font-semibold'>Date of Birth</span>: {item.dateOfBirth}</p>
            <p className='md:text-lg'><span className='font-semibold'>Year of Birth</span>: {item.yearOfBirth}</p>
            <p className='md:text-lg'><span className='font-semibold'>House</span>: {item.house}</p>
            <p className='md:text-lg'><span className='font-semibold'>Gender</span>: {item.gender}</p>
            <p className='md:text-lg'><span className='font-semibold'>Alive</span>: {item.alive===true?"Yes":"No"}</p>
            <p className='md:text-lg'><span className='font-semibold'>Wizard</span>: {item.wizard===true?"Yes":"No"}</p>
            <p className='md:text-lg'><span className='font-semibold'>Wand</span>: {item.wand.core}</p>
          </div>
        </div>
      ))}
    </main>
  )
}
