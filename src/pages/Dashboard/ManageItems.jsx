import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageItems = ({ itemsPerPage = 5 }) => {
  const { menu, refetch } = useMenu();
  const axiosSecure = useAxiosSecure();

  const totalCount = menu?.length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paginatedData, setPaginatedData] = useState(
    menu.slice(
      activeIndex * itemsPerPage,
      activeIndex * itemsPerPage + itemsPerPage
    )
  );

  useEffect(() => {
    setPaginatedData(
      menu.slice(
        activeIndex * itemsPerPage,
        activeIndex * itemsPerPage + itemsPerPage
      )
    );
  }, [activeIndex, totalCount]);

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res)
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry up"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={item._id}>
                  <td>{activeIndex * itemsPerPage + index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-lg bg-orange-500">
                        <FaEdit
                          className="text-white 
                                        "
                        ></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="join mb-8 mt-4 flex justify-center">
            {Array.from(Array(totalPages)).map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={`join-item btn ${
                    idx === activeIndex && "btn-active"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
