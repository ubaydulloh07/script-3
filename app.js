// birinchi algorytm

alert("birinchi algaritm boshlandi");

let a = +prompt("1-sonni kiriting:");
let b = +prompt("2-sonni kiriting:");
let c = +prompt("3-sonni kiriting:");

let max = a;

if (b > max) {
  max = b;
}

if (c > max) {
  max = c;
}

console.log("Eng katta son:", max);
alert("Eng katta son: " + max);

//birinchi algorytm end

// ikkinchi algorytm

alert("ikkinchi algaritm boshlandi");

let m = +prompt("1-sonni kiriting:");
let n = +prompt("2-sonni kiriting:");
let o = +prompt("3-sonni kiriting:");

let sumAB = m + n;
let sumAC = m + o;
let sumBC = n + o;

let maxSum = Math.max(sumAB, sumAC, sumBC);

let result;
if (maxSum === sumAB) {
  result = `m: ${m} va n: ${n}`;
} else if (maxSum === sumAC) {
  result = `m: ${m} va o: ${o}`;
} else {
  result = `n: ${n} va o: ${o}`;
}

console.log("Eng katta yig'indisi bor sonlar:", result);
alert("Eng katta yig'indisi bor sonlar: " + result);

// ikkinchi algorytm end

// uchinchi algorytm

alert("uchinchi algaritm boshlandi");
let N2 = parseInt(prompt("Sonni kiriting:"));

if (N2 === 0) {
  console.log("Son 0 ga teng");
  alert("Son 0 ga teng");
} else if (N2 > 0 && N2 % 2 === 0) {
  console.log("Musbat juft son");
  alert("Musbat juft son");
} else if (N2 > 0 && N2 % 2 !== 0) {
  console.log("Musbat toq son");
  alert("Musbat toq son");
} else if (N2 < 0 && N2 % 2 === 0) {
  console.log("Manfiy juft son");
  alert("Manfiy juft son");
} else if (N2 < 0 && N2 % 2 !== 0) {
  console.log("Manfiy toq son");
  alert("Manfiy toq son");
}

// uchinchi algorytm end

// tortinchi algorytm

alert("tortinchi algaritm boshlandi");
const ones = [
  "",
  "bir",
  "ikki",
  "uch",
  "to'rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to'qqiz",
];
const tens = [
  "",
  "o'n",
  "yigirma",
  "o'ttiz",
  "qirq",
  "ellik",
  "oltmis",
  "yetmis",
  "sakson",
  "to'qson",
];
const hundreds = [
  "",
  "bir yuz",
  "ikki yuz",
  "uch yuz",
  "to'rt yuz",
  "besh yuz",
  "olti yuz",
  "yetti yuz",
  "sakkiz yuz",
  "to'qqiz yuz",
];

function numberToWords(num) {
  if (num < 1 || num > 999 || num) {
    prompt("1 dan 999 gacha bo'lgan son kiriting:");
  }

  const yuzlik = Math.floor(num / 100);
  const onlik = Math.floor((num % 100) / 10);
  const birlik = num % 10;

  let result = "";

  if (yuzlik > 0) {
    result += hundreds[yuzlik] + " ";
  }

  if (onlik === 1) {
    const teenNumbers = [
      "o'n",
      "o'n bir",
      "o'n ikki",
      "o'n uch",
      "o'n to'rt",
      "o'n besh",
      "o'n olti",
      "o'n yetti",
      "o'n sakkiz",
      "o'n to'qqiz",
    ];
    result += teenNumbers[birlik];
  } else {
    if (onlik > 1) {
      result += tens[onlik] + " ";
    }
    result += ones[birlik];
  }

  return result.trim();
}

const number = parseInt(prompt("1 dan 999 gacha bo'lgan sonni kiriting:"));
const words = numberToWords(number);

if (words) {
  console.log("So'z shakli:", words);
  alert("So'z shakli: " + words);
}

// tortinchi algorytm end

// besinchi algorytm
alert("besinchi algaritm boshlandi");
const month = parseInt(prompt("Oy raqamini kiriting (1-12):"));

let days;

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  days = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  days = 30;
} else if (month === 2) {
  const year = new Date().getFullYear();
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    days = 29;
  } else {
    days = 28;
  }
} else {
  days = "Noto'g'ri oy raqami kiritildi";
}

alert(`${month}-oyda ${days} kun bor.`);
console.log(`${month}-oyda ${days} kun bor.`);

// besinchi algorytm end
