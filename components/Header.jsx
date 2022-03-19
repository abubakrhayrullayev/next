import React from 'react';
import Link from 'next/link';

const Categories = [
    {name:"Bosh shifa" , slug:""},
    {name:"Yangiliklar" , slug:"yangilik"}
]
const Header = () => {
  return (
    <div className='container mx-auto mb-8'>
        <div className='border-b w-full inline-block border-blue-500 py-8'>
            <div className='md:float-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Sayt nomi
                        </span>  
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {Categories.map(category =>(
                    <Link href={category.slug} href={`/category/${category.slug}`}>
                        <span className='cursor-pointer float-right text-2xl ml-4 mt-2 text-white'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
};

export default Header;
