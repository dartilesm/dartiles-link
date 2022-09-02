import { Avatar, Container, Image, StyledAvatar, StyledImage, Text } from "@nextui-org/react";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
import LinkList from "../components/link/LinkList";
import { useI18N } from "../context/i18n";
import styles from "../styles/Home.module.css";

function Home({ links, origin }) {
  const { t } = useI18N()

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Diego Artiles - ${t('PAGE_TITLE')}`}</title>
        <meta name="title" content={`Diego Artiles - ${t('PAGE_TITLE')}`} />
        <meta name="description" content={t('PAGE_DESCRIPTION')} />
        <link rel='icon' href="https://dartiles.link/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dartiles.link" />
        <meta property="og:title" content={`Diego Artiles - ${t('PAGE_TITLE')}`} />
        <meta property="og:description" content={t('PAGE_DESCRIPTION')} />
        <meta property="og:image" content="https://dartiles.link/cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dartiles.link" />
        <meta property="twitter:title" content={`Diego Artiles - ${t('PAGE_TITLE')}`} />
        <meta property="twitter:description" content={t('PAGE_DESCRIPTION')} />
        <meta property="twitter:image" content="https://dartiles.link/cover.png" />
      </Head>

      <main className={styles.main}>
        <Container
          css={{
            position: "relative",
            margin: "2rem 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt='diego face'
            src='/me.png'
            bordered
            css={{
              margin: "$0",
              height: 200,
              width: 200,
              [`& img`]: {
                background: "$bodyBackground !important",
              },
            }}
          />
          <StyledImage
            alt='dartiles logo'
            src='/logo.png'
            css={{
              position: "absolute",
              margin: "$0",
              height: 40,
              width: 40,
              zIndex: 100,
              bottom: "-15px",
              padding: 10,
              background: "$white",
              borderRadius: "50%",
              border: "2px solid $accents2",
            }}
          />
        </Container>
        <Text h2 css={{ margin: "$10 $0" }}>
          {t('PAGE_TITLE')}
        </Text>
        <LinkList links={links} />
      </main>
    </div>
  );
}
export async function getServerSideProps({ req }) {
  const { origin } = absoluteUrl(req);
  const res = await fetch(`${origin}/api/links`);
  const data = await res.json();

  return { props: { links: data, origin } };
}

export default Home;
