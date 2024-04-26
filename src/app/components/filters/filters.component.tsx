import { ChangeEvent } from "react";
import styles from "./filters.module.css";

// usually filters would come from api
const filters = [
  {
    heading: "Stars",
    values: ["5", "4", "3", "2", "1"],
    id: "stars",
  },
  {
    heading: "Price",
    values: ["1000", "2000", "3000", "4000", "5000"],
    id: "price",
  },
  {
    heading: "Hotel Facilities",
    values: [
      "Bar",
      "Free Parking",
      "Laundry Service",
      "Whirlpool",
    ],
    id: "hotel-facilities",
  },
];

type FitlersComponentProps = {
  currentFilters: string[];
  onFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

// very simple filter componont, won't show when selected
export default function FiltersComponent(
  { currentFilters, onFilter }: FitlersComponentProps,
) {
  // mobile would not show like this. show in pop up
  return (
    <section>
      <p className={styles.heading}>Filter by...</p>

      <div className={styles.filtersContainer}>
        {filters.map((filter) => (
          <fieldset key={filter.id} data-testid="filter-fieldset">
            <legend className={styles.filterHeading}>{filter.heading}</legend>
            {filter.values.map((value) => (
              <div
                key={value}
                className={styles.filterItem}
                data-testid="filter"
              >
                <input
                  type="checkbox"
                  id={value}
                  value={value}
                  name={filter.id}
                  className={styles.checkbox}
                  onChange={onFilter}
                  checked={currentFilters.includes(value)}
                />
                <label htmlFor={value}>{value}</label>
              </div>
            ))}
          </fieldset>
        ))}
      </div>
    </section>
  );
}
