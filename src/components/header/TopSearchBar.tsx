import { BsSearch } from "react-icons/bs";
export default function TopSearchBar() {
  return (
    <div>
      <div className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="search-icon">
          <BsSearch />
        </label>
      </div>
    </div>
  );
}
