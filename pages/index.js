import { Avatar, Container, Image, StyledAvatar, StyledImage, Text } from "@nextui-org/react";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
import LinkList from "../components/link/LinkList";
import styles from "../styles/Home.module.css";

function Home({ links, origin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Diego Artiles - Centro de Enlaces</title>
        <meta name="title" content="Diego Artiles - Centro de Enlaces" />
        <meta name="description" content="Todos los enlaces de Diego Artiles en un solo lugar. Redes sociales, portafolio, blog, curriculum, plataformas educativas, mail y más." />
        <link rel='icon' href={`${origin}/favicon.png`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${origin}`} />
        <meta property="og:title" content="Diego Artiles - Centro de Enlaces" />
        <meta property="og:description" content="Redes sociales, portafolio, blog, curriculum, plataformas educativas, mail y más." />
        <meta property="og:image" content={`${origin}/cover.png`} />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${origin}`} />
        <meta property="twitter:title" content="Diego Artiles - Centro de Enlaces" />
        <meta property="twitter:description" content="Redes sociales, portafolio, blog, curriculum, plataformas educativas, mail y más." />
        <meta property="twitter:image" content={`${origin}/cover.png`} />
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
            src='https://dartiles.me/static/media/me.10078b41.png'
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
          Centro de Enlaces
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
