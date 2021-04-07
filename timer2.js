const timer = () => {
	const inputRange = {1:'\u0031', 2:'\u0032', 3:'\u0033', 4: '\u0034', 5:'\u0035', 6: '\u0036', 7: '\u0037', 8: '\u0038', 9:'\u0039'} ;
	const stdin = process.stdin;
  stdin.setRawMode(true);
	stdin.setEncoding('utf8');

	stdin.on('data', (key) => {
		if (key === '\u0062') {
			process.stdout.write('.\n');
		};
		if (key === '\u0003') {
			process.stdout.write('Thanks for using me ciao!\n');
			process.exit();
		}
	});
	let timer = 0;
	for (let i in inputRange) {
		stdin.on('data', (key) => {
			if (key === inputRange[i]) {
				timer = i * 1000;
				process.stdout.write(`setting timer for ${i} seconds\n`);
				setTimeout(() => {
					process.stdout.write(`${i} sec \n`);
				}, timer);
			}
		})
	}
};

timer();
