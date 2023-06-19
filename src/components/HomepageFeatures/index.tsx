import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '專注健康',
    Svg: require('@site/static/img/focus_on_health.svg').default,
    description: (
      <>
        理維的藥師熱衷於追求健康，致力於將最新技術應用於醫療產業，為民眾帶來卓越的醫療體驗。我們提供最新國際知識，專注於健康科技和數位健康，為未來十年帶來更多可能。
      </>
    ),
  },
  {
    title: '維繫醫病，延伸關懷',
    Svg: require('@site/static/img/smile.svg').default,
    description: (
      <>
        醫療人員與患者建立連結，不僅在診所或藥局，還能在家中延續關懷，提供個別化的建議。
      </>
    ),
  },
  {
    title: '醫療賦能',
    Svg: require('@site/static/img/medical_repower.svg').default,
    description: (
      <>
        醫療賦能的目標是透過技術和知識的傳遞，提升醫療人員的能力和專業水準，
        同時鼓勵更多人加入醫療領域，攜手為健康服務做出貢獻。
        透過新興科技和數位化平台，醫療人員可以獲得更全面、即時的資訊，加強診斷和治療的準確性，
        提高醫療效率和品質。此外，這也鼓勵更多人投身於醫療事業，
        透過專業的培訓和創新的機會，培養更多優秀的醫護人才，
        以滿足人們對醫療服務不斷增長的需求。這種醫療賦能的模式將帶來更健康的社會，
        讓更多人享受到高品質的醫療照護，建立起更強大的健康社區。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
