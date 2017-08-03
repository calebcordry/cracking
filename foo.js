function dowork () {
    // now we can read/parse input
    const lines = input.split('\n');
    let comment = false;
    let start = 0;
    
    for (let line of lines) {
        for (let i = 0; i <= lines.length; i++) {
            const char = line[i];
            if (char === '/') {
                if (line[i + 1] === '/') {
                    console.log(line.slice(i));
                }
                if (line[i + 1] === '*') {
                    comment = true;
                    start = i;
                }
                
                if (comment) {
                    if (char === '*' && line[i + 1] === '/') {
                        comment = false;
                        console.log(line.slice(start, i + 1));
                    }
                }
            }
        }
        
        if(comment) {
            console.log(line);
        }
        
        start = 0;
    }
});