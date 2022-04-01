import "../public/img_206976.png";
import { useSelector } from "react-redux";

function Community() {
  const state = useSelector((state) => state.UserReducer);
  return (
    <>
      <div className="user-n">
        <h2 className="h2">Hey, {state.user.name} </h2>
        <div className="comm">
          <textarea
            className="textarea"
            placeholder="comment here..."
          ></textarea>
          <br />
          <br />
          <button className="postbtn">Post</button>
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
              The advent of the World Wide Web and the rapid adoption of social
              media platforms (such as Facebook and Twitter) paved the way for
              information dissemination that has never been witnessed in the
              human history before. With the current usage of social media
              platforms, consumers are creating and sharing more information
              than ever before, some of which are misleading with no relevance
              to reality.
            </p>
          </div>
        </div>
        <div className="usercomm">
          <div className="udate">
            <span className="span">12 march 2021</span>
          </div>

          <div className="uc">
            <p>
              The advent of the World Wide Web and the rapid adoption of social
              media platforms (such as Facebook and Twitter) paved the way for
              information dissemination that has never been witnessed in the
              human history before. With the current usage of social media
              platforms, consumers are creating and sharing more information
              than ever before, some of which are misleading with no relevance
              to reality.
            </p>
          </div>
        </div>
      </div>
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
      <div className="main-community">
        <div className="user-profile-comm">
          <img src="img_206976.png" />
          <div className="name-pro">Arin Masta</div>
          <span className="span">08/09/2000 11:00 pm</span>
        </div>
        <div className="user-comment-comm">
          A number of studies have primarily focused on detection and
          classification of fake news on social media platforms such as Facebook
          and Twitter [13, 14]. At conceptual level, fake news has been
          classified into different types; the knowledge is then expanded to
          generalize machine learning (ML) models for multiple domains [10, 15,
          16]. The study by Ahmed et al. [17] included extracting linguistic
          features such as n-grams from textual articles and training multiple
          ML models including K-nearest neighbor (KNN), support vector machine
          (SVM), logistic regression (LR), linear support vector machine (LSVM),
          decision tree (DT), and stochastic gradient descent (SGD),
        </div>
      </div>
      <div className="main-community">
        <div className="user-profile-comm">
          <img src="img_206976.png" />
          <div className="name-pro">Yadnesh Nalawade</div>
          <span className="span">08/09/2000 11:00 pm</span>
        </div>
        <div className="user-comment-comm">
          In the current fake news corpus, there have been multiple instances
          where both supervised and unsupervised learning algorithms are used to
          classify text [20, 21].
        </div>
      </div>
    </>
  );
}

export default Community;
