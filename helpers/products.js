const colors=require('colors');
const fs = require('fs');
const createFile = async (base,listar=false,hasta) => {
	try {
		let exit = '';

		for (let index = 1; index <=hasta; index++) {
			exit += `${base} x ${index} = ${base * [index]}\n`;
		}
		if (listar) {
			console.log(colors.rainbow(exit));
		}
		fs.writeFileSync(`./exit/table-${base}.txt`, exit);
		return `table-${base}.txt\n`;
	} catch (error) {
		throw error;
	}
};

// const getFile = async (base) => {
// 	try {
// 		const products = await createFile(base);
// 		return products;
// 	} catch (error) {
// 		throw error;
// 	}
// };

module.exports = {
	createFile
};
