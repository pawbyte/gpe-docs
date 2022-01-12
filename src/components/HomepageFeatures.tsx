import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast and Easy',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Powered by the robust C++ language focus on game logic and not battling 
        a scripting language interpreter's speed. 
      </>
    ),
  },
  {
    title: 'Open Source',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Released under the MIT license you can literally download the engine, 
        fork it and only you would know. 
      </>
    ),
  },
  {
    title: 'Cross Platform',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        From the start launch on Windows, Linux, Mac & FreeBSD with 
        Android/iOS & console support on the way.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
