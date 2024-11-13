let words= []
let wordiv = document.getElementById('word')
let input = document.getElementById('input')
let submit = document.getElementById('submit')
let message = document.getElementById('message')
let popitka = document.getElementById('popitka')
let attempts = 6
let Start = document.getElementById('StartGame')
let difficultyDiv = document.getElementById('EMHE')
let guessedLetters = []
let randomWord = ""
let SW = document.getElementById('SW')
function SetDifficulty (){
	const difficulty = document.querySelector('input[name="difficulty"]:checked').value;
	switch(difficulty){
	    case "win":
		attempts = 9
		words = ["киви","счет","снег","урок","сыр","банк","рыба","шкаф","лист","сок","гора","свет","стул", "мышь","каша","мох","суп","нож","печь","лом","иглу","игла","осёл","куст","роза","хлеб","ключ","пила","лес","кот","дом","шик","мел","век","зло","юла","грех","дядя","ёжик","ёлка","зима","лето"]
		break;
	    case "easier":
		attempts = 8
		words = ["киви","счет","снег","урок","сыр","банк","рыба","шкаф","лист","стул", "мышь","сок","гора","свет","каша","мох","суп","нож","печь","лом","иглу","игла","осёл","куст","роза","хлеб","ключ","пила","лес","кот","дом","шик","мел","век","зло","юла","грех","дядя","ёжик","ёлка","зима","лето"]
		break;
	    case "easy":
		attempts = 7
		words = ["киви","счет","снег","урок","сыр","банк","рыба","шкаф","лист","стул", "мышь","каша","мох","сок","гора","свет","суп","нож","печь","лом","иглу","игла","осёл","куст","роза","хлеб","ключ","пила","лес","кот","дом","шик","мел","век","зло","юла","грех","дядя","ёжик","ёлка","зима","лето"]
		break;
		case "normal":
		attempts = 6
		words = ["амёба","ручка","парта","фрукт","свекла","синий","облако","огонёк","булка","вилка","ложка","крышка","белка","капля","копьё","костёр","ярость","пенал","книга","микроб","масло","машина","дерево","озеро","провод","дверь","метро","дерево","текст","банан","корова","помёт","полёт","унитаз","хомяк"]
		break;
		case "hard":
		attempts = 5
		words = ["амёба","ручка","парта","фрукт","свекла","синий","облако","огонёк","булка","вилка","ложка","крышка","белка","капля","копьё","костёр","ярость","пенал","книга","микроб","масло","машина","дерево","озеро","провод","дверь","метро","дерево","текст","банан","корова","помёт","полёт","унитаз","хомяк"]
		break;
		case "hardly":
		attempts = 5
		words = ["картина","тетрадь","айсберг","тарелка","половник","столовая","алфавит","галстук","варенье","духовка","километр","подъезд","цыпленок","аэропорт","тюльпан","молоток","бассейн","километр","варенье","галерея","зелёнка","коктейль","паспорт","монитор","планета","пароход","алюминий","здоровье","мандарин"]
		break;
		case "veryhard":
		attempts = 4
		words = ["картина","тетрадь","айсберг","тарелка","половник","столовая","алфавит","галстук","варенье","духовка","километр","подъезд","цыпленок","аэропорт","тюльпан","молоток","бассейн","километр","варенье","галерея","зелёнка","коктейль","паспорт","монитор","планета","пароход","алюминий","здоровье","мандарин"]
		break;
		case "insane":
		attempts = 5
		words = ["антарктида","холодильник","расщелина","грейпфрут","компьютер","сообщение","аккордеон","виолончель","микроскоп","миллиметр","сантиметр","одуванчик","кроссовок","клавиатура","преступник","параллелепипед","микроволновка","геометрия","география","математика","столешница","почтальон","профессия","аббревиатура","иностранец","бульдозер","литература",]
		break;
	    case "devilish":
		attempts = 4
		words = ["антарктида","холодильник","расщелина","грейпфрут","компьютер","сообщение","аккордеон","виолончель","микроскоп","миллиметр","сантиметр","одуванчик","кроссовок","клавиатура","преступник","параллелепипед","микроволновка","геометрия","география","математика","столешница","почтальон","профессия","аббревиатура","иностранец","бульдозер","литература",]
		break;
		case "unrealistic":
		attempts = 3
		words = ["антарктида","холодильник","расщелина","грейпфрут","компьютер","сообщение","аккордеон","виолончель","микроскоп","миллиметр","сантиметр","одуванчик","кроссовок","клавиатура","преступник","параллелепипед","микроволновка","геометрия","география","математика","столешница","почтальон","профессия","аббревиатура","иностранец","бульдозер","литература",]
		break;
	}
	randomWord = words[Math.floor(Math.random()* words.length)]
}
function displayWord(){
	let displayedWord = randomWord.split('').map(letter =>
		guessedLetters.includes(letter) ? letter : '_').join(' ');

	wordiv.textContent = displayedWord;
}

function checkGuess(){
	const guess = input.value.toLowerCase()

	if(guess.length !== 1 || !/[а-яё]/i.test(guess)){
		message.textContent = "Введите одну Russian букву"
		popitka.textContent = `Осталось попыток: ${attempts}`
	return;		
	}
	if (guessedLetters.includes(guess)){
		message.textContent = "Вы уже угадывали эту букву :)"
		popitka.textContent = `Осталось попыток: ${attempts}`
		return
	}
	guessedLetters.push(guess)

	SW.textContent = `Введенные буквы: ${guessedLetters.join(', ')}`;

	if (!randomWord.includes(guess)){
		attempts--;
		message.textContent = `Неправильно! Такой буквы в слове нету :/`;
		popitka.textContent = `Осталось попыток: ${attempts}`

	if (attempts === 0) {
		message.textContent += ` Игра окончена! Загаданное слово было: ${randomWord}`;
		submit.disabled = true;
	}
	}
	else{
		message.textContent = `Правильно, точно-точно!`;
		popitka.textContent = `Осталось попыток: ${attempts}`

		if (randomWord.split('').every(letter => guessedLetters.includes(letter))){
			message.textContent = `Поздравляем! Вы угадали слово: ${randomWord}`;
			submit.disabled = true;
		}
	}
	displayWord();
	input.value = '';
}
displayWord();

function startGame (){
	guessedLetters = []
	wordiv.style.display = "block"
	input.style.display = "block"
	submit.style.display = "block"
	SetDifficulty();
	difficultyDiv.style.display = "none"
	Start.style.display = "none"
	displayWord();
	input.value = '';
}


