let headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  "User-Agent": "MY-UA-STRING",
});

async function getRedditData(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.data.children;
    })
    .then((children) =>
      children.map((child) => {
        const {
          post_hint,
          title,
          permalink,
          url,
          author,
          created_utc,
          num_comments,
          ups,
          downs,
          thumbnail,
        } = child.data;
        let media = "null";
        if (post_hint === "image") {
          media = url;
        } else if (post_hint === "hosted:video") {
          media = child.data.media.reddit_video.fallback_url;
        }

        return {
          media_type: post_hint,
          title,
          permalink,
          author,
          created_utc,
          num_comments,
          ups,
          downs,
          thumbnail,
          media,
        };
      })
    );
}

export default getRedditData;
