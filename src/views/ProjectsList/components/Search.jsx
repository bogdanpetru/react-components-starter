const Search = (props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
      className="search-form"
    >
      <input
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        className="input"
      />
      <button disabled={props?.value?.length < 3} className="button">
        Search
      </button>
    </form>
  );
};

export default Search;
