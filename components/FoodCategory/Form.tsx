import { foodCategoryUrl } from "@/apis/list.api";
import { asyncPatch, asyncPost, asyncPut } from "@/apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  editData?: FoodCategory;
}
export interface FoodCategory {
  id: number;
  categoryCode: string;
  categoryName: string;
}
const Form = ({ editData }: FormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FoodCategory>();
  const router = useRouter();
  //function that is call after submit
  const savefoodCategory = async (value: FoodCategory) => {
    //api call
    const payload = {
      ...value,
    };

    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPatch(
        foodCategoryUrl.put + editData.id,
        payload
      );
      if (data && !error) {
        alert("update success");
        router.push("/foodCategory");
      }
    } else {
      //create
      const { data, error } = await asyncPost(foodCategoryUrl.post, payload);
      if (data && !error) {
        alert("saved success");
        router.push("/foodCategory");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("categoryCode", editData?.categoryCode);
      setValue("categoryName", editData?.categoryName);
      setValue("id", editData?.id);
    }
  }, [editData]);
  return (
    <div className="flex flex-col bg-white mx-auto mt-8 pb-8 justify-center  w-[60%] h-[100%] border rounded-md border-slate-200 shadow-xl">
      <h1 className=" flex justify-center text-xl bg-[#078df7] p-4 font-bold">Food Category</h1> <br />
      {/* {JSON.stringify(editData)} */}
      <form
        onSubmit={handleSubmit(savefoodCategory)}
        action=""
        className="flex-col flex gap-5 px-10"
      >
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-base p-2 w-[30%]">
              Category Code:
            </label>
            <div className="w-[50%]">
              <input
                placeholder="Enter Category Code"
                {...register("categoryCode", { required: true })}
                className="outline-none px-2   border-gray-400 border py-1 w-full   text-sm"
                type="text"
              />
              {errors?.categoryCode && (
                <small className="w-full text-red-600 flex  mt-2 right-0 top-0">
                  Category Code is required
                </small>
              )}
            </div>
          </div>

        </div>
        <div className=" relative items-center">
          <div className="flex justify-center gap-2">
            <label htmlFor="" className="text-base p-2 w-[30%]">
              Category Name:
            </label>
            <div className="w-[50%]">
              <input
                placeholder="Enter Category Name"
                {...register("categoryName", { required: true })}
                className="outline-none px-2 text-sm  border-gray-400 border w-full py-1.5"
                type="text"
              />
              {errors?.categoryName && (
                <small className=" text-red-600 flex mt-2 right-0 top-0">
                  Category Name is required
                </small>
              )}
            </div>
          </div>

        </div>
        <div className="flex justify-center pt-3">
          <button
            type="submit"
            className="bg-[#2497f5] hover:bg-[#0585ee] text-white px-10 py-2 rounded-md"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
