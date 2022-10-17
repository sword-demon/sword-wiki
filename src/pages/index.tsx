import React from "react";
import Layout from "@theme/Layout";
import GitHubIcon from "@site/static/my/logo.svg";
import MailIcon from "@site/static/my/logo.svg";
import styles from "./styles.module.css";

export default () => {
    return (
        <Layout title="My Project">
            <div style={{width: "100%", height: "100%", padding: 100}}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        columnGap: 24,
                    }}
                >
                    <img
                        src={require("@site/static/img/happycode.gif").default}
                        style={{
                            flex: "0 0 auto",
                            borderRadius: 8,
                        }}
                    />
                    <div style={{display: "flex", flexDirection: "column", rowGap: 24}}>
                        <div style={{position: "relative", left: 24, fontSize: "24px"}}>
                            Hi, I am wxvirus
                        </div>
                        <div style={{position: "relative", left: 24, fontSize: "24px"}}>
                            A Back-end Engineer.
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
