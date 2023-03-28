import axios from "axios";

const Api = axios.create({
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? sessionStorage.getItem("token") : ""
    }`,
  },
  baseURL: "http://localhost:5000/api",
});
const asyncGet = async (api: string, option?: any) => {
  try {
    const response = await Api.get(api, option); //get axois instance
    return { data: response.data }; //return data from instance
  } catch (e: any) {
    return {
      error: e?.response?.data ? e?.response.data : e?.response, // for error handeling
    };
  }
};

const asyncPost = async (api: string, payload: any, option?: any) => {
  try {
    const response = await Api.post(api, payload, option); //get axois instance
    return { data: response.data }; //return data from instance
  } catch (e: any) {
    return {
      error: e?.response?.data ? e?.response.data : e?.response, // for error handeling
    };
  }
};
const asyncPut = async (api: string, payload: any, option?: any) => {
  try {
    const response = await Api.put(api, payload, option); //get axois instance
    return { data: response.data }; //return data from instance
  } catch (e: any) {
    return {
      error: e?.response?.data ? e?.response.data : e?.response, // for error handeling
    };
  }
};
const asyncPatch = async (api: string, payload: any, option?: any) => {
  try {
    const response = await Api.patch(api, payload, option); //get axois instance
    return { data: response.data }; //return data from instance
  } catch (e: any) {
    return {
      error: e?.response?.data ? e?.response.data : e?.response, // for error handeling
    };
  }
};
const asyncDelete = async (api: string) => {
  try {
    const response = await Api.delete(api); //get axois instance
    return { data: response.data }; //return data from instance
  } catch (e: any) {
    return {
      error: e?.response?.data ? e?.response.data : e?.response, // for error handeling
    };
  }
};

export { asyncGet, asyncDelete, asyncPost, asyncPut, asyncPatch };
