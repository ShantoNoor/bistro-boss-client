import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";

const FoodCards = ({ items, itemsPerPage = 6 }) => {
  const totalCount = items.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paginatedData, setPaginatedData] = useState(
    items.slice(0, itemsPerPage)
  );

  useEffect(() => {
    setPaginatedData(
      items.slice(activeIndex * 6, activeIndex * 6 + itemsPerPage)
    );
  }, [items, setPaginatedData, activeIndex, itemsPerPage]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 mt-12 mb-8">
        {paginatedData.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      <div className="join mb-8 flex justify-center">
        {Array.from(Array(totalPages)).map((_, idx) => {
          return (
            <button
              key={idx}
              className={`join-item btn ${idx === activeIndex && "btn-active"}`}
              onClick={() => setActiveIndex(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default FoodCards;
