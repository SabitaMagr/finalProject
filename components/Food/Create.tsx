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
    link: "/food",
  },
  {
    title: "Food Menu",
    link: "/food",
  },
  {
    title: "Create",
    link: "/food/create",
  },
];

const Create = () => {
  return (
    <Container breadCrumb={breadCrumb}>
      <Form />
    </Container>
  );
};

export default Create;
