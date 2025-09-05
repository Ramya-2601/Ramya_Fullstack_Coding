function upperCase(str){
   
    let result=
    {
        originalText:str,
       upper: str.toUpperCase()
    }
  return result;
}
let UppercaseResult=upperCase("Hello Ramya");
console.log(UppercaseResult);

function lowerCase(str){
  let output=
  {
originalText:str,
lower:str.toLowerCase()
  }
  return output;
}
let lowerCaseResult=lowerCase("FIRST JAVASCRIPT CODE");
console.log(lowerCaseResult);

function strlength(){
  let str="Have a wonderful day";
  let output={
originalText:str,
stringlength:str.length
  }
  return output;
  
}
let stringLengthResult=strlength()
console.log(stringLengthResult);

function strcharAt(){
  let str="Happy Sunday";
  let output={
    originalText:str,
    stringchar:str.charAt(6)

    }  

    return output;                                              
}
let StringCharResult=strcharAt();
console.log(StringCharResult);

function sliceWord(){
  let str="Have a Good Day"
  let output={
    originalText:str,
    stringSlice:str.slice(5,14)

  }
  return output;
}
let stringSliceResult= sliceWord();
console.log(stringSliceResult);

function textTrim(){
  let str="     Happy Onam   !!!!   :)  "
  let output={
    originalText:str,
    stringTrim:str.trim().repeat(10)
  }
  return output;
}
let stringTrimResult=textTrim();
console.log(stringTrimResult);

function  textSbstr(){
  let str="All our dreams can come true, if we have the courage to pursue them"
  let output={
    originalText:str,
    subString:str.substring(8,16),
    subString1:str.substr(15,5),
    splitString:str.split(","),
  }
  return output;
}
let stringSubStringResult=textSbstr();
console.log(stringSubStringResult);

function textIndexof(){
  let str="All our dreams can come true, if we have the courage to pursue them"
  let output={
    originalText:str,
    stringIndexof:str.indexOf('d'),
    stringLastIndex:str.lastIndexOf('c'),
    stringinclude:str.includes("dreams"),
    stringStart:str.startsWith('All'),
    stringEnd:str.endsWith('hello'),

  }
  return output;
}
let stringResult=textIndexof();
console.log(stringResult);
