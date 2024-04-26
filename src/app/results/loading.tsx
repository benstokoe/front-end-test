import Image from "next/image";
import styles from "./loading.module.css";
import plane from "@/images/va-787.png";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.plane}
        alt="Virgin Atlantic 787"
        src={plane}
        style={{
          width: "300px",
          height: "auto",
        }}
      />

      <p className={styles.loading}>Loading &hellip;</p>
    </div>
  );
}

