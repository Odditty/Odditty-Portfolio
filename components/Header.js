import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "../styles/components/Header.module.scss";
import { useRouter } from "next/router";

function Header() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [isNavScroll, setNavScroll] = useState(false);
  let router = useRouter();

  let navLinkRef = useRef(null);
  let navLinksRef = useRef(null);

  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleHamToggle = () => {
    if (isOpen) {
      gsap.to(navLinkRef, {
        duration: 0.5,
        y: 0,
        stagger: {
          amount: 0.07,
        },
        ease: "power3.inOut",
      });
      gsap.to(navLinksRef.children, {
        duration: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
        ease: "power3.inOut",
      });
    } else {
      gsap.to(navLinkRef, {
        duration: 0.5,
        y: "-100%",
        stagger: {
          amount: 0.07,
        },
        ease: "power3.inOut",
      });
      gsap.to(navLinksRef.children, {
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 0.7,
        },
        ease: "power3.inOut",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(navLinkRef, {
        duration: 0.5,
        y: 0,
        stagger: {
          amount: 0.07,
        },
        ease: "power3.inOut",
      });
      gsap.to(navLinksRef.children, {
        duration: 1,
        opacity: 1,
        stagger: {
          amount: 0.5,
        },
        ease: "power3.inOut",
      });
    } else {
      gsap.to(navLinkRef, {
        duration: 0.5,
        y: "-100%",
        stagger: {
          amount: 0.07,
        },
        ease: "power3.inOut",
      });
      gsap.to(navLinksRef.children, {
        duration: 1,
        opacity: 0,
        stagger: {
          amount: 0.7,
        },
        ease: "power3.inOut",
      });
    }

    // console.log(navLinksRef.children);
  }, [isOpen]);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    isOpen ? setIsOpen(false) : null;
    //handleHamToggle();
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  //console.log(isOpen, router.pathname);

  return (
    <header className={styles.header}>
      <div className={`${styles.nav__desktop__container} container`}>
        <Link href="/">
          <a className={styles.nav__logo}>
            <Image
              src="/images/odditty-logo1.png"
              alt="odditty-img"
              aria-details="odditty-logo"
              height={60}
              width={150}
              objectFit="cover"
              priority={true}
            />
          </a>
        </Link>
        <ul className={styles.nav__links}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Project</Link>
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
          <svg
            width="139"
            height="139"
            viewBox="0 0 139 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {theme !== "light" ? (
              <>
                <path
                  d="M69 105C88.8823 105 105 88.8823 105 69C105 49.1177 88.8823 33 69 33C49.1177 33 33 49.1177 33 69C33 88.8823 49.1177 105 69 105Z"
                  fill="#FF7B00"
                />
                <path
                  d="M74.7097 23.8504V15.7097C74.7097 12.5574 72.1541 10 69 10C65.8459 10 63.2903 12.5575 63.2903 15.7097V23.8504C63.2903 27.0027 65.8459 29.5601 69 29.5601C72.1541 29.5601 74.7097 27.0027 74.7097 23.8504ZM41.1133 41.1096C43.3418 38.8792 43.3418 35.2624 41.1114 33.0357L35.3553 27.2814C33.1249 25.0511 29.5099 25.0511 27.2796 27.2814C25.0511 29.5118 25.0511 33.1286 27.2814 35.3553L33.0376 41.1096C34.1527 42.2247 35.6136 42.7823 37.0745 42.7823C38.5354 42.7823 39.9981 42.2247 41.1133 41.1096ZM15.7097 74.7097H23.8486C27.0026 74.7097 29.5582 72.1522 29.5582 69C29.5582 65.8478 27.0026 63.2903 23.8486 63.2903H15.7097C12.5556 63.2903 10 65.8478 10 69C10 72.1522 12.5556 74.7097 15.7097 74.7097ZM27.2796 110.719C28.3948 111.834 29.8575 112.391 31.3184 112.391C32.7793 112.391 34.2401 111.834 35.3553 110.719L41.1115 104.964C43.3418 102.738 43.3418 99.1208 41.1133 96.8904C38.883 94.6601 35.268 94.6601 33.0376 96.8904L27.2815 102.645C25.0511 104.871 25.0511 108.488 27.2796 110.719ZM63.2903 114.15V122.29C63.2903 125.443 65.8459 128 69 128C72.1541 128 74.7097 125.443 74.7097 122.29V114.15C74.7097 110.997 72.1541 108.44 69 108.44C65.8459 108.44 63.2903 110.997 63.2903 114.15ZM102.645 110.719C103.76 111.834 105.221 112.391 106.682 112.391C108.143 112.391 109.603 111.834 110.719 110.719C112.949 108.488 112.949 104.875 110.719 102.645L104.964 96.8904C102.734 94.6601 99.1208 94.6601 96.8905 96.8904C94.6602 99.1208 94.6601 102.734 96.8905 104.964L102.645 110.719ZM122.29 63.2903H114.15C110.997 63.2903 108.44 65.8478 108.44 69C108.44 72.1522 110.997 74.7097 114.15 74.7097H122.29C125.443 74.7097 128 72.1522 128 69C128 65.8478 125.443 63.2903 122.29 63.2903ZM110.719 27.2814C108.488 25.0511 104.875 25.0511 102.645 27.2814L96.8904 33.0357C94.6601 35.2661 94.6601 38.8792 96.8904 41.1096C98.0056 42.2247 99.4665 42.7823 100.927 42.7823C102.388 42.7823 103.849 42.2247 104.964 41.1096L110.719 35.3553C112.949 33.125 112.949 29.5118 110.719 27.2814Z"
                  fill="#FF7B00"
                />
              </>
            ) : (
              <>
                <path
                  d="M48.732 86.9951C57.264 87.1114 65.4975 83.8576 71.6446 77.9401C77.7918 72.0227 81.3562 63.9195 81.564 55.39C81.5624 51.2048 80.7131 47.0633 79.0673 43.2152C77.4215 39.3671 75.0133 35.8922 71.988 33C80.9567 33.8855 89.2837 38.0475 95.3748 44.6893C101.466 51.331 104.893 59.9859 105 68.9967C104.783 78.7386 100.713 87.9972 93.6815 94.7443C86.6504 101.491 77.2314 105.177 67.488 104.993C60.2322 105.057 53.1135 103.017 46.9929 99.1198C40.8723 95.2229 36.0121 89.6362 33 83.0355C37.8401 85.625 43.2427 86.9848 48.732 86.9951Z"
                  fill="#2C2C2C"
                  stroke="#2C2C2C"
                />
                <path
                  d="M74.7097 23.8504V15.7097C74.7097 0 72.1541 10 69 10C65.8459 10 0 12.5575 0 15.7097V23.8504C63.2903 27.0027 65.8459 29.5601 69 29.5601C72.1541 29.5601 74.7097 27.0027 74.7097 23.8504ZM41.1133 0 38.8792 43.3418 35.2624 41.1114 33.0357L35.3553 27.2814C33.1249 25.0511 29.5099 25.0511 27.2796 27.2814C25.0511 29.5118 25.0511 33.1286 27.2814 35.3553L33.0376 41.1096C34.1527 0 35.6136 42.7823 37.0745 42.7823C38.5354 42.7823 39.9981 42.2247 41.1133 41.1096ZM15.7097 74.7097H23.8486C27.0026 74.7097 29.5582 72.1522 29.5582 69C29.5582 65.8478 27.0026 63.2903 23.8486 63.2903H15.7097C12.5556 63.2903 10 65.8478 10 69C10 72.1522 12.5556 74.7097 15.7097 74.7097ZM27.2796 110.719C28.3948 111.834 29.8575 112.391 31.3184 112.391C32.7793 112.391 34.2401 111.834 35.3553 110.719L41.1115 104.964C43.3418 102.738 43.3418 99.1208 41.1133 96.8904C38.883 94.6601 35.268 94.6601 33.0376 96.8904L27.2815 102.645C25.0511 104.871 25.0511 108.488 27.2796 110.719ZM63.2903 114.15V122.29C63.2903 125.443 65.8459 128 69 128C72.1541 128 74.7097 125.443 74.7097 122.29V114.15C74.7097 110.997 72.1541 108.44 69 108.44C65.8459 108.44 63.2903 110.997 63.2903 114.15ZM102.645 110.719C103.76 111.834 105.221 112.391 106.682 112.391C108.143 112.391 109.603 111.834 110.719 110.719C112.949 108.488 112.949 104.875 110.719 102.645L104.964 96.8904C102.734 94.6601 99.1208 94.6601 96.8905 96.8904C94.6602 99.1208 94.6601 102.734 96.8905 104.964L102.645 110.719ZM122.29 63.2903H114.15C110.997 63.2903 108.44 65.8478 108.44 69C108.44 72.1522 110.997 74.7097 114.15 74.7097H122.29C125.443 74.7097 128 72.1522 128 69C128 65.8478 125.443 63.2903 122.29 63.2903ZM110.719 27.2814C108.488 25.0511 104.875 25.0511 102.645 27.2814L96.8904 33.0357C94.6601 35.2661 94.6601 38.8792 96.8904 41.1096C98.0056 42.2247 99.4665 42.7823 100.927 42.7823C102.388 42.7823 103.849 42.2247 104.964 41.1096L110.719 35.3553C112.949 33.125 112.949 29.5118 110.719 27.2814Z"
                  fill="#FF7B0000"
                />
              </>
            )}
          </svg>
        </button>
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.ham__nav__toggle__btn}
        ></button> */}
      </div>
      {/* {console.log(isNavScroll)} */}
      <div
        className={`${styles.nav__mobile__container} container ${
          isNavScroll ? styles.nav__scroll__bg : ""
        }`}
      >
        <div className={styles.nav__mob__logo}>
          <Link href="/">
            <a className={styles.nav__logo}>
              <Image
                src="/images/odditty-logo1.png"
                alt="odditty-img"
                aria-details="odditty-logo"
                height={60}
                width={150}
                objectFit="cover"
                priority={true}
              />
            </a>
          </Link>
        </div>
        <div
          ref={(el) => (navLinkRef = el)}
          className={styles.nav__mobile__links}
        >
          <ul ref={(el) => (navLinksRef = el)}>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Project</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.nav__mob__btns}>
          <button
            className={styles.theme__toggle__btn}
            onClick={handleThemeToggle}
          >
            <svg
              width="139"
              height="139"
              viewBox="0 0 139 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {theme !== "light" ? (
                <>
                  <path
                    d="M69 105C88.8823 105 105 88.8823 105 69C105 49.1177 88.8823 33 69 33C49.1177 33 33 49.1177 33 69C33 88.8823 49.1177 105 69 105Z"
                    fill="#FF7B00"
                  />
                  <path
                    d="M74.7097 23.8504V15.7097C74.7097 12.5574 72.1541 10 69 10C65.8459 10 63.2903 12.5575 63.2903 15.7097V23.8504C63.2903 27.0027 65.8459 29.5601 69 29.5601C72.1541 29.5601 74.7097 27.0027 74.7097 23.8504ZM41.1133 41.1096C43.3418 38.8792 43.3418 35.2624 41.1114 33.0357L35.3553 27.2814C33.1249 25.0511 29.5099 25.0511 27.2796 27.2814C25.0511 29.5118 25.0511 33.1286 27.2814 35.3553L33.0376 41.1096C34.1527 42.2247 35.6136 42.7823 37.0745 42.7823C38.5354 42.7823 39.9981 42.2247 41.1133 41.1096ZM15.7097 74.7097H23.8486C27.0026 74.7097 29.5582 72.1522 29.5582 69C29.5582 65.8478 27.0026 63.2903 23.8486 63.2903H15.7097C12.5556 63.2903 10 65.8478 10 69C10 72.1522 12.5556 74.7097 15.7097 74.7097ZM27.2796 110.719C28.3948 111.834 29.8575 112.391 31.3184 112.391C32.7793 112.391 34.2401 111.834 35.3553 110.719L41.1115 104.964C43.3418 102.738 43.3418 99.1208 41.1133 96.8904C38.883 94.6601 35.268 94.6601 33.0376 96.8904L27.2815 102.645C25.0511 104.871 25.0511 108.488 27.2796 110.719ZM63.2903 114.15V122.29C63.2903 125.443 65.8459 128 69 128C72.1541 128 74.7097 125.443 74.7097 122.29V114.15C74.7097 110.997 72.1541 108.44 69 108.44C65.8459 108.44 63.2903 110.997 63.2903 114.15ZM102.645 110.719C103.76 111.834 105.221 112.391 106.682 112.391C108.143 112.391 109.603 111.834 110.719 110.719C112.949 108.488 112.949 104.875 110.719 102.645L104.964 96.8904C102.734 94.6601 99.1208 94.6601 96.8905 96.8904C94.6602 99.1208 94.6601 102.734 96.8905 104.964L102.645 110.719ZM122.29 63.2903H114.15C110.997 63.2903 108.44 65.8478 108.44 69C108.44 72.1522 110.997 74.7097 114.15 74.7097H122.29C125.443 74.7097 128 72.1522 128 69C128 65.8478 125.443 63.2903 122.29 63.2903ZM110.719 27.2814C108.488 25.0511 104.875 25.0511 102.645 27.2814L96.8904 33.0357C94.6601 35.2661 94.6601 38.8792 96.8904 41.1096C98.0056 42.2247 99.4665 42.7823 100.927 42.7823C102.388 42.7823 103.849 42.2247 104.964 41.1096L110.719 35.3553C112.949 33.125 112.949 29.5118 110.719 27.2814Z"
                    fill="#FF7B00"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M48.732 86.9951C57.264 87.1114 65.4975 83.8576 71.6446 77.9401C77.7918 72.0227 81.3562 63.9195 81.564 55.39C81.5624 51.2048 80.7131 47.0633 79.0673 43.2152C77.4215 39.3671 75.0133 35.8922 71.988 33C80.9567 33.8855 89.2837 38.0475 95.3748 44.6893C101.466 51.331 104.893 59.9859 105 68.9967C104.783 78.7386 100.713 87.9972 93.6815 94.7443C86.6504 101.491 77.2314 105.177 67.488 104.993C60.2322 105.057 53.1135 103.017 46.9929 99.1198C40.8723 95.2229 36.0121 89.6362 33 83.0355C37.8401 85.625 43.2427 86.9848 48.732 86.9951Z"
                    fill={isOpen ? "#fff" : "#2C2C2C"}
                    stroke={isOpen ? "#fff" : "#2C2C2C"}
                  />
                  <path
                    d="M74.7097 23.8504V15.7097C74.7097 12.5574 72.1541 10 69 10C65.8459 10 63.2903 12.5575 63.2903 15.7097V23.8504C63.2903 27.0027 65.8459 29.5601 69 29.5601C72.1541 29.5601 74.7097 27.0027 74.7097 23.8504ZM41.1133 41.1096C43.3418 38.8792 43.3418 35.2624 41.1114 33.0357L35.3553 27.2814C33.1249 25.0511 29.5099 25.0511 27.2796 27.2814C25.0511 29.5118 25.0511 33.1286 27.2814 35.3553L33.0376 41.1096C34.1527 42.2247 35.6136 42.7823 37.0745 42.7823C38.5354 42.7823 39.9981 42.2247 41.1133 41.1096ZM15.7097 74.7097H23.8486C27.0026 74.7097 29.5582 72.1522 29.5582 69C29.5582 65.8478 27.0026 63.2903 23.8486 63.2903H15.7097C12.5556 63.2903 10 65.8478 10 69C10 72.1522 12.5556 74.7097 15.7097 74.7097ZM27.2796 110.719C28.3948 111.834 29.8575 112.391 31.3184 112.391C32.7793 112.391 34.2401 111.834 35.3553 110.719L41.1115 104.964C43.3418 102.738 43.3418 99.1208 41.1133 96.8904C38.883 94.6601 35.268 94.6601 33.0376 96.8904L27.2815 102.645C25.0511 104.871 25.0511 108.488 27.2796 110.719ZM63.2903 114.15V122.29C63.2903 125.443 65.8459 128 69 128C72.1541 128 74.7097 125.443 74.7097 122.29V114.15C74.7097 110.997 72.1541 108.44 69 108.44C65.8459 108.44 63.2903 110.997 63.2903 114.15ZM102.645 110.719C103.76 111.834 105.221 112.391 106.682 112.391C108.143 112.391 109.603 111.834 110.719 110.719C112.949 108.488 112.949 104.875 110.719 102.645L104.964 96.8904C102.734 94.6601 99.1208 94.6601 96.8905 96.8904C94.6602 99.1208 94.6601 102.734 96.8905 104.964L102.645 110.719ZM122.29 63.2903H114.15C110.997 63.2903 108.44 65.8478 108.44 69C108.44 72.1522 110.997 74.7097 114.15 74.7097H122.29C125.443 74.7097 128 72.1522 128 69C128 65.8478 125.443 63.2903 122.29 63.2903ZM110.719 27.2814C108.488 25.0511 104.875 25.0511 102.645 27.2814L96.8904 33.0357C94.6601 35.2661 94.6601 38.8792 96.8904 41.1096C98.0056 42.2247 99.4665 42.7823 100.927 42.7823C102.388 42.7823 103.849 42.2247 104.964 41.1096L110.719 35.3553C112.949 33.125 112.949 29.5118 110.719 27.2814Z"
                    fill="#FF7B0000"
                  />
                </>
              )}
            </svg>
            {/* {theme !== "light" ? (
              <svg
                width="139"
                height="139"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69 105C88.8823 105 105 88.8823 105 69C105 49.1177 88.8823 33 69 33C49.1177 33 33 49.1177 33 69C33 88.8823 49.1177 105 69 105Z"
                  fill="#FF7B00"
                />
                <path
                  d="M74.7097 23.8504V15.7097C74.7097 12.5574 72.1541 10 69 10C65.8459 10 63.2903 12.5575 63.2903 15.7097V23.8504C63.2903 27.0027 65.8459 29.5601 69 29.5601C72.1541 29.5601 74.7097 27.0027 74.7097 23.8504ZM41.1133 41.1096C43.3418 38.8792 43.3418 35.2624 41.1114 33.0357L35.3553 27.2814C33.1249 25.0511 29.5099 25.0511 27.2796 27.2814C25.0511 29.5118 25.0511 33.1286 27.2814 35.3553L33.0376 41.1096C34.1527 42.2247 35.6136 42.7823 37.0745 42.7823C38.5354 42.7823 39.9981 42.2247 41.1133 41.1096ZM15.7097 74.7097H23.8486C27.0026 74.7097 29.5582 72.1522 29.5582 69C29.5582 65.8478 27.0026 63.2903 23.8486 63.2903H15.7097C12.5556 63.2903 10 65.8478 10 69C10 72.1522 12.5556 74.7097 15.7097 74.7097ZM27.2796 110.719C28.3948 111.834 29.8575 112.391 31.3184 112.391C32.7793 112.391 34.2401 111.834 35.3553 110.719L41.1115 104.964C43.3418 102.738 43.3418 99.1208 41.1133 96.8904C38.883 94.6601 35.268 94.6601 33.0376 96.8904L27.2815 102.645C25.0511 104.871 25.0511 108.488 27.2796 110.719ZM63.2903 114.15V122.29C63.2903 125.443 65.8459 128 69 128C72.1541 128 74.7097 125.443 74.7097 122.29V114.15C74.7097 110.997 72.1541 108.44 69 108.44C65.8459 108.44 63.2903 110.997 63.2903 114.15ZM102.645 110.719C103.76 111.834 105.221 112.391 106.682 112.391C108.143 112.391 109.603 111.834 110.719 110.719C112.949 108.488 112.949 104.875 110.719 102.645L104.964 96.8904C102.734 94.6601 99.1208 94.6601 96.8905 96.8904C94.6602 99.1208 94.6601 102.734 96.8905 104.964L102.645 110.719ZM122.29 63.2903H114.15C110.997 63.2903 108.44 65.8478 108.44 69C108.44 72.1522 110.997 74.7097 114.15 74.7097H122.29C125.443 74.7097 128 72.1522 128 69C128 65.8478 125.443 63.2903 122.29 63.2903ZM110.719 27.2814C108.488 25.0511 104.875 25.0511 102.645 27.2814L96.8904 33.0357C94.6601 35.2661 94.6601 38.8792 96.8904 41.1096C98.0056 42.2247 99.4665 42.7823 100.927 42.7823C102.388 42.7823 103.849 42.2247 104.964 41.1096L110.719 35.3553C112.949 33.125 112.949 29.5118 110.719 27.2814Z"
                  fill="#FF7B00"
                />
              </svg>
            ) : (
              <svg
                width="139"
                height="139"
                viewBox="0 0 139 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M48.732 86.9951C57.264 87.1114 65.4975 83.8576 71.6446 77.9401C77.7918 72.0227 81.3562 63.9195 81.564 55.39C81.5624 51.2048 80.7131 47.0633 79.0673 43.2152C77.4215 39.3671 75.0133 35.8922 71.988 33C80.9567 33.8855 89.2837 38.0475 95.3748 44.6893C101.466 51.331 104.893 59.9859 105 68.9967C104.783 78.7386 100.713 87.9972 93.6815 94.7443C86.6504 101.491 77.2314 105.177 67.488 104.993C60.2322 105.057 53.1135 103.017 46.9929 99.1198C40.8723 95.2229 36.0121 89.6362 33 83.0355C37.8401 85.625 43.2427 86.9848 48.732 86.9951Z"
                  fill="#2C2C2C"
                  stroke="#2C2C2C"
                />
              </svg>
            )} */}
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              //handleHamToggle();
            }}
            className={
              !isOpen
                ? styles.ham__nav__toggle__btn
                : `${styles.ham__nav__toggle__btn} ${styles.ham__nav__toggle__btn__active}`
            }
          ></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
