"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({arr}) => {
  return (
    <div>
        <div className='flex items-center gap-4 justify-center'>
        <h1 className='text-center text-xl font-semibold'>Spotify Playlists</h1>
        <div className='flex justify-center items-center gap-1'>
        <div className='w-1 h-5 bg-[#e59c49] animate-bounce'></div>
        <div className='w-1 h-3 bg-[#e59c49] animate-bounce'></div>
        <div className='w-1 h-4 bg-[#e59c49] animate-bounce'></div>
        </div>
        </div>
        {arr.map((item)=>(
            
             <div key={item.key} className='md:w-[30%] w-[80%] hover:-translate-y-1 hover:scale-110 mt-6 p-3 items-center flex md:gap-32 gap-16 rounded-lg hover:shadow-lg transition ease-in-out delay-75 bg-[#424768] text-[#e59c49] mx-auto'>
             <Image className='rounded-lg' src={item.image+".jpg"} width={40} height={35} alt='playlist_img'/>
             <Link target='_blank' href={item.link} ><span className='text-md font-medium'>{item.text}</span></Link>
         </div>
         
        ))}
   
    </div>
  )
}

export default Card