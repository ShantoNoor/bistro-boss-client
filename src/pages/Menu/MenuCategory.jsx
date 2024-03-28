import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 mt-12">
        {items.map((item, idx) => (
          <MenuItem item={item} key={idx} />
        ))}
      </div>
      <Link to={`/order/${title ? title : "salad"}`}>
        <button className="btn btn-outline border-0 border-b-4 block mx-auto mb-12">
          Order Now
        </button>
      </Link>
    </>
  );
};

export default MenuCategory;
