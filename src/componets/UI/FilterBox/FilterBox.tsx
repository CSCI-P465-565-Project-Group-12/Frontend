import { useDispatch } from "react-redux";
import FilterList from "../FilterList/FilterList";
import "./FilterBox.css";
import { filterActions } from "../../../store/filter-store";

interface IFilterList {
  filterHeading: string;
  options: string[];
}
const filters: IFilterList[] = [
  {
    filterHeading: "Category",
    options: [
      "Sports",
      "Music",
      "Art",
      "Food",
      "Tech",
      "Business",
      "Education",
    ],
  },
  {
    filterHeading: "Date",
    options: ["Today", "This Week", "This Month", "This Year"],
  },
  {
    filterHeading: "Location",
    options: ["Bloomington", "Indianapolis", "Chicago", "Columbus"],
  },
];

const FilterBox: React.FC = () => {
  const dispatch = useDispatch();
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      dispatch(filterActions.setSearch(""));
    }
    dispatch(filterActions.setSearch(event.target.value));
  };
  return (
    <div className="filter-box">
      <h2>Filter</h2>
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        onChange={searchHandler}
      />
      {filters.map((filter) => {
        return (
          <FilterList
            filterHeading={filter.filterHeading}
            options={filter.options}
          />
        );
      })}
      <button
        className="reset-filter-button"
        style={{
          marginTop: "20px",
        }}
        onClick={() => {
          dispatch(filterActions.resetFilters());
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};
export default FilterBox;
