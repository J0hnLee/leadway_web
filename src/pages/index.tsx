import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "@docsearch/css";
import { TypeAnimation } from "react-type-animation";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <TypeAnimation
          className="hero__title"
          sequence={["Leadway", 2000, "因為理解", 2000, "所以維繫", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle ">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            你的醫療領路人🚶
          </Link>
          {/* <DocSearch
      appId={process.env.ALGOLIA_APPID}
      indexName={process.env.ALGOLIA_INDEXNAME}
      apiKey={process.env.ALGOLIA_APIKEY}
    /> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
