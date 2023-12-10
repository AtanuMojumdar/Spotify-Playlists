"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'

const arr = [
  {image: "/oporajito",text:"Oporajito",key:1,link:"https://open.spotify.com/playlist/3Rgre9ZIta5J2gyE1sEjpA?si=053f324fab2b4300"},
  {image:"/rabindra", text:"Rabindra Sangeet",key:2,link:"https://open.spotify.com/playlist/51DtTGQ1qfvH5mj6lBR8X8?si=d036a970040c4334"},
  {image:"/faasle", text:"Faasle",key:3,link:"https://open.spotify.com/playlist/1vsq7Sx49j2fZSE1wqDI5N?si=50614c52075a4ad4"},
  {image:"/mati",text:"মাটি",key:4,link:"https://open.spotify.com/playlist/2XjcXjQCSCXKAFGpCSX8XC?si=43726ccc793f4460"},
  {image:"/ashes",text:"Ashes",key:5,link:"https://open.spotify.com/playlist/2ZOPvQvlMMAwrR11D34U8w?si=3641e0421409483e"}
]

const Home = () => {
  const [isOpen, setisOpen] = useState(false)
  function swapValue(e){
    setisOpen(!isOpen)
  }

  return (
    <div>
      <div className='md:mt-10 mt-4 md:ml-8 ml-4'>
        <Image onClick={swapValue} className='hover:cursor-pointer' src='/profile.png' width={50} height={50} alt='AtanuMojumdar-Img'/> 
        {isOpen && <div className='w-36 p-2 rounded-md bg-[#4b537b] absolute flex flex-col gap-4 shadow-lg mt-1'>
          <Link target='_blank' href='https://open.spotify.com/user/z44vodiiqcj9e3b6rwn9vmnbd?si=ae598658c6ed49c3'><h1 className='underline underline-offset-2'>Spotify Profile</h1></Link>
          <Link target='_blank' href='https://www.instagram.com/atanu_mojumdar/'><h1 className='underline underline-offset-2'>Instagram</h1></Link>
          <Link target='_blank' href='https://www.linkedin.com/in/atanu-mojumdar-b4629821a/'><h1 className='underline underline-offset-2'>LinkedIn</h1></Link>
          <Link target='_blank' href='mailto:atanu19mojumdar@gmail.com'><h1 className='underline underline-offset-2'>Mail</h1></Link>
        </div>}
      </div>

      <Card arr={arr}/>
      <div className='flex gap-4 p-12'>
        <Link target='_blank' href='https://in.pinterest.com/atanumojumdar19/'><h1 className='underline underline-offset-2'>Pinterest</h1></Link>
        <Link target='_blank' href='https://www.linkedin.com/in/atanu-mojumdar-b4629821a/'><h1 className='underline underline-offset-2'>LinkedIn</h1></Link>
      </div>
    </div>
  )
}

export default Home