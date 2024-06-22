// import { getPosts } from '@/services/postApi';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = await res.json()
    // if(data){
    //     redirect(`/posts/${data[0].id}`)
    // }
    return data;
}


const PostPage = async () => {
    const postsData = await getPosts()
    // console.log(postsData)

    return (
        <div>
            <h6>All Posts</h6>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.slice(0, 20)?.map(post =>
                        <div key={post.id} className='border-2 p-6'>
                            <h6>{post.title}</h6>
                            <p>{post.body}</p>
                            <button className='bg-red-400 px-4 py-2'><Link href={`/posts/${post.id}`}>See Details</Link></button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default PostPage;