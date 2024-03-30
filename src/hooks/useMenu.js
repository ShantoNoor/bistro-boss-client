import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const offered = menu?.filter((item) => item.category === "offered");
  const drink = menu?.filter((item) => item.category === "drinks");

  return {
    menu,
    loading,
    refetch,
    salad,
    soup,
    pizza,
    dessert,
    offered,
    drink,
  };
};

export default useMenu;
