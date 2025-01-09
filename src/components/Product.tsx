import { ProductCategory } from "@/types";
import Category from "./Category";
import styles from "./Product.module.scss";
const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.productImage} >
        <img src="https://dummyimage.com/200x200/000/fff&text=Product+1" />
        <div className={styles.productDesc}>
          <p className={styles.productDescTitle}>Product 1 jdajdsiajdiajdsoij</p>
          <p className={styles.productDescPrice}>$32</p>
          <div className={styles.productDescCategories}>
            <Category category={ProductCategory.HealthBeauty} />
            <Category category={ProductCategory.HealthBeauty} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;