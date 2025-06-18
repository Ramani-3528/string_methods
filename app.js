let myString = "  Practice makes a man perfect.  ";

document.getElementById("show").onclick = () => {
    alert("Current String: " + myString);
};

document.getElementById("length").onclick = () => {
    alert("Length: " + myString.length);
};

document.getElementById("replace").onclick = () => {
    let result = myString.replace("man", "person");
    alert("Replaced: " + result);
};

document.getElementById("uppercase").onclick = () => {
    alert("Uppercase: " + myString.toUpperCase());
};

document.getElementById("lowercase").onclick = () => {
    alert("Lowercase: " + myString.toLowerCase());
};

document.getElementById("repeat").onclick = () => {
    alert("Repeated: " + myString.repeat(2));
};

document.getElementById("search").onclick = () => {
    alert("Position of 'man': " + myString.search("man"));
};

document.getElementById("concatination").onclick = () => {
    let result = myString.concat(" Keep learning!");
    alert("Concatenated: " + result);
};

document.getElementById("split").onclick = () => {
    let parts = myString.split(" ");
    alert("Split: " + parts.join(" | "));
};

document.getElementById("trim").onclick = () => {
    alert("Trimmed: " + myString.trim());
};
