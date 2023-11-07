import React from "react";

interface FoodCardProps { 
    image: string;
    name: string;
    process: string[];
    tips: string;
    tags: string[];
}

const FoodCard = ({image, name, process, tips, tags}: FoodCardProps) => {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          {process.map((step, index) => (
            <div className="p-2" key={index }> 
            <h1 className="font-bold">Step: {index + 1}</h1>
            <p>{step}</p>
            </div>
            
          ))}
          <div className="card-actions justify-end">
            {tags.map((tag) => (
                <div className="badge badge-outline">{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;