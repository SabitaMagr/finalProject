import { FoodMenuUrl } from "@/apis/list.api";
import { asyncDelete, asyncGet } from "@/apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FoodMenu } from "./Form";
import { MdAutoDelete } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa"

const Table = () => {
  const [FoodList, setFoodList] = useState<FoodMenu[]>([]);
  const [filteredFoodMenuflist, setFilteredFoodList] = useState<FoodMenu[]>(
    []
  );

  const fetchFoodMenu = async () => {
    const { data, error } = await asyncGet(FoodMenuUrl.get);
    if (data && !error) {
      setFoodList(data?.data as FoodMenu[]);
      setFilteredFoodList(data?.data as FoodMenu[]);
    }
  };
  const deleteFoodMenu = async (id: number) => {
    const value = window.prompt("are you want to delete");
    if (value == "yes") {
      const { data, error } = await asyncDelete(FoodMenuUrl.delete + id);
      if (data && !error) {
        // fetchFoodMenu();
        setFoodList((c) => c.filter((f) => f.id != id));
        setFilteredFoodList((c) => c.filter((f) => f.id != id));
      }
    }
  };

  // const callback=(a:any)=>{x
  //  return a.filter(filterCallback)
  // }
  // const filterCallback=(f:any)=>{
  // return  f.id!=id
  // }

  const filterSearch = (e: any) => {
    const value = e.target.value;
    if (value) {
      setFilteredFoodList(
        FoodList.filter(
          (f) =>
            f.name?.toString().includes(value) ||
            f.price?.toString().includes(value)
        )
      );
    } else {
      setFilteredFoodList(FoodList);
    }
  };

  useEffect(() => {
    fetchFoodMenu();
  }, []);

  return (
    <div>
      <div className="flex justify-between my-3 mt-4">
        <div>
          <input
            type="text"
            onChange={filterSearch}
            className="border border-gray-400 rounded-md outline-none p-1.5"
          />
        </div>
        <Link href={"/food/create"}>
          <span className="bg-purple-500 text-white hover:bg-purple-800 rounded-md px-3 py-2">
            Add Food Category
          </span>
        </Link>
      </div>
      <div className="bg-white p-2">
        {/* {JSON.stringify(FoodList)} */}
        <table className="w-full mt-3">
          <thead className=" text-white bg-purple-600  ">
            <tr className="">
              <th className="p-3">SN</th>
              <th className="p-3">Food Name</th>
              <th className="p-3">Food Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Photo</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>

            </tr>
          </thead>
          <tbody className="">
            {filteredFoodMenuflist?.length > 0 ? (
              filteredFoodMenuflist?.map((data, i) => {
                return (
                  <tr key={i} className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data?.name}</td>
                    <td className="p-3">{data?.categoryType?.categoryName}</td>
                    <td className="p-3">{data?.price}</td>
                    <td className="p-3">
                      <img src={`http://localhost:5000/food/${data?.photo}`} height={50} width={50} alt="" />
                    </td>
                    <td className="p-3">{data?.status}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/food/${data.id}`}>
                        <span className="outline-none   px-2 py-0.5 rounded-md text-sm  text-green-600 ">
                          <FaEdit size={25} />
                        </span>
                      </Link>
                      <button
                        onClick={() => deleteFoodMenu(data.id)}
                        className="outline-none px-2 py-0.5 rounded-md text-sm text-red-600 "
                      >
                        <FaTrash size={23} />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-3">
                  no data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
