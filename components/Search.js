import styles from "./Search.module.css";
import { useState } from "react";

export function Search({ onSearch }) {
  const [userSearch, setUserSearch] = useState({ device: "" });

  const handleDataInput = (event) => {
    setUserSearch((prevUserSearch) => {
      return {
        ...prevUserSearch,
        [event.target.name]: event.target.value,
      };
    });
  };

  console.log({ userSearch });

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        name="device"
        value={userSearch.device}
        onChange={handleDataInput}
      />
      <button
        onClick={() => {
          onSearch(userSearch.name);
        }}
      >
        Search
      </button>
    </div>
  );
}
