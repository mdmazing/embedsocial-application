fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const feedContainer = document.getElementById('feedContainer');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const themeToggle = document.getElementById('themeToggle');

    let startIndex = 0;
    const batchSize = 4;



    // Function to create a feed card element
    const createFeedCard = (post) => {
      const card = document.createElement('div');
      card.classList.add('feed-card');

      const userDataDiv = document.createElement('div');
      const cardHeaderDiv = document.createElement('div');
      const profileImage = document.createElement('img');
      const name = document.createElement('div');
      const date = document.createElement('div');
      const image = document.createElement('img');
      const likes = document.createElement('div');
      const caption = document.createElement('div');

      // card header
      cardHeaderDiv.appendChild(profileImage);
      cardHeaderDiv.appendChild(userDataDiv);
      cardHeaderDiv.classList.add('feed-card-header')

      // user data
      userDataDiv.appendChild(name);
      userDataDiv.appendChild(date);

      // profile img
      profileImage.src = post.profile_image;
      profileImage.classList.add('profile-image');
    
      //name
      name.classList.add('name');
      name.textContent = post.name;
      
      // date
      date.classList.add('date');
      date.textContent = post.date;

      // content
      image.src = post.image;
      likes.classList.add('likes');
      likes.textContent = `❤ ${post.likes}`;
      caption.classList.add('caption');
      caption.textContent = post.caption;

      // create card
      card.appendChild(cardHeaderDiv);
      card.appendChild(image);
      card.appendChild(likes);
      card.appendChild(caption);


      return card;
    };


    // Function to display a batch of posts
    const displayPosts = () => {
      const endIndex = Math.min(startIndex + batchSize, data.length);

      for (let i = startIndex; i < endIndex; i++) {
        const post = data[i];
        const card = createFeedCard(post);
        feedContainer.appendChild(card);
      }

      startIndex += batchSize;

      // Hide load more button if all cards have been loaded
      if (startIndex >= data.length) {
        loadMoreBtn.style.display = 'none';
      }
    };

    // Event listener for load more button click
    loadMoreBtn.addEventListener('click', displayPosts);

    // Event listener for theme toggle
    const toggleSwitch = document.getElementById('themeToggle');
const layoutContainer = document.querySelector('.layout-container');
const headerConatiner = document.querySelector('.header-container');



// Function to handle the theme change
const handleThemeChange = () => {
  if (toggleSwitch.checked) {
    // Dark mode
    document.body.classList.add('dark-mode');
    // headerConatiner.classList.add('dark-mode');
  } else {
    // Light mode
    document.body.classList.remove('dark-mode');
    // headerConatiner.classList.remove('dark-mode');
  }
};

// Event listener for theme change
toggleSwitch.addEventListener('change', handleThemeChange);

    // Initial display of posts
    displayPosts();
  });