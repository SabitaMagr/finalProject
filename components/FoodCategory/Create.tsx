import AdminMainLayout from "@/layout/AdminMainLayout";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../Container";
import Form from "./Form";
import Table from "./Table";
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
    title: "Create",
    link: "/foodCategory/create",
  },
];

const Create = () => {
  return (
    <AdminMainLayout>
    <Container breadCrumb={breadCrumb}>
        <Form/>
    </Container>
</AdminMainLayout>
  );
};

export default Create;
