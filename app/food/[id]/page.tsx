"use client";
import React from "react";
import FoodJSON from "../../objects/recipe.card.json";
import FoodCard from "../../components/FoodCard";

interface params {
  id: number;
}

const Food = ({ params }: any) => {
  // iterate through the FoodJSON array and find the object with the matching id
  const food = FoodJSON.find((food) => food.id === parseInt(params.id));

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-3/4 lg:w-1/2">
        {food ? (
          <FoodCard
            image={food.url}
            name={food.name}
            process={food.process}
            tips={food.tips}
            tags={food.tags}
          />
        ) : (
          <div>Food not found</div>
        )}
      </div>
    </div>
  );
};

export default Food;
