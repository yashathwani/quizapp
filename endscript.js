
    let finalScore = localStorage.getItem('score');
    if (!finalScore) {
        finalScore = 0;
    }
    document.getElementsByClassName('final-score')[0].innerText = finalScore;
