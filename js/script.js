'use strict';

const newClass = '.elem';
const newId = '#elemId';

function DomElement(selector, height, width, bg, fontSize){
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
}

DomElement.prototype.newElem = function() {
	let elem = document.createElement('div');
	if (this.selector.substr(0, 1) === '.') {
		elem.classList.add(this.selector.substr(1));
	}
	else if (this.selector.substr(0, 1) === '#') {
		elem = document.createElement('p');
		elem.setAttribute('id', this.selector.substr(1));
	} else {
		return 0;
	}
	elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px;`;
	elem.textContent = 'Hello, world!';
	document.body.prepend(elem);
};

const newDomElem = new DomElement(newClass, 50, 100, 'red', 21);
const newElemToo = new DomElement(newId, 100, 150, 'green', 32);

newDomElem.newElem(); 
newElemToo.newElem();
