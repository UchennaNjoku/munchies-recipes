import React from 'react';
import Image from 'next/image'
import { useEffect, useState } from "react";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import foodInPan from '../images/finalFood1.png'

const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

const Picks: React.FC = () => {

    interface Recipe {
        id: number;
        title: string;
        image: string;
    }
    const [popular, setPopular] = useState<Recipe[]>([]);
    const [vegetarian, setVegetarian] = useState<Recipe[]>([]);

    const getPopular = async () => {
        const popularCacheKey = 'popularRecipes';
        const popularCatchedData = localStorage.getItem(popularCacheKey);
    
        if (popularCatchedData) {
            const { data, expiry } = JSON.parse(popularCatchedData);
    
            // Check if cache has expired
            if (expiry > Date.now()) {
                setPopular(data);
                return;
            }
        }
    
        try {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9`);
            const data = await api.json();
    
            if (data && data.recipes) {
                setPopular(data.recipes);
    
                // Cache data with an expiry (e.g., 24 hours)
                const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
                localStorage.setItem(popularCacheKey, JSON.stringify({ data: data.recipes, expiry }));
            } else {
                console.error('Popular recipes data is not available');
            }
        } catch (error) {
            console.error('Error fetching popular recipes:', error);
        }
    };

    const getVegetarian = async () => {
        const vegetarianCacheKey = 'vegetarianRecipes';
        const vegetarianCatchedData = localStorage.getItem(vegetarianCacheKey);
    
        if (vegetarianCatchedData) {
            const { data, expiry } = JSON.parse(vegetarianCatchedData);
    
            // Check if cache has expired
            if (expiry > Date.now()) {
                setVegetarian(data);
                return;
            }
        }
    
        try {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=9&tags=vegetarian`);
            const data = await api.json();
    
            if (data && data.recipes) {
                setVegetarian(data.recipes);
    
                // Cache data with an expiry (e.g., 24 hours)
                const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds
                localStorage.setItem(vegetarianCacheKey, JSON.stringify({ data: data.recipes, expiry }));
            } else {
                console.error('Vegetarian recipes data is not available');
            }
        } catch (error) {
            console.error('Error fetching vegetarian recipes:', error);
        }
    };

    useEffect(() => {
        getPopular();
    }, []); 
    useEffect(() => {
        getVegetarian();
    }, []); 


    

    return (
        <div className='bg-white text-black'>
            <div className="font-josefin py-6 px-2 mx-6 md:mx-14 xl:px-20">
                <div className="flex flex-col relative lg:px-20">
                    <h3 className="self-center font-bold text-2xl md:text-3xl lg:text-4xl md:mt-8 mb-2 lg:mb-6">Our Picks</h3>

                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem'
                    }}>
                        {popular && popular.map((recipe) => (
                            <SplideSlide key={recipe.id} className='relative'>
                                <Link href={'/recipe/' + recipe.id}>
                                    <div className="relative flex center min-w-img">
                                        <div>
                                            {recipe?.image ? (
                                                <Image className="z-0 rounded-lg object-cover" width={500} height={200} src={recipe.image} alt={recipe.title} />
                                                ) : (
                                                <Image className='rounded-xl' src={foodInPan} alt={'defaultImage'} width={500} height={200} />
                                                )
                                            }
                                        </div>
                                    </div>
                                </Link>
                                <center className="mb-9 text-xs md:text-sm lg:text-base w-full font-semibold self-center justify-center items-center top-24 text-black">{recipe.title}</center>
                            </SplideSlide>
                        ))}
                    </Splide>
                    <div className="inline absolute right-0 bottom-0 lg:text-lg lg:pr-14 lg:mt-7">
                        <FaLongArrowAltLeft className="inline" />
                        <p className="inline">drag for more</p>
                        <FaLongArrowAltRight className="inline" />
                    </div>
                </div>
            </div>
            <div className="font-josefin py-6 px-2 mx-6 md:mx-14 xl:px-20">
                <div className="flex flex-col relative lg:px-20">
                    <h3 className="self-center font-bold text-2xl md:text-3xl lg:text-4xl md:mt-8 mb-2 lg:mb-6">Vegetarian</h3>

                    <Splide options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '3rem'
                    }}>
                        {vegetarian && vegetarian.map((recipe) => (
                            <SplideSlide key={recipe.id} className='relative'>
                                <Link href={'/recipe/' + recipe.id}>
                                    <div className="relative flex center min-w-img">
                                        <div>
                                            {recipe?.image ? (
                                                <Image className="z-0 rounded-lg object-cover" width={500} height={200} src={recipe.image} alt={recipe.title} />
                                                ) : (
                                                <Image className='rounded-xl' src={foodInPan} alt={'defaultImage'} width={500} height={200} />
                                                )
                                            }   
                                        </div>
                                    </div>
                                </Link>
                                <center className="mb-9 text-xs md:text-sm lg:text-base w-full font-semibold self-center justify-center items-center top-24 text-black">{recipe.title}</center>
                            </SplideSlide>
                        ))}
                    </Splide>
                    <div className="inline absolute right-0 bottom-0 text-base lg:text-lg lg:pr-14 lg:mt-7">
                        <FaLongArrowAltLeft className="inline" />
                        <p className="inline">drag for more</p>
                        <FaLongArrowAltRight className="inline" />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Picks;