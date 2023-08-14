'use client' // Error components must be Client Components
 
import { useEffect, useState } from 'react'
 
export default function Error({error, reset}:{error: Error,
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <p className='text-2xl'>This is a technical error</p>
      <p className='text-gray-400 my-2 text-sm w-[40vw] text-center'>{error.message}</p>
      <button
        className='mt-2 w-[100px] h-[40px] flex justify-center items-center bg-black text-white rounded-lg'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}