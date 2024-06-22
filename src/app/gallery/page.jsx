import Image from 'next/image';
import React from 'react';
import { headers } from 'next/headers';

// const getTime = async () => {
//     const headersList = headers();
  
//     const host = headersList.get("host"); // to get domain
//     const nextURL = headersList.get("next-url"); // to get url
//     // console.log(host, nextURL);
//     const isS = host == "localhost:3000" ? "" : "s";
//     const res = await fetch(`http${isS}://${host}/time`, {
//       next: { revalidate: 5 },
//     });
//     const data = await res.json();
//     return data.currentTime;
//   };



const page = async() => {
    const currentTime = new Date().toLocaleTimeString();

    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl'>Gallery Page</h6>
            <h3 className='text-3xl text-red-400 mt-12 mb-12'>Time: {currentTime}</h3>
            <div>
                {
                    [1, 2, 3, 4, 5]?.map((img) => (
                        <Image key={img} src={`/images/${img}.jpg`} alt="" height="1080" width="1920" />
                    ))
                }
            </div>
            {/* <Image src="/images/food4.jpg" alt="" height="1080" width="1920" /> */}
        </div>
    );
};

export default page;