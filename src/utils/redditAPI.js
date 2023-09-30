let headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json",
  "User-Agent": "MY-UA-STRING",
});

async function getRedditData(subreddit,sub) {
  return fetch(`https://www.reddit.com/${sub}/${subreddit}.json`)
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
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
          subreddit
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
          subreddit
        };
      })
    );
}

async function getSearch (searchQuery) {
  return fetch(`https://www.reddit.com/search.json?q=${searchQuery}&type=sr`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.children);
    return data.data.children;
  })
  .then((children) => {
    if (children.length === 0) {
      return [];
    }
    return children.map((child) => {
      const {
        community_icon,
        display_name,
        display_name_prefixed,
      } = child.data;
      /*return {
        community_icon,
        display_name,
        display_name_prefixed,
      };*/
      return {title:display_name};
    })

  })
}

export default getRedditData;
export {getSearch};
