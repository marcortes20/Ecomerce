import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/Products/useGetProducts";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export default function Products() {
  const { filteredProducts, loading } = useGetProduts();

  return (
    <>
      {loading ? (
        <div>
          <div className=" w-full flex items-center justify-center">
            <Link to="/new">
              <button className=" mt-[20px] mx-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400  w-[100px]">
                Add
              </button>
            </Link>
          </div>
          <section className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-5 mt-5 place-items-center">
            {filteredProducts?.map((productResult: productType) => (
              <SingleProduct
                key={productResult.id}
                product={productResult}
              ></SingleProduct>
            ))}
          </section>
          <Pagination></Pagination>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
