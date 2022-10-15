import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import styled from "@emotion/styled";
import BgImage from "@site/static/my/daye.svg";
import { useSpring, animated, useTrail } from "react-spring";

const FeatureList = [
    {
        title: '学习笔记',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                无解
            </>
        ),
    },
    {
        title: '项目笔记',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                666
            </>
        ),
    },
    {
        title: '文档',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                文档、API
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
    const props = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(3em)" },
        delay: 0,
    });

    const props2 = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(3em)" },
        delay: 300,
    });

    const props3 = useSpring({
        opacity: 1,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(3em)" },
        delay: 600,
    });

    const animatedTexts = useTrail(5, {
        from: { opacity: 0, transform: "translateY(3em)" },
        to: { opacity: 1, transform: "translateY(0)" },
        config: {
            mass: 3,
            friction: 45,
            tension: 460,
        },
    });

    return (
        // <section className={styles.features}>
        //   <div className="container">
        //     <div className="row">
        //       {FeatureList.map((props, idx) => (
        //         <Feature key={idx} {...props} />
        //       ))}
        //     </div>
        //   </div>
        // </section>
        <div className={styles.mainWrapper}>
            <div style={props} className={styles.title}>
                <div>
                    Welcome to
                    <span>无解</span>
                    's Site
                </div>
                <div className={styles.subTitle}>计算机编程爱好者</div>
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "end",
                    height: "calc(100vh - 60px)",
                }}
            >
                {/*<SvgBackGround/>*/}
            </div>
        </div>
    );
}

const SvgBackGround = styled(BgImage)`
  height: 100%;
  width: 50vw;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
   //margin-bottom: 20px;
`;
