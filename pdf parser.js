const fs=require('fs')
const pdfparse=require('pdf-parse')

const pdffile = fs.readFileSync('Sample.pdf')
//getting information
pdfparse(pdffile).then(function(data){
    const objdata=JSON.parse(data.text);
    console.log(objdata);
})