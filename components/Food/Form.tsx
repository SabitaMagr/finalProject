import { foodCategoryUrl, FoodMenuUrl } from "@/apis/list.api";
import { asyncGet, asyncPost, asyncPut } from "@/apis/rest.api";
import foodStatusData from "@/data/foodStatus";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FoodCategory } from "../FoodCategory/Form";

interface FormProps {
  editData?: FoodMenu;
}
export interface FoodMenu {
  id: number;
  name: string;
  price: number;
  photo: string;
  status: string;
  categoryType: string;
}


const Form = ({ editData }: FormProps) => {
  const [foodCategoryList, setfoodCategory] = useState<FoodCategory[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FoodMenu>();
  const router = useRouter();
  //function that is call after submit
  const saveFoodMenu = async (value: FoodMenu) => {
    //api call
    const payload = {
      ...value,
    };


    const form = new FormData();
    form.append('name', value.name)
    form.append('photo', value.photo)
    form.append('price', value.price)
    form.append('status',value.status)
    form.append('categoryType',value.categoryType)

    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPut(
        FoodMenuUrl.put + editData.id,
        payload
      );
      if (data && !error) {
        alert("update success");
        router.push("/food");
      }
    } else {
      //create
      // const { data, error } = await asyncPost(FoodMenuUrl.post, payload);
      const { data, error } = await asyncPost(FoodMenuUrl.post, form);
      if (data && !error) {
        alert("saved success");
        router.push("/food");
      }
    }
  };

  const fetchFoodCategoryList = async () => {
    const { data, error } = await asyncGet(foodCategoryUrl.get);
    if (data && !error) {
      setfoodCategory(data?.data as FoodCategory[]);
    }
  }

  useEffect(() => {
    fetchFoodCategoryList();
  }, []);


  useEffect(() => {
    if (editData) {
      setValue("name", editData?.name);
      setValue("price", editData?.price);
      setValue("photo", editData?.photo);
      setValue("status", editData?.status);
      setValue("categoryType", editData?.categoryType);
      setValue("id", editData?.id);
    }
  }, [editData]);
  return (
    <div className="flex flex-col bg-white mx-auto py-5 justify-center  w-[60%] h-[100%]">
      <h1 className=" flex justify-center text-2xl font-bold">Food Menu</h1> <br />
      <form
        onSubmit={handleSubmit(saveFoodMenu)}
        action=""
        className="flex-col flex gap-6"
      >
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-lg p-2 w-[30%]">
              Name:
            </label>
            <input
              placeholder="Enter Item"
              {...register("name", { required: true })}
              className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
              type="text"
            />
          </div>
          {errors?.name && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Food Name is required
            </small>
          )}
        </div>
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-lg p-2 w-[30%]">
              Food Category:
            </label>
            <select {...register("categoryType", {
              validate: (value) => value != "null",
            })}
              className="px-2 bg-inherit outline-none  rounded-md w-[30%] border-gray-400 border py-1.5"
            >
              <option value="null">Select</option>
              {
                foodCategoryList?.length > 0 ? (
                  foodCategoryList?.map((data, i) => {
                    return (
                      <option key={i} value={data.id}>{data.categoryName}</option>
                    )
                  })
                ) : ""
              }
            </select>
          </div>
          {errors?.categoryType && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Select Food Category
            </small>
          )}
        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-lg p-2 w-[30%]">
              Price:
            </label>
            <input
              placeholder="Enter Price"
              {...register("price", { required: true })}
              className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
              type="number"
            />
          </div>
          {errors?.price && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Price is required
            </small>
          )}
        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-lg p-2 w-[30%]">
              Upload photo:
            </label>
            <input
              {...register("photo", { required: true })}
              className="outline-none px-2 rounded-md w-[30%] border-gray-400 border py-1.5"
              type="file"
            />
          </div>
          {errors?.photo && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Please upload photo
            </small>
          )}
        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-lg p-2 w-[30%]">
              Status:
            </label>
            {/* <input
              {...register("status", { required: true })}
              className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
              type="text"
            /> */}
            <select {...register("status", {
              validate: (value) => value != "null",
            })}
              className="px-2 bg-inherit outline-none  rounded-md w-[30%] border-gray-400 border py-1.5"
            >
              <option value="null">Select</option>
              {foodStatusData.map((data, i) => {
                return (
                  <>
                    <option key={i} value={data?.value}>{data?.status}</option>
                  </>)
              })

              }

            </select>
          </div>
          {errors?.status && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Please select status
            </small>
          )}
        </div>
        <div className="flex justify-center pt-5">
          <button
            type="submit"
            className="bg-purple-700  text-white px-8 py-2 rounded-md"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form >
    </div >
  );
};

export default Form;
