import { Component } from "react";
import axios from "axios";

import styles from "./app.module.scss";

class App extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://ns-shopify.herokuapp.com/api/v1/categories"
      );
      this.setState({ categories: response.data });
    } catch (error) {
      console.log(error.message);
    }

    // axios
    //     .get("https://ns-shopify.herokuapp.com/api/v1/categories")
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
    //? FETCH ASYNC REQUEST
    // const response = fetch("https://ns-shopify.herokuapp.com/api/v1/categories");
    // response
    //     .then((res) => res.json())
    //     .then((result) => {
    //         console.log(result);
    //     });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);

    const sortedCategories = categories.sort((a, b) => a.id - b.id);

    return (
      <div className={styles.app}>
        <header className={styles.app__header}></header>
        <main className={styles.app__main}>
          <ul className={styles.categories}>
            {sortedCategories.map((category) => {
              console.log(category);
              return (
                <li key={category._id} className={styles.category}>
                  <div className={styles.category__wrapper}>
                    <div
                      className={styles.image}
                      style={{ backgroundImage: `url(${category.imageUrl})` }}
                    />
                    <div className={styles.content}>
                      <div className={styles.title}>{category.title}</div>
                      <div className="u-uppercase">shop now</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
