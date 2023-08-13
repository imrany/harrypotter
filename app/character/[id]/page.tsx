import Image from 'next/image'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Character',
}
export default function Character() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>This is the dashboard page</p>
    </main>
  )
}
