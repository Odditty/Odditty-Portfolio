import Link from "next/link";
import styles from "../styles/components/ProjectSingle.module.scss";

function ProjectSingle({ imgSrc, title, type, link }) {
  return (
    <Link href={link}>
      <a className={styles.single__project__link}>
        <article
          className={styles.single__project__bg}
          style={{ background: `url(${imgSrc})` }}
        >
          <div className={styles.project__detail}>
            <span>{title}</span>
            <span>{type}</span>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ProjectSingle;
