import { foodCategoryUrl } from "@/apis/list.api";
import { asyncGet } from "@/apis/rest.api";
import AdminMainLayout from "@/layout/AdminMainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../Container";
import Form, { FoodCategory } from "./Form";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/foodCategory",
  },
  {
    title: "Food Category",
    link: "/foodCategory",
  },
  {
    title: "Update",
    link: "/foodCategory",
  },
];
const Update = () => {
  const router = useRouter();
  const [foodCategory, setFoodCategory] = useState<FoodCategory>();

  const fetchFoodCategory = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(foodCategoryUrl.get + "/" + id);
    if (data && !error) {
        fetchFoodCategory();
    }
  };

  useEffect(() => {
    fetchFoodCategory();
  }, [router.isReady]);

  return (
    <AdminMainLayout>
      <Container breadCrumb={breadCrumb}>
        <Form editData={foodCategory} />
      </Container>
    </AdminMainLayout>
  );
};

export default Update;
