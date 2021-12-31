import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ products: productsData }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Planet Shirt Shop</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <aside className={styles.aside}>
          <h1 className={styles.title}>Welcome to The Planet Shirt Shop</h1>
          <p className={styles.description}>
            The best planet shirts on the interwebs.
          </p>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Choose from a wide array of planets &rarr;</h2>
              <p>Nine to be exact!</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Choose Best fit for you</h2>
              <p>XXL is sold out though.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Try the planet look</h2>
              <p>Very Powerful with the power of cosmos</p>
            </a>
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Black & White Variants</h2>
              <p>Come to dark side.</p>
            </a>
          </div>
        </aside>
        <main className={styles.main}>
          {productsData.map(({ name }) => (
            <Image
              src={`/planets/${name}.svg`}
              key={name}
              alt="planet 1"
              height="250"
              width="250"
            ></Image>
          ))}
          <a href="/products" className={styles.morecard}>
            <h3>More planets </h3>
          </a>
        </main>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>Stripe</span>
        </a>
      </footer>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await (
    await fetch(`${process.env.HOST_URL}/api/products`)
  ).json();
  console.log(data);
  return { props: data };
}
