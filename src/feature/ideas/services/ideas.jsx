import { createAxiosInstance } from "../../api/AxiosInstance";

const axiosInstance = createAxiosInstance();

const getAllIdeas = async ({ number, size, sort, append }) => {
  try {
    const result = await axiosInstance
      .get("/ideas", {
        params: {
          "page[number]": number || 1,
          "page[size]": size || 10,
          append: append || "small_image",
          sort: sort || "published_at",
        },
      })
      .then((result) => {
        return result;
      })
      .catch((result) => {
        return result;
      });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getAllIdeas };
