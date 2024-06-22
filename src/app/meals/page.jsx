import Meals from '@/components/Meals';
import React from 'react';
import styles from './styles.module.css'
import { Headland_One } from 'next/font/google';

const headland = Headland_One({weight: ['400'], subsets: ['latin']})

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
};


const MealsPage = () => {
    return (
        <div className={`${headland.className} p-12`}>
            <h1 className='text-3xl font-semibold text-red-400'>Choose Your Meals</h1>
            <p className={styles.text_large}>Choose meals of you choose by searching......</p>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;