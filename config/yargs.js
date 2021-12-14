const argv = require ('yargs')
.options('b',{
	alias: 'base',
	type:'number',
	demandOption:true,
    describe:'is te base of products'
}).option('l',{
		alias:'listar',
		type:'boolean',
		default:false,
        describe:'show the table of products'
}).option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'numbers of products to show :D'
}).check((argv,options)=>{
	if(isNaN(argv.b)){
		throw 'Base has to be a number';
	}
		return true;
}).argv;

module.exports= argv;