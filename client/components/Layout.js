import Head from "next/head";
import Header from "./Header";

export const Page = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700"
        rel="stylesheet"
      />
    </Head>

    <Header />

    <main>{children}</main>

    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      body {
        background-color: #efedf0;
        font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #6b6b8e;
      }
      main {
        padding-top: 80px;
      }
    `}</style>
  </div>
);

export const Center = ({ children, style }) => (
  <div style={style}>
    {children}

    <style jsx>{`
      div {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }
    `}</style>
  </div>
);
