document.addEventListener('click', (evt) => {
	if (evt.target.classList.contains('question_1') ) {
		const btn = evt.target;
		btn.closest('.question-wrap').classList.toggle('active');
	}
})

