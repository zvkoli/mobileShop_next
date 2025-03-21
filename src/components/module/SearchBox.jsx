import { useState, useEffect } from "react";
import styles from "../../../styles/searchbox.module.css";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { Empty } from "antd";
import { useSelector } from "react-redux";

const SearchBox = () => {

  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [isResultsOpen, setIsResultsOpen] = useState(false);

  const apiData = useSelector((state) => state.apiData);
  
  const onChange = (e) => {
    const query = e.target.value;
    setInputValue(query);

    const filter = apiData.filter((index) => {
      return index.title.includes(query);
    });

    setResults(filter);
  };

  const onFocus = () => {
    setIsResultsOpen(true);
    setResults(apiData);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        results.length !== 0 &&
        isResultsOpen &&
        !event.target.closest(`.${styles.container}`)
      ) {
        setIsResultsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isResultsOpen, results]);

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        onChange={onChange}
        placeholder="جستجو"
        type="text"
        value={inputValue}
        onFocus={onFocus}
      />
      <BiSearch className={styles.icon} />
      {isResultsOpen && (
        <ul className={styles.results}>
          {results.length !== 0 ? (
            results.map(({ id, title }) => (
              <li className={styles.result} key={id}>
                <Link href={`/products/${id}`}>
                  <p className={styles.title}>{title}</p>
                </Link>
              </li>
            ))
          ) : (
            <li className={styles.result}>
              <Empty description={false} />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
