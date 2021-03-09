import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import pagesStyles from '../styles/pages.module.css';

export default function Home({}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={pagesStyles.header}>
        <div className={pagesStyles.logo}>
          <a href="/">
            <img src="/images/logo.svg" alt="The Oblique Lens Logo"></img>
          </a>
        </div>
        <div className={`${pagesStyles.links} text-xl flex items-center`}>
          <a className={`${pagesStyles.link} mr-6`} href="/about">
            About
          </a>
          <a className={pagesStyles.link} href="/work">
            Work
          </a>
        </div>
      </div>
      <div className={`${pagesStyles.photo} ${pagesStyles.animated}`}>
        <img src="/images/banner.png" alt="Banner"></img>
      </div>

      <div className={`flex justify-between items-center mt-24`}>
        <div className={`max-w-sm`}>
          <h2 className={`text-4xl font-bold mb-4`}>Wisaal</h2>
          <div className={`text-lg mb-12`}>
            Capturing the essence of soap bubble or soap film's moving colors by
            creating realtime video footage of the actual volatility and
            movement taking place within the soap bubble.
          </div>
          <button className={pagesStyles.button}>
            View{' '}
            <img
              src="/images/rarrow.svg"
              width="16"
              className={pagesStyles.icon}
            />
          </button>
        </div>

        <div>
          <img src="/images/placeholder.png" />
        </div>
      </div>

      <div className={`flex justify-between items-center mt-24`}>
        <div>
          <img src="/images/placeholder.png" />
        </div>
        <div className={`max-w-sm`}>
          <h2 className={`text-4xl font-bold mb-4`}>Heavenly Scapes</h2>
          <div className={`text-lg mb-12`}>
            Photographic abstracts created by apturing oil droplets with an
            ultra macro lens.
          </div>
          <button className={pagesStyles.button}>
            View{' '}
            <img
              src="/images/rarrow.svg"
              width="16"
              className={pagesStyles.icon}
            />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
