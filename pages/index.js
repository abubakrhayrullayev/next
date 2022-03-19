import Head from 'next/head'
import { PostWidget , Categories} from '../components/'
import Image from 'next/image'
import PostCard from '../components/PostCard'
import { getPosts } from '../services'
const categories = [
  {name:"Bosh sahifa" , slug:"/"},
  {name:"Yangiliklar" , slug:"yangilik"},
  {name:"Bog'lanish" , slug:"contact"},
]
export default function Home({posts}) {
  console.log(posts)
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
      <div className='lg:col-span-4 col-span-1 relative lg:sticky top-8'>
        <div className='relative lg:sticky top-8'>
        <PostWidget />
        <Categories />
        </div>
        
      </div>
    <div className='lg:col-span-8 col-span-1'>
    {
       posts.map(post  =>(
         <PostCard post={post.node} key={post.node.title} />
       ))
     }
    </div>
      </div>
    </div>
  )
}
export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{posts}
  }
}