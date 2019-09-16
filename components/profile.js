import React from "react";
import Tweet from "./tweet";

const Profile = ({ tweets }) => {
  const { profilePic, handle } = tweets[0] || {};

  return (
    <div className="container">
      {tweets.length > 0 ? (
        <div>
          <div className="profile__header">
            <div className="profile__details">
              <div className="profile__picture">
                <img src={profilePic} alt={`${handle}'s profile picture`} />
              </div>
              <h1 className="profile__handle">{handle}</h1>
            </div>
          </div>
          <div className="profile__tweets">
            {tweets.map(t => {
              return <Tweet key={t.handle} {...t} />;
            })}
          </div>
        </div>
      ) : (
        <h1>
          <span aria-label="sad cat face" role="img">
            😿
          </span>
          Profile Not Found.
        </h1>
      )}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .profile__header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100vw;
          height: 25vh;
          min-height: 500px;
          background-color: #13293d;
        }

        .profile__tweets {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .profile__details {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .profile__picture img {
          max-width: 100%;
        }

        .profile__picture {
          width: 200px;
          height: 200px;
          overflow: hidden;
          border-radius: 50%;
        }

        .profile__handle {
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default Profile;
