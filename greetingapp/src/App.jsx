import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: ' Who is the father of C language?',
			answerOptions: [
				{ answerText: 'Steve Jobs', isCorrect: false },
				{ answerText: 'james gostling', isCorrect: false },
				{ answerText: 'Dennis rictchie', isCorrect: true },
				{ answerText: 'rasmus', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not an operator in C?',
			answerOptions: [
				{ answerText: 'sizeof()', isCorrect: false },
				{ answerText: '~', isCorrect: false },
				{ answerText: ',', isCorrect: false },
				{ answerText: ' None of the mentioned', isCorrect: true },
			],
		},
		{
			questionText: ' . C preprocessors can have compiler specific features.',
			answerOptions: [
				{ answerText: ' depends on the standard', isCorrect: false },
				{ answerText: 'false', isCorrect: false },
				{ answerText: ' True', isCorrect: true },
				{ answerText: 'Depends on the platform', isCorrect: false },
			],
		},
		{
			questionText: ' Which of the following is not a valid C variable name?',
			answerOptions: [
				{ answerText: 'variable_count', isCorrect: false },
				{ answerText: 'int $main', isCorrect: true },
				{ answerText: 'float rate', isCorrect: false },
				{ answerText: 'int number', isCorrect: false },
			],
		},
		{
			questionText: ' Which is valid C expression?',
			answerOptions: [
				{ answerText: 'int my_num = 100000', isCorrect: true },
				{ answerText: ' int my_num = 100,000;', isCorrect: false },
				{ answerText: 'int my_num = 10', isCorrect: false },
				{ answerText: 'intmy_num = 1000', isCorrect: false },
			],
		},
		{
			questionText: ' What is an example of iteration in C?',
			answerOptions: [
				{ answerText: 'for ', isCorrect: false },
				{ answerText: 'while', isCorrect: false },
				{ answerText: 'do-while', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: true },
			],
		},
		{
			questionText: ' The C-preprocessors are specified with _ symbol.',
			answerOptions: [
				{ answerText: '#', isCorrect: false },
				{ answerText: '$', isCorrect: false },
				{ answerText: '""', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: true },
			],
		},
		{
			questionText: 'What happens if the following C++ statement is compiled and executed?',
			answerOptions: [
				{ answerText: 'The program is not semantically correct', isCorrect: false },
				{ answerText: 'The program gives a compile-time error', isCorrect: false },
				{ answerText: 'The program compiled successfully but throws an error during run-time', isCorrect: false },
				{ answerText: 'The program is compiled and executed successfully', isCorrect: true },
			],
		},
		{
			questionText: ' What is an example of iteration in C?',
			answerOptions: [
				{ answerText: '  7var_name', isCorrect: false },
				{ answerText: 'v 7var_name', isCorrect: false },
				{ answerText: '$var_name', isCorrect: false },
				{ answerText: 'VAR_1234 ', isCorrect: true },
			],
		},
		{
			questionText: ' Which of the following is a correct identifier in C++?',
			answerOptions: [
				{ answerText: 'for ', isCorrect: false },
				{ answerText: 'while', isCorrect: false },
				{ answerText: 'do-while', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: true },
			],
		},
		{
			questionText: ' What is the result of logical or relational expression in C?',
			answerOptions: [
				{ answerText: 'True or False', isCorrect: false },
				{ answerText: ' 0 if an expression is false and any positive number if an expression is true', isCorrect: false },
				{ answerText: ' None of the mentioned', isCorrect: false },
				{ answerText: ' 0 or 1', isCorrect: true },
			],
		},
		{
			
			
				questionText: ' What is an example of iteration in C?',
				answerOptions: [
					{ answerText: 'for ', isCorrect: false },
					{ answerText: 'while', isCorrect: false },
					{ answerText: 'do-while', isCorrect: false },
					{ answerText: 'all of the above', isCorrect: true },
				],
			},
			{
				questionText: ' What is an example of iteration in C?',
				answerOptions: [
					{ answerText: 'for ', isCorrect: false },
					{ answerText: 'while', isCorrect: false },
					{ answerText: 'do-while', isCorrect: false },
					{ answerText: 'all of the above', isCorrect: true },
				],
			},
			{
				questionText: '. Which of the following declaration is not supported by C language?',
			answerOptions: [
				{ answerText: 'Both String str; & float str = 3e2; ', isCorrect: false },
				{ answerText: 'char *str;', isCorrect: false },
				{ answerText: ' float str = 3e2;', isCorrect: false },
				{ answerText: ' String str;', isCorrect: true },
			],
		},
		{
			questionText: ' What is an example of iteration in C?',
			answerOptions: [
				{ answerText: 'for ', isCorrect: false },
				{ answerText: 'while', isCorrect: false },
				{ answerText: 'do-while', isCorrect: false },
				{ answerText: 'all of the above', isCorrect: true },
			],
	
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}