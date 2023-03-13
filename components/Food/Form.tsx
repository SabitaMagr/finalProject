import { foodCategoryUrl, FoodMenuUrl } from "@/apis/list.api";
import { asyncGet, asyncPost, asyncPut } from "@/apis/rest.api";
import foodStatusData from "@/data/foodStatus";
import { message } from 'antd'
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
  photo: File[] | any;
  status: string;
  categoryType: string | any;
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
    console.log(value)
    const payload = new FormData();
    payload.append('name', value.name)
    payload.append('photo', value.photo[0])
    payload.append('price', value.price.toString())
    payload.append('categoryType', value.categoryType)
    payload.append('status', value.status)
    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPut(
        FoodMenuUrl.put + editData.id,
        payload
      );
      if (data && !error) {
        message.success('successfully updated food')
        router.push("/food");
      }
    } else {
      //create
      const { data, error } = await asyncPost(FoodMenuUrl.post, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (data && !error) {
        message.success('successfully added food')
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
    <div className="flex flex-col bg-white mx-auto py-5 justify-center  w-[65%] rounded-md h-[100%]">
      <h1 className=" flex justify-center text-2xl font-bold">Food Menu</h1> <br />
      <form
        onSubmit={handleSubmit(saveFoodMenu)}
        action=""
        className="flex-col flex gap-5 px-10"
      >
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-base p-2 w-[30%]">
              Name:
            </label>
            <div className="w-[70%]">
              <input
                placeholder="Enter Item"
                {...register("name", { required: true })}
                className={`outline-none px-2 rounded-sm ${errors?.name ? 'border-red-500' : 'border-gray-400'}  w-full border py-1.5 text-sm`}
                type="text"
              />
              {errors?.name && (
                <small className="w-full text-red-600 flex  right-0 top-0">
                  Food Name is required
                </small>
              )}
            </div>
          </div>

        </div>
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-base p-2 w-[30%]">
              Food Category:
            </label>
            <div className="w-[70%]">
              <select {...register("categoryType", {
                validate: (value) => value != "null",
              })}
                className={`px-2 w-full  bg-inherit outline-none  rounded-sm text-sm  ${errors?.categoryType ? 'border-red-500' : 'border-gray-400'} border py-1.5`}
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
              {errors?.categoryType && (
                <small className="w-full text-red-600 flex  right-0 top-0">
                  Select Food Category
                </small>
              )}
            </div>
          </div>

        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-base p-2 w-[30%]">
              Price:
            </label>
            <div className="w-[70%]">
              <input
                placeholder="Enter Price"
                {...register("price", { required: true })}
                className={`outline-none px-2 w-full rounded-sm text-sm ${errors?.price ? 'border-red-500' : 'border-gray-400'} border py-1.5`}
                type="number"
              />
              {errors?.price && (
                <small className="w-full text-red-600 flex  right-0 top-0">
                  Price is required
                </small>
              )}
            </div>
          </div>

        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-base p-2 w-[30%]">
              Upload photo:
            </label>
            <div className="w-[70%]">
              <input
                {...register("photo", { required: true })}
                className={`outline-none px-2 text-sm rounded-sm w-full ${errors?.photo ? 'border-red-500' : 'border-gray-400'}  border py-1.5`}
                type="file"
              />
              {errors?.photo && (
                <small className="w-full text-red-600 flex  right-0 top-0">
                  Please upload photo
                </small>
              )}
            </div>

          </div>

        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-base p-2 w-[30%]">
              Status:
            </label>
            {/* <input
              {...register("status", { required: true })}
              className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
              type="text"
            /> */}
            <div className="w-[70%]">
              <select {...register("status", {
                validate: (value) => value != "null",
              })}
                className={`px-2 bg-inherit outline-none  text-sm  rounded-sm w-[100%] ${errors?.status ? 'border-red-500' : 'border-gray-400'} border py-1.5`}
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
              {errors?.status && (
                <small className="w-full text-red-600 flex  right-0 top-0">
                  Please select status
                </small>
              )}
            </div>
          </div>

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
