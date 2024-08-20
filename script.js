// Signup form submission
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            if (newUsername && newPassword) {
                localStorage.setItem(newUsername, newPassword);
                alert('Sign up successful! You can now log in.');
                window.location.href = 'index.html';
            } else {
                alert('Please fill all the fields');
            }
        });
    }

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedPassword = localStorage.getItem(username);

            if (storedPassword && storedPassword === password) {
                alert('Login successful!');
                window.location.href = 'movies.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    // Movie form submission and poster display
    const movieForm = document.getElementById('movieForm');
    const moviePoster = document.getElementById('moviePoster');
    const movieImage = document.getElementById('movieImage');

    if (movieForm) {
        movieForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const selectedMovie = document.getElementById('movie').value;
            localStorage.setItem('selectedMovie', selectedMovie);
            window.location.href = 'payment.html';
        });

        const movieSelect = document.getElementById('movie');
        movieSelect.addEventListener('change', function() {
            const selectedMovie = movieSelect.value;
            let movieSrc = '';
            switch (selectedMovie) {
                case 'movie1':
                    movieSrc = 'Kalki 2.jpg';
                    break;
                case 'movie2':
                    movieSrc = 'Indain 2 2.jpg';
                    break;
                case 'movie3':
                    movieSrc = 'Sarfira 2.jpg';
                    break;
                case 'movie4':
                    movieSrc = 'Bad Newz.jpg';
                    break;    
                default:
                    movieSrc = '';
            }
            if (movieSrc) {
                movieImage.src = movieSrc;
                movieImage.style.display = 'block';
            } else {
                movieImage.style.display = 'none';
            }
        });
    }

    // Payment form submission
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;

            if (cardNumber && expiryDate && cvv) {
                window.location.href = 'confirmation.html';
            } else {
                alert('Please fill all the fields');
            }
        });
    }

    // Load confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    if (confirmationMessage) {
        const selectedMovie = localStorage.getItem('selectedMovie');
        confirmationMessage.textContent = `Your booking for "${selectedMovie}" has been confirmed!`;
    }
});
