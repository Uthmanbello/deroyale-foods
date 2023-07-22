function handleLikeClick(meal) {
    const likesCountElement = document.querySelector('.likes-count');
    const currentLikes = parseInt(likesCountElement.textContent);
    const newLikes = currentLikes + 1;
    likesCountElement.textContent = newLikes;
  
    const heartIcon = document.querySelector('.heart-icon');
    heartIcon.classList.toggle('clicked');
  }