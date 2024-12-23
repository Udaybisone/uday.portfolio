import React from "react";
import { SiLeetcode } from "react-icons/si";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Uday</h1>
        <p className={styles.description}>
        I'm a MERN stack developer ready to create impactful web applications—let's connect!
        </p>
        
        <div className={styles.logos}>

          <a href="https://leetcode.com/u/udaybisone/" target="_blank">
            <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode"/>
          </a>

          <a href="https://codeforces.com/profile/Udaybisone" target="_blank">
            <img src={getImageUrl("contact/codeforces.png")} alt="codeforces" />
          </a>

          <a href="https://www.codechef.com/users/uday_bisone" target="_blank">
            <img src={getImageUrl("contact/codechef.png")} alt="codechef" />
          </a>

          <a href="https://www.geeksforgeeks.org/user/udaybisq14i/" target="_blank">
            <img src={getImageUrl("contact/gfg.png")} alt="geeksforgeeks" />
          </a>
        </div>

        <a href="./Uday_CV.pdf" download="uday.resume" className={styles.contactBtn}>
          Explore My Potential
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
