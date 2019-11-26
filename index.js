const fs = require('fs');
const inquirer = require('inquirer');
const api = require('./api');
const generateProfile = require('./generateProfile');

//const open = require("open");
//const convertFactory = require("electron-html-to");
//list of questions // array of JSON object
const questions = [
    { 
    type: 'input',
    name: 'github',
    message: 'enter github username',
    }

    // {
    // type: 'list',
    // name: 'color',
    // message: 'choose preferred color',
    // choices: ['red', 'blue', 'black', 'green'],
    // }
];

inquirer.prompt(questions)
.then(response => {
    api.getUserData(response.github).then(reply => {
        // console.log(reply);
        console.log('login', reply.data.login);
        console.log('id', reply.data.id);
        console.log('public_repos', reply.data.public_repos);
        console.log('followers', reply.data.followers);
        console.log('following', reply.data.following);
        console.log('img', reply.data.avatar_url);
        var data = {
            login: reply.data.login,
            name: reply.data.name,
            id: reply.data.id,
            avatar: reply.data.avatar_url,
            email: reply.data.email,
            bio: reply.data.bio,
            followers: reply.data.followers,
            following: reply.data.following,
            location: reply.data.location,
            url: reply.data.url,
            publicRepo: reply.data.public_repos
        }
        return generateProfile(data)
    })

    .then(html => {
        
        fs.writeFile("index.html", html, function(err) {

  
            if (err) {
              return console.log(err);
            }
          
            
            console.log("HTML Generated");
          
          });
        //console.log(html);
       // const conversion = convertFactory({
        //    converterPath: convertFactory.converters.PDF
        //  });
  
         // conversion({ html }, function(err, result) {
         //   if (err) {
          //    return console.error(err);
          //  }
  
         //   result.stream.pipe(
         //     fs.createWriteStream(path.join(__dirname, "resume.pdf"))
          //  );
         //   conversion.kill();
          });
  
        //  open(path.join(process.cwd(), "resume.pdf"));
       
    });
//})

