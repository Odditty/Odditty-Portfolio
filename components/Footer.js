import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} `}>
        <div className={styles.odditty__name}>
          <Link href="/">
            <a>Odditty@{new Date().getFullYear()}</a>
          </Link>
        </div>
        <div className={styles.social__links}>
          <Link href="www.google.com">
            <a>Facebook</a>
          </Link>
          <Link href="www.google.com">
            <a>Instagram</a>
          </Link>
          <Link href="www.google.com">
            <a>Linkedin</a>
          </Link>
          <Link href="www.google.com">
            <a>Dribble</a>
          </Link>
        </div>
        <div className={styles.top__scroll__btn}>
          <img
            src="/images/footer-top-img.png"
            alt="odditty-img"
            aria-details="odditty-logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
