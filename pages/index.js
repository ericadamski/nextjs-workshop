import fetch from "isomorphic-unfetch";
import Tweet from "../components/tweet";

const App = ({ tweets }) => {
  return (
    <div>
      <h1>Hey!</h1>
      {tweets.map(t => {
        return <Tweet key={t.handle} {...t} />;
      })}
      <style global jsx>{`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }

        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 3rem 0;
          background-color: #8b80f9;
        }
      `}</style>
    </div>
  );
};

App.getInitialProps = async context => {
  // fetch inital timeline
  const host = context.req
    ? `${context.req.headers["x-forwarded-proto"]}://${
        context.req.headers["x-forwarded-host"]
      }`
    : new Url(location.href).origin;

  const response = await fetch(`${host}/api/timeline`);
  let tweets = [];

  if (response.ok) {
    tweets = await response.json();
  }

  // props
  return { tweets };
};

export default App;
