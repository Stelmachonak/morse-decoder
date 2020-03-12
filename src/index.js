const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let morse = "";
  let transform = "";
  expr = expr.split("");
  let outStr = "";

  for (let i = 0; i < expr.length; i += 10) {
    let Aexpr = expr.slice(i, i + 10);
    if (Aexpr[0] == "*") {
      outStr += " ";
      continue;
    }
    for (let j = 0; j < Aexpr.length; j += 2) {
      if (Aexpr[j] == "1") {
        transform = Aexpr[j] + Aexpr[j + 1];
      }
      if (transform === "10") {
        morse += ".";
      }
      if (transform == "11") {
        morse += "-";
      }
      transform = "";
    }

    outStr += MORSE_TABLE[morse];
    morse = "";
  } return outStr;
}

module.exports = {
  decode
};
