import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar'

const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const Search: React.FC = () => {
    const [searchedRecipes, setSearchedRecipes] = useState<Recipe[]>([]);
    const router = useRouter();
    const { search } = router.query;

    const getSearched = async (query: string | string[]) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=20`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };

    useEffect(() => {
        if (typeof search === 'string') {
            getSearched(search);
        }
    }, [search]);

    return (
        <div className='bg-white text-black px-6 overflow-hidden pb-12 min-h-screen w-screen ' >
        <Navbar />
        <div className='mt-28 font-josefin md:mx-8'>
            <div className='text-2xl font-bold'>Recipe results for &quot;{search}&quot;</div>
            <div className='mt-10 grid grid-cols-unusual gap-12 w-screen'>
                {searchedRecipes && searchedRecipes.length > 0 ? 
                    (searchedRecipes.map((item) => (
                        <div key={item.id} className="">
                            <Link href={`/recipe/${item.id}`}>
                                <div className='flex flex-col justify-center items-center '>
                                    <Image className='rounded-2xl' width={500} height={500} src={item.image} alt={item.title} />
                                    <h4 className='font-bold'>{item.title}</h4>
                                </div>
                                
                            </Link>
                        </div>
                    ))) : 
                <div className='text-2xl font-bold self-center items-center'>No results found</div>
            }

                
            </div>
        </div>
        </div>
    );
};

export default Search;
