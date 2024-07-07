let currentPhotoIndex = 0;
const photos = [
    { src: 'img2.jpg', question: 'Where did you first meet me?', answers: ['Elsewhere', 'Classroom'], correct: 1 },
    { src: 'img12.jpg', question: 'The incident that we never forgot?', answers: ['Culturals', 'That day, when I made you fall'], correct: 1 },
    { src: 'img15.jpg', question: 'What is my favorite food?', answers: ['Noodles', 'Chicken Rice'], correct: 1 },
    { src: 'img6.jpg', question: 'What is my favorite color?', answers: ['Violet', 'Pink'], correct: 1 },
    { src: 'img11.jpg', question: 'What do you like the most about me?', answers: ['Attitude', 'Talkative'], correct: 1 },
    { src: 'img20.jpg', question: 'Are you thinking, It is my birthday, but why is she asking about her?', answers: ['No', 'Yes'], correct: 1 },
    { src: 'img4.jpg', question: 'Now, you answered all my question. Are you ready to move in?', answers: ['No', 'Yes'], correct: 1 }
];

function loadPhoto() {
    const photoData = photos[currentPhotoIndex];
    document.getElementById('photo').src = photoData.src;
    document.getElementById('question').innerText = photoData.question;
    const answers = document.getElementById('answers');
    answers.innerHTML = '';
    
    // Randomize the order of the answers
    const shuffledAnswers = photoData.answers.map((answer, index) => ({ answer, index })).sort(() => Math.random() - 0.5);
    shuffledAnswers.forEach(({ answer, index }) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => checkAnswer(index === photoData.correct);
        answers.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    const photo = document.getElementById('photo');
    if (isCorrect) {
        currentPhotoIndex++;
        if (currentPhotoIndex < photos.length) {
            loadPhoto();
        } else {
            alert('Congratulations! You have completed all the questions.');
            // Optionally, you can add logic to reset or end the quiz
        }
    } else {
        photo.style.transform = 'scale(1.2)';
        setTimeout(() => {
            photo.style.transform = 'scale(1)';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', loadPhoto);

function next(){
    window.location.href = 'gallery.html';
}
