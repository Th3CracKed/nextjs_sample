import HEAD from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HEAD>
        <title>Nwab List | Home</title>
        <meta name="keywords" content="nwabs" />
      </HEAD>
      <div>
        <h1 className={styles.title}> HomePage </h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem veniam ab illo ratione architecto minima magni cumque voluptatibus temporibus. Provident, voluptatem recusandae. Sed soluta, fugit in maxime iste temporibus.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorem veniam ab illo ratione architecto minima magni cumque voluptatibus temporibus. Provident, voluptatem recusandae. Sed soluta, fugit in maxime iste temporibus.</p>
        <Link href="/nwabs">
          <a className={styles.btn}>See Nwabs Listings</a>
        </Link>
      </div>
    </>
  )
}
