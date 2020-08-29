'use strict';

class First {

	hello() {
		console.log('Привет я метод родителя!');
	}
}

class Second extends First {

	hello() {
		super.hello();
		setTimeout(() => {
			console.log('А я наследуемый метод!');  // без setTimeout просто console.log
		}, 1000);
	}
}

const newHello = new Second();
newHello.hello();

