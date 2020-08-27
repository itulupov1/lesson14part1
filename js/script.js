'use strict';

const newClass = '.elem';
const newId = '#elemId';

function DomElement(selector, height, width, bg, fontSize){
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.newElem = function () {
		const blockOne = document.createElement('div');
		const blockTwo = document.createElement('p');
		if (this.selector.substr(0, 1) === '.') {
			blockOne.classList.add(this.selector.substr(1));
			document.body.prepend(blockOne);
			blockOne.style.cssText = 'height: '+this.height+'px; width: '+this.width+'px; background-color: '+this.bg+'; font-size: '+this.fontSize+'px;';
			blockOne.innerHTML = 'Hello, world!';
		}
		if (this.selector.substr(0, 1) === '#') {
			blockTwo.setAttribute('id', this.selector.substr(1));
			document.body.prepend(blockTwo);
			blockTwo.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background-color: ' + this.bg + '; font-size: ' + this.fontSize + 'px;';
			blockTwo.innerHTML = 'Hello, world2!';
		} else {
			return 0;
		}
	};
	this.newElem(); // вызывается при создании нового объекта 
}

const newDomElem = new DomElement(newClass, 50, 100, 'red', 21);
const newElemToo = new DomElement(newId, 100, 150, 'green', 32);

//newDomElem.newElem(); вызов метода вручную
//newElemToo.newElem(); вызов метода вручную

