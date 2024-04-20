import { useDispatch } from "react-redux";
import FilterList from "../FilterList/FilterList";
import "./FilterBox.css";
import { filterActions } from "../../../store/filter-store";

interface IFilterList {
  filterHeading: string;
  options: string[];
}
interface IFilterBoxProps {
  location?: string[];
  date?: string[];
}

const FilterBox: React.FC<IFilterBoxProps> = (props) => {
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
      options: props.date
        ? props.date.map((d) => {
            return new Date(d).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
            });
          })
        : [],
    },
    {
      filterHeading: "Location",
      options: props.location ? props.location : [],
    },
  ];
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
