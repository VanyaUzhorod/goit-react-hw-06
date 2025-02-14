import css from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <>
      <label className={css.search} htmlFor="search"></label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Contact Hunt..."
        className={css.serchHunt}
      />
    </>
  );
};

export default SearchBox;
