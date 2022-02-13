import styles from "../styles/About.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutPerson from "../components/About-Person";
import AboutMembers from "../utils/aboutMembers";
import HeadTag from "../components/HeadTag";

function About() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          cssEase: "linear",
          pauseOnFocus: true,
          pauseOnHover: true,
          draggable: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          cssEase: "linear",
          pauseOnFocus: true,
          pauseOnHover: true,
          draggable: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 4000,
          cssEase: "linear",
          pauseOnFocus: true,
          pauseOnHover: true,
          draggable: true,
        },
      },
    ],
  };

  return (
    <main>
      <HeadTag title="About" />
      <div className={`${styles.about__page__main__container}  about__page`}>
        <section className={styles.hero__section}>
          <h1>
            Who Are <span>We?</span>{" "}
          </h1>
          <p>We provide quality digital products according to your needs.</p>
        </section>
        <section className={styles.about__persons__carousel}>
          <div className={styles.about__slider__container}>
            <Slider {...settings}>
              {AboutMembers.map((member) => (
                <div key={member.id}>
                  <AboutPerson
                    name={member.name}
                    title={member.title}
                    img={member.image}
                    instagram={member.instagram}
                    linkedin={member.linkedin}
                    website={member.website}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
