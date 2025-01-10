'use client'
import useSWR from "swr";
import Product from "./Product";
import styles from "./Products.module.scss";
import { ProductItem, SortOptionValue } from "@/types";
import { useEffect, useMemo, useState } from "react";

type Props = {
  products: ProductItem[]
}

const fetcher = (url: string) => fetch(url).then(res => {
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
});

const SORT_OPTIONS: { label: string, value: SortOptionValue }[] = [
  {
    label: "Price",
    value: "price"
  },
  {
    label: "Likes",
    value: "likes",
  },
  {
    label: "Sold",
    value: "sold_number"
  }
]

const createUrl = (search: string, sortKey?: SortOptionValue) => {
  if (!search?.length && !sortKey) return null;
  const searchParams = new URLSearchParams();
  if (!!search.length) {
    searchParams.append('q', search);
  }
  if (sortKey) {
    searchParams.append('sort', sortKey);
  }
  return `/api/products?${searchParams.toString()}`
}

const Products = ({
  products
}: Props) => {
  const [search, setSearch] = useState(""); // For immediate input
  const [sortKey, setSortKey] = useState<SortOptionValue>();
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Debounced value

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout on component unmount or when `search` changes
    };
  }, [search]);

  const url = useMemo(() => createUrl(debouncedSearch, sortKey), [debouncedSearch, sortKey])
  const { data, error, isLoading } = useSWR<ProductItem[]>(url, fetcher);

  const displayedData: ProductItem[] = (!!search?.length || !!sortKey) && data ? data : products;
  return (
    <>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.search}
          placeholder="Cari produk ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.sort}>
        <p>Sort by:</p>
        {
          SORT_OPTIONS.map((el) => (
            <button
              className={sortKey === el.value ? styles.active : ""}
              key={`sort-item-${el.value}`}
              onClick={() => setSortKey(prev => prev === el.value ? undefined : el.value)}
            >
              {el.label}
            </button>
          ))
        }
      </div>
      {isLoading && (
        <div className={styles.containerLoading}>
          <p>Loading...</p>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && (
        <div className={styles.container}>
          {
            displayedData.map(el => (
              <Product
                key={`product-${el.id}`}
                item={el}
                highlightKey={sortKey}
              />
            ))
          }
        </div>
      )}
    </>
  )
}

export default Products;