const fs = require('fs');

//Creating Directory

fs.mkdir('Suzanne', (err) => {

    if (err) throw err;
    
    console.log('Directory has been created');
});


//Checking Directory
/*
if (!fs.existsSync('./Suzanne'))
    {

        fs.mkdir('./Suzanne',(err)=>{

            if (err) throw err;
            
            console.log('Directory created');
            
            
            });
        

    }
    else
    {
        console.log('Directory already exist');
    } 
    
    */
    //Removing Directory
  
    fs.rmdir('Suzanne', (err) => {

        if (err) throw err;
        console.log('Directory has been removed');
    });
  