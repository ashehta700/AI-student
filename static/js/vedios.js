
    // Load the YouTube Player API asynchronously
    function loadYouTubePlayerAPI() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
  
      // Callback function called when the YouTube Player API is ready
      let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '315',
          width: '100%',
          videoId: 'CoKup7rOsUo',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
  
      // Callback function called when the player is ready
      function onPlayerReady(event) {
        // You can do something here if needed
      }
  
      // Callback function called when the player's state changes
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          // Video has ended, enable the button
          const button = document.getElementById('next1');
          button.removeAttribute('disabled');
          console.log('The first YouTube video has ended.');
        }
      }
  
      // Load the YouTube Player API when the DOM content is loaded
      document.addEventListener('DOMContentLoaded', function() {
        loadYouTubePlayerAPI();
      });
  
      // Add event listener to the "Next" button for the first video
      const nextButton1 = document.getElementById('next1');
      nextButton1.addEventListener('click', function() {
        // Hide the first video and the button
        const videoContainer = document.getElementById('player');
        const button = document.getElementById('next1');
        videoContainer.style.display = 'none';
        document.getElementById("fristVideoContainer").style.display = 'none';
        button.style.display = 'none';
        document.getElementById("ts3limatVedio1").classList.add("d-none")
        // Show the second video and the second button
        const secondVideoContainer = document.getElementById('secondVideoContainer');
        const secondPlayer = new YT.Player('secondPlayer', {
          height: '315',
          width: '100%',
          videoId: 'G58LOqOqiJs',
          events: {
            'onReady': onSecondPlayerReady,
            'onStateChange': onSecondPlayerStateChange
          }
        });
        secondVideoContainer.style.display = 'block';
      });
  
      // Callback function called when the second player is ready
      function onSecondPlayerReady(event) {
        // You can do something here if needed
      }
  
      // Callback function called when the second player's state changes
      function onSecondPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          // Video has ended, enable the second button
          const button = document.getElementById('next2');
          button.removeAttribute('disabled');
         
          console.log('The second YouTube video has ended.');
        }
      }


// Add event listener to the "Next" button for the second video
const nextButton2 = document.getElementById('next2');
nextButton2.addEventListener('click', function() {
    // Hide the second video and the button
    const secondVideoContainer = document.getElementById('secondVideoContainer');
    const button = document.getElementById('next2');
    secondVideoContainer.style.display = 'none';
    button.style.display = 'none';
    document.getElementById("ts3limatVedio2").classList.add("d-none");

    // Show the third video and the third button
    const thirdVideoContainer = document.getElementById('thirdVideoContainer');
    const thirdPlayer = new YT.Player('thirdPlayer', {
        height: '315',
        width: '100%',
        videoId: 'kbLQNm7UjwY',
        events: {
            'onReady': onThirdPlayerReady,
            'onStateChange': onThirdPlayerStateChange
        }
    });
    thirdVideoContainer.style.display = 'block';
});

// Callback function called when the third player is ready
function onThirdPlayerReady(event) {
    // You can do something here if needed
}

// Callback function called when the third player's state changes
function onThirdPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        // Video has ended, enable the third button
        const button = document.getElementById('next3');
        button.removeAttribute('disabled');
        console.log('The third YouTube video has ended.');
    }
}