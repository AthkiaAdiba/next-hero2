This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import Image from 'next/image';
import React from 'react';


// const getTime = async () => {
//     const res = await fetch("http://localhost:3000/time", { cache: 'no-store' });
//     const data = await res.json()
//     console.log(data);
//     return data.currentTime;
// };



const page = async () => {

    // const currentTime = await getTime();

    return (
        <div className='min-h-screen px-12 py-24'>
            <h6 className='text-3xl'>Gallery Page</h6>
            {/* <h3 className='text-3xl text-red-400 mt-12 mb-12'>Time: {currentTime}</h3> */}
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
