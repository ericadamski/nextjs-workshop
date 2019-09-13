import fetch from "isomorphic-unfetch";
import Tweet from "../components/tweet";

const App = ({ tweets }) => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "3rem" }}>Catter!</h1>
      {tweets.map(t => {
        return <Tweet key={t.handle} {...t} />;
      })}
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
