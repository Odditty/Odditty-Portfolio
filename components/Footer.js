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
            <a>
              <span>Facebook</span>
              <span>
                <Image
                  src="/images/icons/facebook-icon.svg"
                  width={30}
                  height={30}
                  layout="intrinsic"
                  alt="facebook-icon"
                />
              </span>
            </a>
          </Link>
          <Link href="www.google.com">
            <a>
              <span>Instagram</span>
              <span>
                <Image
                  src="/images/icons/instagram-icon.svg"
                  width={30}
                  height={30}
                  layout="intrinsic"
                  alt="instagram-icon"
                />
              </span>
            </a>
          </Link>
          <Link href="www.google.com">
            <a>
              <span>Linkedin</span>
              <span>
                <Image
                  src="/images/icons/linkedin-icon.svg"
                  width={30}
                  height={30}
                  layout="intrinsic"
                  alt="linkedin-icon"
                />
              </span>
            </a>
          </Link>
          <Link href="www.google.com">
            <a>
              <span>Dribble</span>
              <span>
                <Image
                  src="/images/icons/dribble-icon.svg"
                  width={30}
                  height={30}
                  layout="intrinsic"
                  alt="dribble-icon"
                />
              </span>
            </a>
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
