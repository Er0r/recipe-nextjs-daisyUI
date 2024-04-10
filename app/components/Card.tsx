import React from "react";

interface CardProps {
  imageUrl: string | undefined;
  title: string;
  description: string;
}

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="w-full p-2">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-48 md:h-64">
          <img
            src={imageUrl ? imageUrl : "https://via.placeholder.com/300" }
            alt={title}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-3">{description}</p>
          <button className="btn btn-outline btn-accent">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;