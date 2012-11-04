/*
	    Package: `core.js`
	Description: Core Javascript Library
	     Author: Rizo Isrof
	    Version: 0.1
*/

function _(id)
{
	if (id) {
		if (window === this) {
			return new _(id);
		}

		this.e = document.getElementById(id);
		return this.e;
	} else {
		return null;
	}
}

_.prototype = {
	hide: function () {
		this.e.style.display = "none";
		return this;
	},

	show: function () {
		this.e.style.display = "inherit";
		return this;
	},

	toggle: function () {
		if (this.e.style.display !== "none") {
			this.e.style.display = "none";
		} else {
			this.e.style.display = "";
		}
		return this;
	},

	onclick: function (f) {
		this.e.onclick = f;
		return this;
	}
}


function removeFromArrayByIndex(a, i) {
	a.splice(i);
}

function removeFromArrayByValue(a, v) {
	i = a.indexOf(v);
	removeFromArrayByIndex(a, i);
}

function appendToArray(a, e) {
	a.push(e);
}



