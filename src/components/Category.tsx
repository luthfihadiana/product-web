import { ProductCategory } from "@/types";
import styles from "@/styles/Category.module.scss";

type Props = {
  category: ProductCategory,
}

const CUSTOM_CLASSNAME: Partial<Record<ProductCategory, string>> = {
  [ProductCategory.HealthBeauty]: "HealthBeauty",
  [ProductCategory.HomeAppliances]: "HomeAppliances",
}

const Category = ({ category }: Props) => {
  const className = `${styles.container} ${styles[CUSTOM_CLASSNAME[category] ?? category]}`;

  return (
    <div className={className}>
      {category}
    </div>
  );
}

export default Category;