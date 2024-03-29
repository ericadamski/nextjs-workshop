import App from "next/app";
import React from "react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Component {...pageProps} />
        <style global jsx>{`
          /* latin-ext */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 400;
            src: local("Cabin"), local("Cabin-Regular"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8-__1ImSRuQwc.woff2)
                format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 400;
            src: local("Cabin"), local("Cabin-Regular"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-4x0qWljRw-Pd8w__1ImSRu.woff2)
                format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 600;
            src: local("Cabin SemiBold"), local("Cabin-SemiBold"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-Pdfv2-hruylEeQ5JZ-Y.woff2)
                format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 600;
            src: local("Cabin SemiBold"), local("Cabin-SemiBold"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-Pdfv2-hluylEeQ5J.woff2)
                format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 700;
            src: local("Cabin Bold"), local("Cabin-Bold"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhruylEeQ5JZ-Y.woff2)
                format("woff2");
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
              U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: "Cabin";
            font-style: normal;
            font-weight: 700;
            src: local("Cabin Bold"), local("Cabin-Bold"),
              url(https://fonts.gstatic.com/s/cabin/v14/u-480qWljRw-PdeL2uhluylEeQ5J.woff2)
                format("woff2");
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
              U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
              U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }

          *,
          *::after,
          *::before {
            font-family: "Cabin", sans-serif;
            box-sizing: border-box;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #defff2;
            margin: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
