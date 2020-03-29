(async function f() {
  let badurl = "http://";
  let goodurl = "http://jsonplaceholder.typicode.com/users";
  let url = Math.round(Math.random()) ? badurl : goodurl;
  console.log(url);
  let data = await (await fetch(url).catch(handleErr)).json();
  console.log(data);
})();

function handleErr(err) {
  console.warn(err);
  let resp = new Response(
    JSON.stringify({
      code: 400,
      message: "Bad URL Errror"
    })
  );
  return resp;
}
