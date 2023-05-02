const  inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Include packages needed for this application
const { readFile, writeFile } =  require ('fs/promises')
// TODO: Create an array of questions for user input
     
      inquirer.prompt([                
                  { type: 'input',
                      message: 'What is the title of your project ?',
                    name: 'title'
                   },
                    {
                    type: 'input',
                    message: 'what is your project discription?',
                    name:'discription',
                   },
                    {
                    type:'list',
                    message: 'Does your application attain a license?',
                    name:'license',
                    choices:['Apache','Boost','BSD','CC0'],
                    
                   },
                   {
                    type:'input',
                    message:'What is your github username?',
                    name:"github username",
                   }, 
                   {
                   
                   type:'input',
                   message:'What is your email adress?',
                   name: "email-address",
                   },
                   {
                    type: 'input',
                    message: 'Please provide input for your credit section:',
                    name: 'credit',
                   },
                   {
                    type: 'input',
                    message: 'please describe how to use this application:',
                    name: 'usage'
                   } ,{
                     type: 'input',
                     message:'What are the step to install this project?',
                     name: 'installation',
                   }
                    
                   ])

.then((data) => {
 const ReadMeData = generateMarkdown(data)
//console.log(np)
writeFile('../README.md',ReadMeData,(err) => err ? console.log(err) : console.log('succesfully created ReadMe!'))
})



                
// TODO: Create a function to write README file
function writetoFile(data) {
    writeFile(README.md,generateMarkdown(data))
}
  



// Function call to initialize app
//init();
