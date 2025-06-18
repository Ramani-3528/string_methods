let myString = "  Practice makes a man perfect.  ";

document.getElementById("show").onclick = function() {
    alert("Current String: " + myString);
};

document.getElementById("length").onclick = function() {
    alert("Length: " + myString.length);
};

document.getElementById("replace").onclick = function() {
    let result = myString.replace("man", "person");
    alert("Replaced: " + result);
};

document.getElementById("uppercase").onclick = function() {
    alert("Uppercase: " + myString.toUpperCase());
};

document.getElementById("lowercase").onclick = function() {
    alert("Lowercase: " + myString.toLowerCase());
};

document.getElementById("repeat").onclick = function() {
    alert("Repeated: " + myString.repeat(2));
};

document.getElementById("search").onclick = function() {
    alert("Position of 'man': " + myString.search("man"));
};

document.getElementById("concatination").onclick = function() {
    let result = myString.concat(" Keep learning!");
    alert("Concatenated: " + result);
};

document.getElementById("split").onclick = function() {
    let parts = myString.split(" ");
    alert("Split: " + parts.join(" | "));
};

document.getElementById("trim").onclick = function() {
    alert("Trimmed: " + myString.trim());
};
