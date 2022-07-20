import { useState, useEffect } from "react";
import { ProductList } from "../components/ProductList";
import { Search } from "../components/Search";

export default function Home() {
  // TODO: Implement search component
  // TODO: Implement product list component
  const [products, setProducts] = useState([]);

  const fetchApi = (searchTerm = null) => {
    fetch(
      `https://dummyjson.com/products?limit=10&skip=0&search?q=${searchTerm}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(products);

  useEffect(() => {
    fetchApi();
  }, []);

  // const onSearch = (searchTerm) => {
  //   fetchApi(searchTerm)
  // }

  return (
    <>
      <Search
        onSearch={(searchTerm) => {
          fetchApi(searchTerm);
        }}
      />
      <ProductList products={products} />
    </>
  );
}
