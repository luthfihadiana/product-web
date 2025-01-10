import styles from "@/styles/EmptyData.module.scss";

const EmptyData = () => (
  <div className={styles.empty}>
    <span className="material-symbols-outlined">
      database
    </span>
    Tidak ada data
  </div>
)

export default EmptyData;