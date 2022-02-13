import styles from "../styles/Contact.module.scss";
//import { ReactComponent as ContactIllus } from "../public/images/contact-illustration.svg";
import ContactIllus from "../components/Illustrations";
import HeadTag from "../components/HeadTag";

function Contact() {
  return (
    <main>
      <HeadTag title="Contact Us" />
      <div className={`${styles.contact__page} container`}>
        <div className={styles.contact__hero}>
          <div className={styles.hero__head}>
            <h1>
              Hola ! Tell us about your <span>project.</span>{" "}
            </h1>
          </div>
          <div className={styles.contact__illustration}>
            <ContactIllus />
          </div>
        </div>
        <div className={styles.contact__form}>
          <form action="/" method="post">
            <div className={styles.select__project}>
              <label className={styles.radio__div}>
                <input type="checkbox" name="branding" id="branding" />
                <span>Branding</span>
              </label>
              <label className={styles.radio__div}>
                <input type="checkbox" name="webDsign" id="webDesign" />
                <span>Web Design</span>
              </label>
              <label className={styles.radio__div}>
                <input
                  type="checkbox"
                  name="designConcept"
                  id="designConcept"
                />
                <span>Design Concept</span>
              </label>
              <label className={styles.radio__div}>
                <input type="checkbox" name="webSites" id="webSites" />
                <span>Web Sites</span>
              </label>
              <label className={styles.radio__div}>
                <input type="checkbox" name="webApps" id="webApps" />
                <span>Web Apps</span>
              </label>
              <label className={styles.radio__div}>
                <input type="checkbox" name="logoDesign" id="logoDesign" />
                <span>Logo Design</span>
              </label>
            </div>
            <div className={styles.user__detailForm}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                type="text"
                name="description"
                placeholder="Tell us about your project"
              />
            </div>

            {/* <div className={styles.attachment}>
              <input type="file" name="attachment" />
              <PaperClipIllus />
              <span>Add Attatchment</span>
            </div> */}

            <button className={styles.send__form__btn} type="submit">
              <span>Send it!</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
