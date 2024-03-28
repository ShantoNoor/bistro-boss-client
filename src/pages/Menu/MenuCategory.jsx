import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-12">
        {items.map((item, idx) => (
          <MenuItem item={item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
