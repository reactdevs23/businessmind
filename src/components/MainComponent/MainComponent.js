import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  fontFamily,
  name,
  link,
  title,
  info,
  img,
  subtitle,

  bookmarkIcon,
  background,
  id,
  totalData,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <section
      className={styles.wrapper}
      style={{
        fontFamily: fontFamily,
        "--background": background,
        "--primaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
      }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.name}>{name}</h3>

          <div className={styles.idContainer}>#{id}</div>
        </div>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        {info && <p className={styles.info}>{info}</p>}{" "}
        {img && <img src={img} alt="#" className={styles.img} />}
        {subtitle && (
          <div className={styles.bookmarkContainer}>
            <h3
              className={styles.subtitle}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></h3>
            <img src={bookmarkIcon} alt="#" className={styles.bookmarkIcon} />
          </div>
        )}
        {totalData !== id && (
          <button className={styles.button}>
            Swip{" "}
            <div className={styles.arrowContainer}>
              {" "}
              <span className={styles.arrow}>
                <i className="fa-solid fa-play"></i>
              </span>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default MainComponent;
