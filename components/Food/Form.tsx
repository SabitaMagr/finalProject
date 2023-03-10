import { FoodMenuUrl } from "@/apis/list.api";
import { asyncPost, asyncPut } from "@/apis/rest.api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface FormProps {
  editData?: FoodMenu;
}
export interface FoodMenu {
  id: number;
  name: string;
  price: string;
  photo: string;
}
const Form = ({ editData }: FormProps) => {
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

    if (editData && editData?.id) {
      //update
      const { data, error } = await asyncPut(
        FoodMenuUrl.put + editData.id,
        payload
      );
      if (data && !error) {
        alert("update success");
        router.push("/FoodMenu");
      }
    } else {
      //create
      const { data, error } = await asyncPost(FoodMenuUrl.post, payload);
      if (data && !error) {
        alert("saved success");
        router.push("/FoodMenu");
      }
    }
  };

  useEffect(() => {
    if (editData) {
      setValue("name", editData?.name);
      setValue("price", editData?.price);
      setValue("photo", editData?.photo);
      setValue("id", editData?.id);
    }
  }, [editData]);
  return (
    <div className="flex flex-col bg-white mx-auto p-16 justify-center  w-[60%] h-[100%]">
      <h1 className=" flex justify-center text-2xl pb-5 font-bold">Food Menu</h1> <br />
      <form
        onSubmit={handleSubmit(saveFoodMenu)}
        action=""
        className="flex-col flex gap-10"
      >
        <div className=" relative items-center">
          <div className="flex  justify-center gap-2">
            <label htmlFor="" className=" text-lg p-2 w-[30%]">
              Item:
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
              Item Name is required
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
              type="text"
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
              //   placeholder="Enter Price"
              {...register("photo", { required: true })}
              className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
              type="file"
            />
          </div>
          {errors?.price && (
            <small className="w-full text-red-600 flex justify-center right-0 top-0">
              Please upload photo
            </small>
          )}
        </div>
        <div className="flex justify-center pt-8">
          <button
            type="submit"
            className="bg-purple-700  text-white px-8 py-2 rounded-md"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
