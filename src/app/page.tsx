import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Skeleton from "@/components/Skeleton"
import Slider from "@/components/Slider"
import ListProducts from "./list/page"
import { Suspense, useContext , useEffect } from "react"

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-10">Lista de productos</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categorías de productos
        </h1>
        <Suspense fallback={<Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-10">Nuevos productos</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList />
        </Suspense>
      </div>
      <ListProducts />
    </div>
  );
}

export default HomePage