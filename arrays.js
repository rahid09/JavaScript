/*
push() - pop() - shift() - unshift() - splice() - slice() - concat() - filter() - includes() - indexOf()
*/


let dizi = [1, 2, 3, 4, 5];
// let 
// push() - dizinin sonuna eleman ekler
dizi.push(6);

// pop() - dizinin sonundaki elemanı çıkarır
dizi.pop();

// shift() - dizinin başındaki elemanı çıkarır
dizi.shift();

// unshift() - dizinin başına eleman ekler
dizi.unshift(0);

// splice() - dizinin ortasından eleman(lar) çıkarır veya ekler
dizi.splice(2, 1); // 2. indeksten 1 eleman çıkar

// slice() - dizinin bir kısmını kopyalar
let yeniDizi = dizi.slice(1, 3); // 1. ile 3. indeks arasını kopyalar

// concat() - dizileri birleştirir
let dizi2 = [6, 7, 8];
let birlesikDizi = dizi.concat(dizi2);

// filter() - belirli bir koşulu sağlayan elemanları filtreler
let filtreliDizi = dizi.filter(item => item > 2);

// includes() - dizinin belirli bir elemanı içerip içermediğini kontrol eder
let varMi = dizi.includes(3);

// indexOf() - dizideki bir elemanın indeksini bulur
let indeks = dizi.indexOf(4);
