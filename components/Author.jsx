import React from 'react'
import Image from 'next/image'
const Author = ({author}) => {
  return (
    <div className='relative text-center mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-8'>
       <div className='absolute -top-14 left-0 right-0'>
          <Image
          unoptimized 
      src={author.photo.url}
      alt={author.name} 
      width="100px"
      height="100px"
          />
       </div>
       <h1 className="text-white mt-4 mb-4 text-xl font-bold block">{author.name}</h1>
       <p className='text-white text-lg'>{author.bio}</p>
      
      </div>
  )
}

export default Author