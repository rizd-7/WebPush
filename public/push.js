var push = require('web-push');

let vapIdkeys = {
    publicKey: 'BP2HyHF4_PpEGPwdIjK5MMbVNsIZuh5MdpVem4gzPTni0TwqxeXkDKeTwOrXMvKxepNG5y-CraKvuR7MehTYNL0',
    privateKey: 'uk6ZlKGsW4wkB4mlpaitgbX4X93DyQn5hLqp2IL10dk'
}

push.setVapidDetails('mailto:test@code.com',vapIdkeys.publicKey,vapIdkeys.privateKey)

let sub ={

};

push.sendNotification(sub,'test message')
