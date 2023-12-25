import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import foodimage from '../../images/foodimage.png';

const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

interface RecipeDetails {
    title: string;
    image: string;
    instructions: string;
    extendedIngredients: Array<{ id: number; original: string; }>;
}

const Name: React.FC = () => {
    const router = useRouter();
    const { name } = router.query;

    const [details, setDetails] = useState<RecipeDetails | null>(null);
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
        const fetchDetails = async () => {
            if (name) {
                const data = await fetch(
                    `https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}`
                );
                const detailData: RecipeDetails = await data.json();
                setDetails(detailData);
            }
        };
    
        fetchDetails();
    }, [name]);

    return (
        <div className='bg-white' >
        <Navbar />
        <div className=' text-black mt-7 px-5 w-full h-full min-h-screen font-josefin flex flex-col weird3:flex-row'>
            <div className='flex flex-col items-center px-12 box-border '>
                <h2 className='font-bold text-xl mb-3'>
                    {details?.title ?? 'No Title Available'}
                </h2>
                {details?.image ? (
                    <Image className='rounded-xl' src={details.image} alt={details.title || 'No Image'} width={500} height={300} />
                    ) : (
                    <Image className='rounded-xl' src={foodimage} alt={'defaultImage'} width={500} height={300} />
                    )
                }
            </div>
            <div className='mt-5 max-w-md mb-28 lg:text-base'>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>
                    <div className='text-sm px-3 py-1.5 active:bg-slate-500 active:text-white'>
                        Instructions
                    </div>
                </Button>
                <Button  className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>
                    <div className=' text-sm px-3 py-1.5 active:bg-slate-500 active:text-white'>
                        Ingredients
                    </div>
                </Button>
                <div className='mt-3 font-semibold'>
                {activeTab === 'instructions' && details && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                    </div>
                )}
                
                {activeTab === 'ingredients' && details && (
                    <ul className='px-5'>
                        {details.extendedIngredients.map((ingredients) => (
                            <li className='list-disc mt-4 leading-tight font-semibold' key={ingredients.id}>{ingredients.original}</li>
                        ))}
                    </ul>
                )}
                </div>
            </div>
        </div>
        </div>
    );
};

const Button = styled.button`
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

export default Name;