import { userUrl } from "@/apis/list.api";
import { asyncGet } from "@/apis/rest.api";
import Update from "@/components/FoodCategory/Update";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const update = () => {
  return <Update />;
};

export default update;
