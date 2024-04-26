import { Suspense } from "react";
import SearchResultsComponent from "../components/search-results/search-results.component";
import Loading from "./loading";
import styles from "./page.module.css";
import { BookingResponse } from "@/types/booking";
import getData from "@/utils/getData";
import { DateTime } from "luxon";

export default async function Results({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const results: BookingResponse = await getData(searchParams);

  return (
    <>
      <h1 className={styles.pageTitle}>Search results</h1>

      <Suspense fallback={<Loading />}>
        {results
          ? (
            <>
              <p>
                {DateTime.fromISO(results?.holidays[0].departureDate)
                  .toLocaleString(
                    DateTime.DATE_HUGE,
                  )}
              </p>

              <p>
                Results for {results?.destination?.name}
                {results?.destination?.gateway &&
                  ` via ${results?.destination.gateway}`}.
              </p>

              <SearchResultsComponent holidays={results.holidays} />
            </>
          )
          : <h2>Sorry, no results</h2>}
      </Suspense>
    </>
  );
}
