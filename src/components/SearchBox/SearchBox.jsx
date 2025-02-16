import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  return (
    <>
      <label className={css.search} htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Contact Hunt..."
        className={css.serchHunt}
      />
    </>
  );
};

export default SearchBox;
