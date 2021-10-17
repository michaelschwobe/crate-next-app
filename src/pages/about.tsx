import Link from 'next/link';

import styles from '../styles/Home.module.css';

// -----------------------------------------------------------------------------

function About(): JSX.Element {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>About Page</h1>
        <p className={styles.description}>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default About;
