import Head from "next/head";

const HeadTag = ({ title }) => {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#111"
      />
      <title>{title ? `${title} | Odditty` : "Odditty"}</title>
      <meta
        name="description"
        content="✌️ Building digital product brands & experience."
      />
      <meta property="og:title" content="Odditty" key="title" />
      <meta property="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content="✌️ Building digital product brands & experience."
      />
      <meta property="og:site_name" content={`${title} | Odditty`} />
      <meta property="og:url" content="https://odditty.in" />
      <meta
        name="twitter:card"
        content="✌️ Building digital product brands & experience."
      />
      <meta name="twitter:title" content="Odditty" />
      <meta
        name="twitter:description"
        content="✌️ Building digital product brands & experience."
      />
      <meta name="twitter:site" content="Odditty" />
      <meta name="twitter:creator" content="odditty" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta property="og:image" content="/favicon.ico" />
      <meta name="twitter:image" content="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
