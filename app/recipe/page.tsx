import React from 'react'
import FoodJSON from "../objects/recipe.card.json";
import Card from '../components/Card';
import Link from 'next/link';

const Recipe = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
      {FoodJSON.map((food, index) => (
        <div key={index} className={`flex flex-col items-center order-${food.id + 1}`}>
          <Link href={`/food/${food.id}`}>

          <Card
            imageUrl={food.url}
            title={food.name}
            description={food.short_description}
          />
          
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Recipe