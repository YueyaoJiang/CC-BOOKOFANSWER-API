let answersJSON, currentLang = 'en';

window.switchLang = function(lang) {
  currentLang = lang;
};

window.addEventListener('DOMContentLoaded', () => {

  fetch('answer.json')
    .then(res => res.json())
    .then(data => { answersJSON = data; });

  const input = document.getElementById('question');
  const button = document.getElementById('ask');

  function reveal() {
    const q = input.value.trim();
    if (!q) return;
    const keys = Object.keys(answersJSON);
    const rand = keys[Math.floor(Math.random() * keys.length)];
    const ans = answersJSON[rand].answer;
    localStorage.setItem('divinationAnswerObj', JSON.stringify(ans));
    localStorage.setItem('divinationAnswerLang', currentLang);
    window.location.href = 'answer.html';
  }

  button.addEventListener('click', reveal);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') reveal();
  });
});
