//mkdir
//writeFile
//append
//read
//rename

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), 
//         (err) => {
//             if (err) throw new Error(err);
//             console.log('Папка создана')
//         });

fs.writeFile(path.join(__dirname, 'notes', 'hello.txt'),
                        'Hello world, bitch!',
                        (err) => {
                            if (err) throw new Error(err);
                            console.log('Файл создан и записан');

                            fs.appendFile(path.join(__dirname, 'notes', 'hello.txt'),
                                        ' Add text to file',
                                        (err) => {
                                            if (err) throw new Error(err)
                                            console.log('append to file');
                                            
                                            fs.readFile(path.join(__dirname, 'notes', 'hello.txt'),
                                            'utf-8',
                                            (err,data) => {
                                                if (err) throw new Error( err);

                                                console.log(data);                                            
                                            })
                                        });

                        });

/*
fs.rename(path.join(__dirname, 'notes', 'hello.txt'),
            path.join(__dirname, 'notes', 'notes.txt'),
            (err) => {
                if (err) throw new Error(err);
                console.log('Файл переименнован')
            });
*/