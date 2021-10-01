const fs = require('fs');
const util = require('util');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const pStats = util.promisify(fs.stat)

const deep = async (dirname) => {
    try {
        const filelist = await readDir(dirname);
        for(i=0; i<filelist.length; i++) {
            const filename = filelist[i]
            const filepath = path.join(dirname, filename)
            const stat = await pStats(filepath)
            
            if (stat.isDirectory()){
                // console.log(`==${filepath} is directory`)
                deep(filepath)
            } else {
                const extname = path.extname(filename); 
                if (extname == ".js") {
                    console.log(filepath)
                }
            }
        }
    } catch (err) {
        console.error(err);
    }
}
deep("test")