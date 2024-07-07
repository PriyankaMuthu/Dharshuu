const photos = [
    { src: 'img17.jpg', message: 'I dont know y i get this attached to you....but its feels like home being with you'},
    { src: 'img8.jpg', message: 'The efforts you put to make me happy...feeling loved ....😘'},
    { src: 'img10.jpg', message: 'The random things u buy for me makes .....'},
    { src: 'img14.jpg', message: 'and there are days.....i wanted to come college to see those...' },
    { src: 'img13.jpg', message: 'even everything around u is not good....but you around me is the best.....'},
    { src: 'img1.jpg', message: 'Now.....what is the karuthu i am saying is ......'},
    { src: 'img16.jpg', message: 'happpiieeeeee...porandhanaaaallllllll...Dharshuuuuuu💙💖'},
    { src: 'img18.jpg', message: 'Have a best year ahead.....I am always with you.....Hope the god brings thousands of blessings to you on this day!!!!!......😊'}
  ];
  
  let currentPhotoIndex = 0;
  
  const photoElement = document.getElementById('photo');
  const messageOverlayElement = document.getElementById('messageOverlay');
  const messageElement = document.getElementById('message');
  const nextButtonElement = document.getElementById('nextButton');
  
  const showPhoto = (index) => {
    const photo = photos[index];
    photoElement.src = photo.src;
    messageElement.textContent = photo.message;
  };
  
  const handleMessageClick = () => {
    messageOverlayElement.style.display = 'none';
  };
  
  const handleNextClick = () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto(currentPhotoIndex);
    messageOverlayElement.style.display = 'flex';
  };
  
  messageOverlayElement.addEventListener('click', handleMessageClick);
  nextButtonElement.addEventListener('click', handleNextClick);
  
  // Initial load
  showPhoto(currentPhotoIndex);
  