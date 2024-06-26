//using selectors inside the element
// traversing the dom

// 1.
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const questions = e.currentTarget.parentElement.parentElement;
//     questions.classList.toggle('show-text');
//   });
// });

// 2.
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});
