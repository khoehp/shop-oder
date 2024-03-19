import instance from "./axios";

const URL = "/products";

export const getProducts = async ({ param }) => {
  try {
    const products = instance.get(`${URL}/search?${param}`);

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const products = instance.get(`${URL}/${id}`);

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const categories = instance.get(`${URL}/categories`);

    return categories;
  } catch (error) {
    console.log(error);
  }
};


export const getProductsOfCategory = async (category) => {
  try {
    const products = instance.get(`${URL}/category/${category}`);

    return products;
  } catch (error) {
    console.log(error);
  }
};