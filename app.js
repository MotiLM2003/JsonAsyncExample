function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = { userEmail: email };
      resolve(result);
    }, 2000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = ["Video1", "Video2", "Video3", "Video4", "Video5"];
      resolve(result);
    }, 1000);
  });
}

function getVideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(video);
    }, 2000);
  });
}

function test() {
  getDetails();
}
async function getDetails() {
  console.log("getting user...");
  const user = await loginUser("moti2003@gmail.com", "");
  console.log("getting videos...");
  const videos = await getUserVideos(user.email);
  console.log("Getting details...");
  const details = await getVideoDetails(videos[3]);
  console.log("Video details: " + details);
}

function getDetailsPromise() {
  loginUser("moti@gmail.com")
    .then(user => getUserVideos(user.email))
    .then(videos => getVideoDetails(videos[4]))
    .then(details => console.log(details));
}
