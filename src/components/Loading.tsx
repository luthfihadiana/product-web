import styles from "@/styles/Loading.module.scss";

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.loadingSpinner} />
  </div>
);

export default Loading;