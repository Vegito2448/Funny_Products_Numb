// print product talbe of 5(five)
console.clear();

const { createFile } = require('./helpers/products');
const argv=require('./config/yargs');
const colors = require('colors');
// option ('l')
// listar
// boolean
// default:false




createFile(argv.b,argv.l,argv.h)
	.then((nameFile) => console.log(nameFile, 'created'))
	.catch((err) => console.log(err));


// const [, , arg3 = `base=5`] = process.argv;

// const [, base = 5] = arg3.split('=');

// const base = 12;


// console.log(process.argv);
// console.log(base);