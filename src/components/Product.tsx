import { ProductCategory, ProductItem } from "@/types";
import Category from "./Category";
import styles from "./Product.module.scss";
import { useRouter } from "next/router";

type Props = {
  item: ProductItem,
}

const Product = ({
  item
}: Props) => {
  const router = useRouter();
  return (
    <div className={styles.product} onClick={() => router.push(`/products/${item.id}`)}>
      <div className={styles.productImage} >
        <img src={item.image_url} alt={`${item.name}-image`} />
        <div className={styles.productDesc}>
          <p className={styles.productDescTitle}>
            {item?.name}
          </p>
          <div className={styles.productDescInfo}>
            <p className={styles.productDescInfoText}>
              ${item?.price}
            </p>
            <div className={styles.productDescEngagement}>
              <p className={styles.productDescInfoText}>
                <span className="material-symbols-outlined">
                  thumb_up
                </span>
                {item?.likes ?? 0}
              </p>
              <p className={styles.productDescInfoText}>
                <span className="material-symbols-outlined">
                  shopping_cart
                </span>
                {item?.sold_number ?? 0}
              </p>
            </div>
          </div>
          <div className={styles.productDescCategories}>
            {
              item?.categories.map(el => (
                <Category category={el} key={`${item.id}-${el}`} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;