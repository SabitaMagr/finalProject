import { foodCategoryUrl } from "@/apis/list.api";
import { asyncDelete, asyncGet } from "@/apis/rest.api";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FoodCategory } from "./Form";

const Table = () => {
  const [FoodList, setFoodList] = useState<FoodCategory[]>([]);
  const [filteredFoodCategoryflist, setFilteredFoodList] = useState<FoodCategory[]>(
    []
  );

  const fetchFoodCategory = async () => {
    const { data, error } = await asyncGet(foodCategoryUrl.get);
    if (data && !error) {
      setFoodList(data?.data as FoodCategory[]);
      setFilteredFoodList(data?.data as FoodCategory[]);
    }
  };
  const deleteFoodCategory = async (id: number) => {
    const value = window.prompt("are you want to delete");
    if (value == "yes") {
      const { data, error } = await asyncDelete(foodCategoryUrl.delete + id);
      if (data && !error) {
        // fetchFoodCategory();
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
            f.categoryCode?.toString().includes(value) ||
            f.categoryName?.toString().includes(value)
        )
      );
    } else {
      setFilteredFoodList(FoodList);
    }
  };

  useEffect(() => {
    fetchFoodCategory();
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
        <Link href={"/foodCategory/create"}>
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
              <th className="p-3">Category Code</th>
              <th className="p-3">Category Name</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredFoodCategoryflist?.length > 0 ? (
              filteredFoodCategoryflist?.map((data, i) => {
                return (
                  <tr key={i} className="hover:bg-gray-200  p-3 text-center">
                    <td className="p-3 ">{i + 1}</td>
                    <td className="p-3">{data.categoryCode}</td>
                    <td className="p-3">{data.categoryName}</td>
                    <td className="p-3 flex gap-2 justify-center">
                      <Link href={`/foodCategory/${data.id}`}>
                        <button className="outline-none bg-green-600  px-2 py-0.5 rounded-md text-sm  text-white ">
                          edit
                        </button>
                      </Link>
                      <button
                        onClick={() => deleteFoodCategory(data.id)}
                        className="outline-none bg-red-600  px-2 py-0.5 rounded-md text-sm  text-white "
                      >
                        dlt
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
      <div className="flex justify-end gap-2 absolute bottom-0 right-0">
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          1
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          2
        </button>
        <button className="p-1 px-2 border border-gray-700  rounded-md">
          3
        </button>
      </div>
    </div>
  );
};

export default Table;
