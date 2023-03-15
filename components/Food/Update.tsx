import { FoodMenuUrl } from "@/apis/list.api";
import { asyncGet } from "@/apis/rest.api";
import AdminMainLayout from "@/layout/AdminMainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "../Container";
import Form, { FoodMenu } from "./Form";

const breadCrumb: { title: string; link: string }[] = [
  {
    title: "Home",
    link: "/food",
  },
  {
    title: "Food Menu",
    link: "/food",
  },
  {
    title: "Update",
    link: "/food",
  },
];
const Update = () => {
  const router = useRouter();
  const [foodList, setFoodList] = useState<FoodMenu>();

  const fetchFoodMenu = async () => {
    const id = router.query.id; //id from url
    const { data, error } = await asyncGet(FoodMenuUrl.get + "/" + id);
    if (data && !error) {
      setFoodList(data?.data);
    }
  };

  useEffect(() => {
    fetchFoodMenu();
  }, [router.isReady]);

  return (
    <AdminMainLayout>
      <Container breadCrumb={breadCrumb}>
        <Form editData={foodList} />
      </Container>
    </AdminMainLayout>
  );
};

export default Update;
