"use strict";

var textarea = document.getElementById('message');

textarea.oninput = () => {
	textarea.style.height = ''; // reset  height
    textarea.style.height = textarea.scrollHeight + "px";
    
    textareaLabel.style.bottom = '';
    textareaLabel.style.bottom = 'calc(' + textarea.scrollHeight + 'px' + ' + 2rem)';
};