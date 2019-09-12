import fetch from "isomorphic-unfetch";
import Tweet from "../../components/tweet";

const ProfileID = ({ tweets }) => {
  return (
    <div>
      {tweets.map(t => {
        return <Tweet key={t.handle} {...t} />;
      })}
    </div>
  );
};

ProfileID.getInitialProps = async context => {
  const { id } = context.query;

  const host = context.req
    ? `${context.req.headers["x-forwarded-proto"]}://${
        context.req.headers["x-forwarded-host"]
      }`
    : new Url(location.href).origin;

  const response = await fetch(`${host}/api/timeline?id=${id}`);

  if (response.ok) {
    return { tweets: await response.json() };
  }

  return { tweets: [] };
};

export default ProfileID;
