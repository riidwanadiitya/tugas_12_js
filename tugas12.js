function namaBuah() {
    var buah = ['pisang', 'jeruk', 'apel', 'mangga'];
    console.log(buah);
    buahPertama = buah.pop();
    console.log(buah);
    buahKedua = buah.shift();
    return buah
}
console.log(namaBuah());