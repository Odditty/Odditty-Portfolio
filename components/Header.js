import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/components/Header.module.scss";

function Header() {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/">
          <a>
            <Image
              src="/images/odditty-logo1.png"
              alt="odditty-img"
              aria-details="odditty-logo"
              height={60}
              width={150}
              objectFit="cover"
            />
          </a>
        </Link>
        <ul className={styles.nav__links}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <button
          className={styles.theme__toggle__btn}
          onClick={handleThemeToggle}
        >
          {theme !== "light" ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}

export default Header;
