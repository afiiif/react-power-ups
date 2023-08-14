import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import SocialCard from '../components/social-card';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title}>
      <div className="flex justify-center px-6 md:px-10">
        <SocialCard />
      </div>
      <div className="flex md:justify-center px-6 -mt-6 pb-32">
        <Link to="/docs/overview" className="pagination-nav__link md:text-xl md:px-9">
          Getting Started &nbsp;→
        </Link>
      </div>
    </Layout>
  );
}
