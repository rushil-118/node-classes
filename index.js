const fs = require('fs');
const path = require("path");

/*
Reading and Writing to a file
const data = fs.readFileSync('file.txt', 'utf8');
console.log("" + data);
fs.appendFileSync('file.txt', '\nClass is going on');

*/

/*
Making a directory and removing a directory
fs.mkdir('dir1', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('dir formed');
});

fs.rmdir('dir1', {recursive : true} , (err) => {
    if (err) {
        console.log(err);
    }
    console.log('dir removed');
})

*/

/*
copying a file content to another file
fs.copyFileSync('file.txt', 'newFile.txt');

renaming a file
fs.rename('file.txt', 'new-file.txt', (err)=>{
    if (err) {
        console.log(err);
    }
    console.log('file renamed');
})

*/

// const file_path = '/home/rushil/Desktop/Development/nodePractice/new-file.txt'
// const folder_path = '/home/rushil/Desktop/Development/nodePractice/dir1';

// const nPath = path.join(__dirname, 'new-file.txt');
// console.log(nPath);

// console.log(path.basename(file_path));
// const destination_path = path.join(folder_path, path.basename(file_path));

// fs.copyFile(file_path, destination_path, (err) => {
//     if (err) {
//         console.error(err);
//     } 
//     console.log('File copied successfully!');
// });

// const dirname = path.dirname(p1);
// console.log(dirname);

// const extension = path.extname(p1);
// console.log(extension);

// fs.mkdir('dir1', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log('dir formed');
// });


const http = require('http');
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/login') {
        res.write('<html><head><title>Login Page</title></head><body><h1>Harsh, login!</h1></body></html>');
    } else {
        res.write('<html><head><title>Node JS Class</title></head><body><h1>Harsh, hello!</h1></body></html>');
    }
    res.end();
})

const port = 3000;
const host = 'localhost';
server.listen(port,host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});