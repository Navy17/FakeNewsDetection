import "../public/img_206976.png";
import { useSelector } from "react-redux";
import { useState } from "react";

function Community() {
  const state = useSelector((state) => state.UserReducer);
  const [comment, setComment] = useState("");
  const username = state.user
    ? state.user.users
      ? state.user.users.username
      : state.user.name
    : "";
  const profileUrl = state.user
    ? state.user.users
      ? state.user.users.profileUrl
      : state.user.profileUrl
    : "";

  const handlePost = async (e) => {
    e.preventDefault();

    ApiCallComment({
      Comment: comment,
      username: username,
      profileUrl: profileUrl,
      timestamp: new Date().getTime(),
    });
  };

  return (
    <>
      {state.user ? (
        state.user.name ? (
          <>
            <div className="user-n">
              <h2 className="h2">
                Hey {state.user.name}, Welcome to our website...
              </h2>

              <div className="comm">
                <textarea
                  className="textarea"
                  placeholder="comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <br />
                <br />
                <button className="postbtn" onClick={handlePost}>
                  Post
                </button>
              </div>
              <br />
              <br />
              <div className="co">Here is yours comments...</div>
              <div className="usercomm">
                <div className="udate">
                  <span className="span">12 march 2021</span>
                </div>

                <div className="uc">
                  <p>
                    The advent of the World Wide Web and the rapid adoption of
                    social media platforms (such as Facebook and Twitter) paved
                    the way for information dissemination that has never been
                    witnessed in the human history before. With the current
                    usage of social media platforms, consumers are creating and
                    sharing more information than ever before, some of which are
                    misleading with no relevance to reality.
                  </p>
                </div>
              </div>
              <div className="usercomm">
                <div className="udate">
                  <span className="span">12 march 2021</span>
                </div>

                <div className="uc">
                  <p>
                    The advent of the World Wide Web and the rapid adoption of
                    social media platforms (such as Facebook and Twitter) paved
                    the way for information dissemination that has never been
                    witnessed in the human history before. With the current
                    usage of social media platforms, consumers are creating and
                    sharing more information than ever before, some of which are
                    misleading with no relevance to reality.
                  </p>
                </div>
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            <div className="user-n">
              <h2 className="h2">
                Hey {state.user.users.name}, Welcome to our website...
              </h2>

              <div className="comm">
                <textarea
                  className="textarea"
                  placeholder="comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <br />
                <br />
                <button className="postbtn" onClick={handlePost}>
                  Post
                </button>
              </div>
              <br />
              <br />
              <div className="co">Here is yours comments...</div>
              <div className="usercomm">
                <div className="udate">
                  <span className="span">12 march 2021</span>
                </div>

                <div className="uc">
                  <p>
                    The advent of the World Wide Web and the rapid adoption of
                    social media platforms (such as Facebook and Twitter) paved
                    the way for information dissemination that has never been
                    witnessed in the human history before. With the current
                    usage of social media platforms, consumers are creating and
                    sharing more information than ever before, some of which are
                    misleading with no relevance to reality.
                  </p>
                </div>
              </div>
              <div className="usercomm">
                <div className="udate">
                  <span className="span">12 march 2021</span>
                </div>

                <div className="uc">
                  <p>
                    The advent of the World Wide Web and the rapid adoption of
                    social media platforms (such as Facebook and Twitter) paved
                    the way for information dissemination that has never been
                    witnessed in the human history before. With the current
                    usage of social media platforms, consumers are creating and
                    sharing more information than ever before, some of which are
                    misleading with no relevance to reality.
                  </p>
                </div>
              </div>
            </div>{" "}
          </>
        )
      ) : (
        <></>
      )}
      <div className="cb">
        <h2 className="h2">Community Blogs</h2>
      </div>

      <div className="main-community">
        <div className="user-profile-comm">
          <img src="img_206976.png" />
          <div className="name-pro">Naveen Kamalla</div>
          <span className="span">08/09/2000 11:00 pm</span>
        </div>
        <div className="user-comment-comm">
          The advent of the World Wide Web and the rapid adoption of social
          media platforms (such as Facebook and Twitter) paved the way for
          information dissemination that has never been witnessed in the human
          history before. With the current usage of social media platforms,
          consumers are creating and sharing more information than ever before,
          some of which are misleading with no relevance to reality.{" "}
        </div>
      </div>
      <PostComments />
    </>
  );
}

export default Community;
