const post_list = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


var posts = document.getElementById("posts");

for (const post of post_list) {
    var section = document.createElement("section");

    section.innerHTML = `
        <section class="post">
            <section class="poster">
                <img class="user-avatar" src="${post.avatar}">
                <div class="poster-info">
                    <p class="poster-name">${post.name}</p>
                    <p class="poster-location">${post.location}</p>
                </div>
            </section>
            <section class="post-image">
                <img class="main-image" src="${post.post}">
            </section>
            <section class="comments">
                <img class="icon" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
                <p class="likes">${post.likes} likes</p>
                <p class="comment"><span class="commenter">${post.username}</span>${post.comment}</p>
            </section>
        </section>
    `
    posts.appendChild(section);
}