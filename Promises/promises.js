document.getElementById("fetch-button").addEventListener("click", () => {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "Data fetching......";

  fetch("https://dummyjson.com/posts") //API call and then show details
    .then((response) => response.json())
    .then((data) => {
      postList.innerHTML = "";

      data.posts.forEach((post) => {
        const titleElement = document.createElement("p");
        titleElement.textContent = post.title;
        titleElement.style.paddingLeft = "20px";
        postList.appendChild(titleElement);
      });
    }) //Error masge
    .catch((error) => {
      postList.innerHTML = "Error fetching posts";
      console.error("Error:", error);
    });
});
