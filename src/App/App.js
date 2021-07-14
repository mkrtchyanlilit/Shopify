import { useState, useEffect } from "react";
import axios from "axios";
// COMPONENTS
import CategoryItem from "../components/category-item/CategoryItem.component";
// STYLES
import styles from "./app.module.scss";

import Header from "../layout/header/Header.layout";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, []);

  const sortedCategories = categories.sort((a, b) => a.id - b.id);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <ul className={styles.categories}>
          {sortedCategories.map((category) => {
            return <CategoryItem key={category._id} category={category} />;
          })}
        </ul>
      </main>
    </div>
  );
};

export default App;
