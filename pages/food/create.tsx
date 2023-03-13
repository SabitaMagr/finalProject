import Create from "@/components/Food/Create";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const create = () => {
  return <Create />;
};

export default create;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  return {
    props: {
      type: 'admin'
    }
  }
}