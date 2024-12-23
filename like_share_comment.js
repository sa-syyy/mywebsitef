document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const likeCountSpan = document.querySelector(".like-count");
    const shareBtn = document.querySelector(".share-btn");
    const commentInput = document.querySelector(".comment-input");
    const addCommentBtn = document.querySelector(".add-comment-btn");
    const commentsList = document.querySelector(".comments-list");

    // Like button functionality
    likeBtn.addEventListener("click", () => {
        let likeCount = parseInt(likeCountSpan.textContent, 10);
        likeCount += 1;
        likeCountSpan.textContent = likeCount;
    });

    // Share button functionality
    shareBtn.addEventListener("click", () => {
        const postURL = window.location.href;
        navigator.clipboard.writeText(postURL).then(() => {
            alert("Post link copied to clipboard!");
        });
    });

    // Add comment functionality
    addCommentBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const commentItem = document.createElement("li");
            commentItem.textContent = commentText;
            commentsList.appendChild(commentItem);
            commentInput.value = ""; // Clear the input field
        } else {
            alert("Please write a comment before posting.");
        }
    });
});
