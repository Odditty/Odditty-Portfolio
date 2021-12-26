import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/AboutMembers.module.scss";

const AboutMembers = ({ name, title, img, instagram, linkedin, website }) => {
  return (
    <div className={styles.about__members}>
      <div className={styles.about__members__img}>
        <Image
          src={img}
          alt={name}
          responsive={true}
          layout="fill"
          //   height={180}
          //   width={180}
          objectFit="contain"
        />
      </div>
      <div className={styles.about__members__text}>
        <h3>{name}</h3>
        <p>{title}</p>
      </div>

      <div className={styles.about__members__links}>
        {linkedin && (
          <Link href="https://www.facebook.com/sanath.sdsd">
            <a>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.60606 8.00313C6.94981 8.00313 8.03914 6.9138 8.03914 5.57005C8.03914 4.22629 6.94981 3.13696 5.60606 3.13696C4.2623 3.13696 3.17297 4.22629 3.17297 5.57005C3.17297 6.9138 4.2623 8.00313 5.60606 8.00313Z"
                  fill="#2C2C2C"
                />
                <path
                  d="M10.3366 9.84691V23.3456H14.5278V16.6702C14.5278 14.9088 14.8591 13.203 17.0431 13.203C19.1971 13.203 19.2238 15.2168 19.2238 16.7814V23.3467H23.4172V15.9441C23.4172 12.3078 22.6343 9.51331 18.3842 9.51331C16.3437 9.51331 14.9759 10.6331 14.4166 11.6929H14.3598V9.84691H10.3366V9.84691ZM3.50659 9.84691H7.70444V23.3456H3.50659V9.84691Z"
                  fill="#2C2C2C"
                />
              </svg>
            </a>
          </Link>
        )}
        {instagram && (
          <Link href="https://www.facebook.com/sanath.sdsd">
            <a>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.67775 0.185453C8.98214 0.125405 9.39803 0.112061 12.7207 0.112061C16.0434 0.112061 16.4593 0.126517 17.7626 0.185453C19.0659 0.24439 19.9555 0.452337 20.7339 0.753692C21.549 1.06172 22.2885 1.54322 22.9001 2.16595C23.5228 2.77644 24.0032 3.51482 24.3101 4.33104C24.6126 5.10945 24.8194 5.99906 24.8795 7.30011C24.9395 8.60673 24.9529 9.02262 24.9529 12.3442C24.9529 15.6669 24.9384 16.0828 24.8795 17.3872C24.8205 18.6882 24.6126 19.5778 24.3101 20.3563C24.0032 21.1726 23.522 21.9122 22.9001 22.5236C22.2885 23.1463 21.549 23.6267 20.7339 23.9336C19.9555 24.2361 19.0659 24.4429 17.7648 24.503C16.4593 24.563 16.0434 24.5763 12.7207 24.5763C9.39803 24.5763 8.98214 24.5619 7.67775 24.503C6.37669 24.444 5.48708 24.2361 4.70868 23.9336C3.89237 23.6266 3.15277 23.1455 2.54136 22.5236C1.91906 21.9127 1.43748 21.1735 1.13022 20.3574C0.828862 19.579 0.622028 18.6893 0.561979 17.3883C0.501931 16.0817 0.488586 15.6658 0.488586 12.3442C0.488586 9.02151 0.503043 8.60562 0.561979 7.30234C0.620916 5.99906 0.828862 5.10945 1.13022 4.33104C1.43794 3.51491 1.91988 2.77568 2.54247 2.16484C3.15301 1.54267 3.89187 1.0611 4.70756 0.753692C5.48597 0.452337 6.37558 0.245502 7.67664 0.185453H7.67775ZM17.6636 2.38724C16.3737 2.3283 15.9867 2.31607 12.7207 2.31607C9.45475 2.31607 9.06777 2.3283 7.77783 2.38724C6.58464 2.44173 5.93745 2.64078 5.50599 2.80869C4.93553 3.03109 4.52742 3.29464 4.09929 3.72277C3.69346 4.11759 3.38113 4.59823 3.18522 5.12946C3.0173 5.56092 2.81825 6.20812 2.76376 7.40131C2.70483 8.69124 2.6926 9.07822 2.6926 12.3442C2.6926 15.6102 2.70483 15.9972 2.76376 17.2871C2.81825 18.4803 3.0173 19.1275 3.18522 19.5589C3.38093 20.0894 3.69341 20.5709 4.09929 20.9656C4.49406 21.3715 4.97556 21.684 5.50599 21.8797C5.93745 22.0476 6.58464 22.2467 7.77783 22.3012C9.06777 22.3601 9.45363 22.3723 12.7207 22.3723C15.9878 22.3723 16.3737 22.3601 17.6636 22.3012C18.8568 22.2467 19.504 22.0476 19.9355 21.8797C20.5059 21.6573 20.914 21.3938 21.3422 20.9656C21.748 20.5709 22.0605 20.0894 22.2562 19.5589C22.4242 19.1275 22.6232 18.4803 22.6777 17.2871C22.7366 15.9972 22.7489 15.6102 22.7489 12.3442C22.7489 9.07822 22.7366 8.69124 22.6777 7.40131C22.6232 6.20812 22.4242 5.56092 22.2562 5.12946C22.0338 4.559 21.7703 4.15089 21.3422 3.72277C20.9473 3.31696 20.4667 3.00464 19.9355 2.80869C19.504 2.64078 18.8568 2.44173 17.6636 2.38724ZM11.1583 16.115C12.0309 16.4783 13.0025 16.5273 13.9072 16.2537C14.8118 15.9802 15.5935 15.401 16.1186 14.6152C16.6437 13.8294 16.8797 12.8856 16.7863 11.9451C16.6929 11.0046 16.2758 10.1257 15.6064 9.45853C15.1797 9.03205 14.6637 8.70549 14.0955 8.50236C13.5274 8.29924 12.9214 8.2246 12.321 8.28382C11.7205 8.34304 11.1407 8.53464 10.6233 8.84484C10.1058 9.15504 9.66352 9.57612 9.32831 10.0778C8.99311 10.5794 8.77329 11.1491 8.6847 11.7459C8.5961 12.3427 8.64092 12.9517 8.81594 13.5291C8.99096 14.1065 9.29182 14.6379 9.69685 15.085C10.1019 15.5322 10.601 15.8839 11.1583 16.115ZM8.2749 7.89838C8.85874 7.31454 9.55185 6.85142 10.3147 6.53545C11.0775 6.21948 11.8951 6.05685 12.7207 6.05685C13.5464 6.05685 14.364 6.21948 15.1268 6.53545C15.8896 6.85142 16.5827 7.31454 17.1666 7.89838C17.7504 8.48221 18.2135 9.17532 18.5295 9.93814C18.8454 10.701 19.0081 11.5185 19.0081 12.3442C19.0081 13.1699 18.8454 13.9875 18.5295 14.7503C18.2135 15.5131 17.7504 16.2062 17.1666 16.79C15.9874 17.9691 14.3882 18.6316 12.7207 18.6316C11.0532 18.6316 9.45401 17.9691 8.2749 16.79C7.09579 15.6109 6.43338 14.0117 6.43338 12.3442C6.43338 10.6767 7.09579 9.07748 8.2749 7.89838ZM20.4025 6.9932C20.5472 6.85672 20.663 6.6926 20.7431 6.51055C20.8232 6.32851 20.866 6.13224 20.8689 5.93337C20.8718 5.7345 20.8348 5.53707 20.76 5.35277C20.6852 5.16846 20.5742 5.00104 20.4336 4.8604C20.293 4.71976 20.1255 4.60877 19.9412 4.534C19.7569 4.45923 19.5595 4.4222 19.3606 4.4251C19.1618 4.42799 18.9655 4.47077 18.7835 4.55088C18.6014 4.63099 18.4373 4.74681 18.3008 4.89149C18.0354 5.17286 17.8901 5.5466 17.8957 5.93337C17.9013 6.32014 18.0575 6.68948 18.331 6.963C18.6045 7.23651 18.9739 7.39266 19.3606 7.3983C19.7474 7.40394 20.1211 7.25862 20.4025 6.9932Z"
                  fill="#2C2C2C"
                />
              </svg>
            </a>
          </Link>
        )}
        {website && (
          <Link href="https://www.facebook.com/sanath.sdsd">
            <a>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="globe"
                class="svg-inline--fa fa-globe fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                ></path>
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AboutMembers;