import Image from "next/image";
import Link from "next/link";
import HeadTag from "../components/HeadTag";
import ProjectSingle from "../components/ProjectSingle";
import styles from "../styles/Home.module.scss";
import ClientLists from "../utils/clientList";
import ProjectList from "../utils/projectList";

export default function Home() {
  return (
    <main>
      <HeadTag />
      <div className="container">
        <section className={styles.hero__section}>
          <div className={styles.left__illus}>
            <div className={styles.illus__image}>
              <Image
                src="/images/hero-img.png"
                alt="heroimg-illustration"
                objectFit="contain"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className={styles.cta__detail}>
            <h1>
              Building digital <br /> product brands & <br />{" "}
              <span>experience.</span>
            </h1>
            <p>A future digital product studio.</p>
            <Link href="/">
              <a className={styles.cta__btn}>Get Started</a>
            </Link>
          </div>
        </section>

        <section className={styles.about__section}>
          <span className={styles.anim__ball}></span>
          <p>
            We represent <span>Creativity!</span>
            <br />
            Pretty straightforward, right?
            <br />
            But what does that really mean?
          </p>
        </section>

        <section className={styles.project__section}>
          <h2>
            Our <span>Projects</span>
          </h2>
          <div className={styles.projects__wrapper}>
            {ProjectList.map((project, i) => (
              <ProjectSingle
                key={i}
                imgSrc={project.img}
                title={project.title}
                type={project.type}
                link={project.link}
              />
            ))}
          </div>
          <Link href="/projects">
            <a className={styles.more__project_cta}>More Works</a>
          </Link>
        </section>

        <section className={styles.client__section}>
          <h2>
            <span>Our</span> Clients.
          </h2>
          <div className={styles.clients__logo__wrapper}>
            {ClientLists.map((client, i) => (
              <span key={i}>
                <Image
                  src={client.img}
                  alt={client.title}
                  height={100}
                  width={150}
                  objectFit="cover"
                />
              </span>
            ))}
          </div>
        </section>

        <section className={styles.about__us__section}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            assumenda tenetur, debitis in iusto qui nihil non velit dignissimos
            reiciendis. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
          <Link href="/">
            <a>I dont&apos;t need to know</a>
          </Link>
        </section>

        <section className={styles.home__footer__section}>
          <h3>
            <span>Let&apos;s</span> talk
          </h3>
          <a href="mailto:info@odditty.in">info@odditty.in</a>
        </section>
      </div>
    </main>
  );
}
