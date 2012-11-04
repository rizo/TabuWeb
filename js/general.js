


function Operation(name, opc) {
	var element = document.getElementById(name);
	var name = name;
	var _opc = opc;
	var activated = false;

	element.onclick = function() {
		if (this.activated) {
			_opc.deactiveOperation(this);
		} else {
			_opc.activeOperation(this);
		}
	};
}


function OPController() {
	this.activated_operations = [];
	
	this.deactiveOperation = function(op) {
		if (this.activated_operations.length == 1)
			return;

		op.activated = false;
		op.className = "";
		removeFromArrayByValue(this.activated_operations, op.name);
	};

	this.activeOperation = function(op) {
		op.activated = true;
		op.className = "active";
		appendToArray(this.activated_operations, op)
	};

	this.operations = {
		 "plus": Operation("plus", this),
		"minus": Operation("minus", this),
		 "mult": Operation("mult", this),
		  "div": Operation("div", this)
	}

}

function init() {
	var OP = new OPController();
}



function toggle_settings()
{
	var s = document.getElementById("settings");

	if (s.className.length == 0) {
		s.className = "hidden";
	}
	else {
		s.className = "";
	}
}



function open_window(content)
{
	var o = document.getElementById("overlay");
	var w = document.getElementById("window");

	o.className = "";
	w.className = "";

}


function close_window()
{
	var o = document.getElementById("overlay");
	var w = document.getElementById("window");

	o.className = "hidden";
	w.className = "hidden";
}






/*

// Core Library Funcions

var $ = window.document.getElementById;


function removeFromArrayByIndex(a, i) {
	a.splice(i);
}

function removeFromArrayByValue(a, v) {
	i = a.indexOf(v);
	removeFromArrayByIndex(a, i);
}





// Operations

var operations = {
	 "plus": {"element": undefined, "activated": false},
	"minus": {"element": undefined, "activated": false},
	 "mult": {"element": undefined, "activated": false},
	  "div": {"element": undefined, "activated": false}
}

var activated_operations = [];

function init_operations()
{
	// Initialize the operation elements.
	operations["plus"]["element"] = document.getElementById("plus");
	operations["plus"]["element"].onclick(toggle_operation("plus"));

	operations["minus"]["element"] = document.getElementById("minus");
	operations["minus"]["element"].onclick(toggle_operation("minus"));

	operations["mult"]["element"] = document.getElementById("mult");
	operations["mult"]["element"].onclick(toggle_operation("mult"));

	operations["div"]["element"] = document.getElementById("div");
	operations["div"]["element"].onclick(toggle_operation("div"));
}


// Settings

var settings = {
	"selected_operations": [],
	"difficulty": -1,
}


function open_window()
{
	var o = document.getElementById("overlay");
	var w = document.getElementById("window");

	o.className = "";
	w.className = "";
}


function close_window()
{
	var o = document.getElementById("overlay");
	var w = document.getElementById("window");

	o.className = "hidden";
	w.className = "hidden";
}


function show_settings()
{
	var s = document.getElementById("settings");

	s.className = "";
}


function toggle_settings()
{
	var s = document.getElementById("settings");

	if (s.className.length == 0) {
		s.className = "hidden";
	}
	else {
		s.className = "";
	}
}


function toggle_operation(op)
{
	var elid = null;
	switch (op)
	{
		case plus:
			elid = "plus"; break;
		case minus:
			elid = "minus"; break;
		case mult:
			elid = "mult"; break;
		case div:
			elid = "div"; break;
		default:
		   alert("Wrong operation argument!");
		   return -1;
	}

	// Operation Element View
	var el = document.getElementById(elid);

	// Select
	if (el.className.length == 0) {
		el.className = "active";
		appendToArray(settings["selected_operations"], op)
	}

	// Deselect
	else {
		el.className = "";
		removeFromArrayByValue(settings["selected_operations"], op);
	}

	alert(settings["selected_operations"]);
}


function easy()
{
	var e = document.getElementById("easy_b");
	var m = document.getElementById("medium_b");
	var h = document.getElementById("hard_b");
	
	e.className = "active";
	m.className = "";
	h.className = "";
	document.getElementById("settings").className = "";
}


function medium()
{
	var e = document.getElementById("easy_b");
	var m = document.getElementById("medium_b");
	var h = document.getElementById("hard_b");
	
	m.className = "active";
	e.className = "";
	h.className = "";
	document.getElementById("settings").className = "";
}



function hard()
{
	var e = document.getElementById("easy_b");
	var m = document.getElementById("medium_b");
	var h = document.getElementById("hard_b");
	
	h.className = "active";
	m.className = "";
	e.className = "";
	document.getElementById("settings").className = "";
}


*/