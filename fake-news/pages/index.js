import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FakeNewsDetection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.con}>
          <h1 className={styles.title}>
            Welcome to Fake News Detection System !
          </h1>

          <p className={styles.description}>
            Lets gets started by knowing facts ...
          </p>
        </div>
        <br />
        <br />

        <div className={styles.main_container}>
          <div className={styles.main1}>
            <a href="https://timesofindia.indiatimes.com/">
              <h2>Times of India &rarr;</h2>
              <p>
                <a href="https://timesofindia.indiatimes.com/">
                  Read this online edition of newspaper and keep yourself
                  updated.
                </a>
              </p>
            </a>
          </div>
          <div className={styles.main1}>
            <a href="https://www.bbc.com/news">
              <h2>BBC News &rarr;</h2>
              <p>
                <a href="https://www.bbc.com/news">
                  Read this online edition of newspaper and keep yourself
                  updated.
                </a>
              </p>
            </a>
          </div>
          <div className={styles.main1}>
            <a href="https://edition.cnn.com/">
              <h2>CCN News &rarr;</h2>
              <p>
                <a href="https://edition.cnn.com/">
                  Read this online edition of newspaper and keep yourself
                  updated.
                </a>
              </p>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__about}>
            <h4 className={styles.h2__footer}>&#160;&#160;Address</h4>
            <ul>
              <li>Street 141 ,Navi Mumbai,</li>
              <li>Koparkhairane,</li>
              <li>Mumbai,</li>
              <li>Maharashtra , India.</li>
            </ul>
          </div>

          <div className={styles.footer__about}>
            <h4 className={styles.h2__footer}>Services</h4>
            <ul>
              <li>News</li>
              <li>helpcenter</li>
              <li>blog</li>
              <li>About</li>
            </ul>
          </div>

          <div className={styles.footer__about}>
            <h4 className={styles.h2__footer}>Report improvements</h4>
            <ul>
              <li>Bugs</li>
              <li>mail us</li>
              <li>Report</li>
              <li>more</li>
            </ul>
          </div>

          <div className={styles.footer__about}>
            <h4 className={styles.h2__footer}>Social media</h4>
            <ul>
              <li>facebook</li>
              <li>twitter</li>
              <li>instagram</li>
              <li>mail</li>
            </ul>
          </div>
        </div>

        <div className={styles.footer__rights}>
          &#169; 2022 &#160;&#160; FakeNewsDetectionSystem inc
          &#160;&#160;|&#160;&#160; All rights are reserved.&#160;&#160; |
          &#160;&#160;Terms and Privacy.
        </div>
      </footer>
    </div>
  );
}
