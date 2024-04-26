"use client";

import { Holiday } from "@/types/booking";
import SearchResult from "../search-result/search-result.component";
import styles from "./search-results.module.css";
import FiltersComponent from "../filters/filters.component";
import { ChangeEvent, useState } from "react";

export default function SearchResultsComponent({
  holidays,
}: {
  holidays: Holiday[];
}) {
  // locally filter but do not change source. on prod call source for filtered
  const [filteredHolidays, setFilteredHolidays] = useState<Holiday[]>(
    holidays,
  );
  const [filters, setFilters] = useState<string[]>([]);

  // very simple filter. on prod this would be done via api
  const handleFilterHolidays = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters((filters) => {
      if (filters.includes(e.target.value)) {
        return filters.filter((filter) => filter !== e.target.value);
      }

      return [...filters, e.target.value];
    });

    if (e.target.name === "stars") {
      setFilteredHolidays(() =>
        holidays.filter((holiday) =>
          holiday.hotel.content.starRating === e.target.value
        )
      );
    }

    if (e.target.name === "price") {
      setFilteredHolidays(() =>
        holidays.filter(
          (holiday) =>
            holiday.totalPrice < parseInt(e.target.value as string, 10),
        )
      );
    }

    if (e.target.name === "board-basis") {
      setFilteredHolidays(() =>
        holidays.filter(
          (holiday) => holiday.hotel.boardBasis === e.target.value,
        )
      );
    }
  };

  return (
    <section>
      <>
        <div className={styles.metaContainer}>
          <h2 className={styles.resultCount}>
            <span data-testid="filtered-count">{filteredHolidays.length}</span>
            {" "}
            hand picked hotels
          </h2>
        </div>

        <div className={styles.container}>
          <FiltersComponent
            currentFilters={filters}
            onFilter={handleFilterHolidays}
          />

          <div className={styles.resultsList}>
            {filteredHolidays.map((holiday) => (
              <SearchResult
                result={holiday}
                key={holiday.hotel.id} // use this as no id on holiday
              />
            ))}
          </div>
        </div>
      </>
    </section>
  );
}
