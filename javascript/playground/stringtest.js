//https://javascript.info/string#searching-for-a-substring

//let h = `Hello World`;

// console.log(h[0]);
// console.log(h.at(1));
// console.log(h.at(h.length - 1));
// console.log(h.at(-2));

// for (const char of h) {
//     console.log(char)
// }

// const k = h.substr(1,h.length - 2);
// console.log(k);

// console.log("Interface".toLowerCase());
// console.log("Interface".toUpperCase());

// let str = "Widget with id";

// console.log("Widget",str.indexOf("Widget"));
// console.log("widget",str.indexOf("widget"));
// console.log("id",str.indexOf("id"));
// console.log("id", str.indexOf("id", 2));

// let str = `test`;
// console.log(str.split(``));

// let str2 = [`Bilbo`,`Gandalf`, `Nazgul`];
// console.log(str2.join(`;`));


// let str = `as sly as a fox, as strong as an ox`;
// let target = `as`;
// let pos = 0;

// while(true) {
//     let foundPos = str.indexOf(target, pos);
//     if(foundPos == -1) break;
//     console.log(`found at ${foundPos}`) ;
//     pos = foundPos + 1;
// }


// let str = `as sly as a fox, as strong as an ox`;

// console.log(str.slice(2,4));

// let str = ``;

// for(let i = 65; i<= 220; i++) {
//     str += String.fromCodePoint(i);
// }

// console.log(str);

// function ucFirst(str) {
//    return str[0].toUpperCase() + str.slice(1);
    
// }

// console.log(ucFirst("hello"));


// function checkSpam(str) {
//     let danger = [`viagra`, `xxx`];
//     let lowerStr =  str.toLowerCase();

//     for(let i = 0; i <= danger.length; i++) {
//         if (lowerStr.includes(danger[i])) return true;
//     }

//     return false;
// }

// let s = [
//     checkSpam(`buy ViAgRA now`),
// checkSpam(`free xxxxx`),
// checkSpam(`innocent rabbit`),
// ]

// console.log(s);

function truncate(str1, maxlength) {
        let str = str1 + ``;

        if(str.length <= 20) {
            return str;
        }
        
      return  str.slice(0,19) + "…";
}

let r = [
    truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…" ,
truncate("Hi everyone!", 20) == "Hi everyone!" ,
];

console.log(r);
