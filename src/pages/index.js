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
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
