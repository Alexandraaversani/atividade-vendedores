"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { productsData } from "../data/product.js";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <main className={styles.main}>
      <h2>Total de produtos: {productCount}</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}


