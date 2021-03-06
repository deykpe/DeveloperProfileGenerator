function generateProfile(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>id: ${data.id} </h1>
        <h2>login: ${data.login}</h2>
        <h3>Location: ${data.location}</h3>
        <h4>URL:
            <a href="${data.url}">Website</a>
        </h4>
        <h5>Followers: ${data.followers}</h5>
        <h6>Following: ${data.following}</h6>
        <img src="${data.avatar}"></img>
        <p>publicRepo: ${data.publicRepo}</p>
        <p>bio: ${data.bio}</p>
        <p> ${data.email}</p>
        <p> ${data.name} </p>
    </body>
    </html>`
} ;
module.exports = generateProfile;