import { useState, useEffect } from "react";

export default function FucPost() {
  const [comments, setComments] = useState();
  useEffect(() => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        const response = JSON.parse(request.response);
        setComments(response);
        console.log(request.response);
      }
    };
    request.open("GET", "http://localhost:8800/api/auth/comments", true);
    request.send();
  }, []);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  return request.response;
}
