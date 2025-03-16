import url from "url";
const exampleurl=new URL('https://example.org');
console.log(exampleurl);
console.log(exampleurl.href)
exampleurl.pathname="/ramesh/expriences/"
console.log(exampleurl.href);
exampleurl.search="!singga?1";
exampleurl.hash="#skill";
exampleurl.password=1500;
console.log(exampleurl);
console.log(exampleurl.href)



const gec=new URL("https://hte.rajasthan.gov.in/college/gecjaipur");
// console.log(gec);