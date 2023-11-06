import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-48 md:h-64">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;