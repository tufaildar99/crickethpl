// src/components/News/News.js
import React from "react";
import styles from "./News.module.css";

const News = ({ newsItems }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>News & Highlights</h2>
      <div className={styles.newsList}>
        {newsItems.map((item, index) => (
          <div key={index} className={styles.newsItem}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <a
              href={item.link}
              className={styles.readMore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
