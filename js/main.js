let board = ['', '', '', '', '', '', '', '', ''];
const wins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
];

const checkWin = () => {
	for (let i = 0; i < wins.length; i++) {
		const [a, b, c] = wins[i];
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a];
		}
	}
	if (!movesLeft()) showResult('Draw');
};

const showResult = winner => {
	$('#win')
		.html(`<p>${winner} wins</p>`)
		.hide()
		.fadeIn()
		.delay(2000)
		.fadeOut(400, () => {
			$('.box').removeClass('x o');
			board = ['', '', '', '', '', '', '', '', ''];
		});
};

const movesLeft = () => (board.indexOf('') >= 0 ? true : false);

const minimax = (
	depth = 0,
	isXturn = false,
	index = -1,
	bestScore = -Infinity,
) => {
	if (checkWin() === 'o') return index;
	// loop through all the possible moves o can take
	// make a move
	if (isXturn) {
		for (let i = 0; i < board.length; i++) {
			board[i] = 'o';

			board[i] = '';
		}
	} else {
	}
};

for (let i = 0; i < board.length; i++) {
	const button = $(`#${i}`);
	button.click(() => {
		if (board[i] === '') {
			// player move
			board[i] = 'x';
			button.addClass('x');
			let winner = checkWin();
			if (winner === 'x') {
				showResult('Red');
				return;
			} else if (winner === 'o') {
				showResult('Yellow');
				return;
			}

			//ai move
			const aiMove = minimax(0, false);
			board[aiMove.index] = 'o';
			$(`#${aiMove.index}`).addClass('o');
			winner = checkWin();
			if (winner === 'x') {
				showResult('Red');
				return;
			} else if (winner === 'o') {
				showResult('Yellow');
				return;
			}
		}
	});
}

// Testing moves
// $('#0').trigger('click');
// $('#8').trigger('click');
// $('#1').trigger('click');
// $('#3').trigger('click');
// $('#2').trigger('click');
