function find() {
    let count = 0;
    string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === "a" || string.charAt(i) === "o" || string.charAt(i) === "e" || string.charAt(i) === "u" || string.charAt(i) === "i") {
            count ++;
        }
        document.getElementById('result').innerHTML = "Có " + count + " Ký Tự Nguyên Âm";
    }
}