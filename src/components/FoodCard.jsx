const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, category, price } = item;

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl relative">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <span className="absolute top-5 right-5 bg-black text-white opacity-60 p-1 px-2 rounded-sm">
          ${price}
        </span>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
