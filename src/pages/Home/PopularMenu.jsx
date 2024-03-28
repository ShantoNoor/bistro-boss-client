import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const { menu, loading } = useMenu();

  return (
    <section className="mb-12">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-4">
        {loading ? (
          <span className="loading loading-bars h-40 w-40 mx-auto block"></span>
        ) : (
          menu
            .filter((item) => item.category === "popular")
            .map((item, idx) => <MenuItem item={item} key={idx} />)
        )}
      </div>
    </section>
  );
};

export default PopularMenu;
