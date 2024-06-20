const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    
    try {

        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'first-file.txt'), 'utf8');
        console.log(data);

        await fsPromises.writeFile(path.join(__dirname,'files','file-created-promise.txt'),data);

    }

    catch(err)
    {
        console.log(err);
    }
}