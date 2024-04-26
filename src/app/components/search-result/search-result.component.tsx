import { Holiday } from "@/types/booking";
import styles from "./search-result.module.css";
import Image from "next/image";
import Link from "next/link";

type SearchResultProps = {
  result: Holiday;
};

export default function SearchResultComponent({ result }: SearchResultProps) {
  return (
    <div className={styles.container} data-testid="holiday-card">
      <div className={styles.imageContainer}>
        <Image
          src={`https:${result.hotel.content.images[0].RESULTS_CAROUSEL.url}`}
          fill
          alt={result.hotel.name}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className={styles.infoContainer}>
        <p className={styles.hotelName}>
          {result.hotel.name}
        </p>
        <p className={styles.hotelLocation}>
          {result.hotel.content.parentLocation}
        </p>

        <p>{result.hotel.boardBasis}</p>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.pricePPContainer}>
          <span className={styles.pricePP}>£{result.pricePerPerson}</span>pp
        </p>
        <p className={styles.totalPrice}>
          Total for 2 guests £{result.totalPrice}
        </p>
        <Link href="/" className={styles.viewDetailsLink}>
          View details
        </Link>
        <p>
          Earn from <span className={styles.points}>{result.virginPoints}</span>
          {" "}
          extra Virgin Points and{" "}
          <span className={styles.points}>{result.tierPoints}</span> tier points
        </p>
      </div>
    </div>
  );
}
