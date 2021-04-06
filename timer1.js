const args = process.argv.slice(2);
// console.log(args);

const timer = sec => {
	if (sec.length  === 0 || !sec) return;
	
	let timer = 0;
	for (let t of sec) {
		timer = t * 1000;
		if (timer < 0) continue;
		if (isNaN(timer)) continue;
		setTimeout(() => {
			process.stdout.write('.');
		}, timer);
	}
	setTimeout(() => {process.stdout.write(`\n`)}, timer)
}

timer(args)