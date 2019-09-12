import React from "react";
import Link from "next/link";

const Tweet = ({ className, handle, name, profilePic, content, media }) => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="card__details">
          <div className="card__header">
            <Link href={`/profile/${handle}`}>
              <div className="card__profile">
                <img src={profilePic} alt="profile picture" />
              </div>
            </Link>
            <h1 className="card__name">{name}</h1>
            <h2 className="card__handle">@{handle}</h2>
          </div>
          <p className="card__content">{content}</p>
          <div className="card__media">
            <img src={media} alt="my pal" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          width: 450px;
          min-height: 250px;
          border-radius: 12px;
          box-shadow: 10px 0px 40px 0px rgba(0, 0, 0, 0.6);
          background-color: #ffffff;
          margin-bottom: 2rem;
        }

        .card__profile {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          z-index: 2;
        }

        .card__profile:hover {
          cursor: pointer;
        }

        .card__profile img {
          max-width: 100%;
        }

        .card__header {
          position: relative;
          margin-bottom: 1rem;
          padding: 1rem 0;
        }

        .card__name {
          margin: 0;
          margin-top: 1rem;
          font-size: 2.5rem;
        }

        .card__handle {
          margin: 0;
          color: rgba(0, 0, 0, 0.6);
        }

        .card__content {
          margin: 0;
          font-size: 1.25rem;
        }

        .card__details {
          padding: 2rem;
          padding-top: 0;
          display: flex;
          flex-direction: column;
        }

        .card__media {
          margin-top: 1rem;
          overflow: hidden;
          border-radius: 8px;
        }

        .card__media img {
          min-width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Tweet;
