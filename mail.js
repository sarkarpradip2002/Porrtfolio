var nodemailer=require('nodemailer');
const express=require('express');
const path=require('path');
var cors = require('cors');
const { urlencoded } = require('express');
 
const app=express();
app.use(cors())
const port=5200;
app.use(express.json());
app.use('/static',express.static('static'));
app.use(urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/mail',async(req,res)=>{
    const send=req.body.email;
    try{
var transport=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sarkar.pradip2002@gmail.com',
        pass: 'qfnt nrtp aqfh qday',
    },
});
var transportme=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sarkar.pradip2002@gmail.com',
        pass: 'qfnt nrtp aqfh qday',
    },
});

var mailoptions= {
    from: 'sarkar.pradip2002@gmail.com',
    to: send ,
    subject: 'Response from Pradip',
    text: `Hello ${req.body.name}!!!
    
          Thanks for checking my protfolio website!!

          Thanks for dropping the message , I will check your message soon and get back to you
           
          If you need to contact me urgently ,Call me now-9330338139`,
};
var mailoptionsme= {
    from: 'sarkar.pradip2002@gmail.com',
    to:  'sarkar.pradip2002@gmail.com',
    subject: `Response from ${req.body.name}`,
    text: `${req.body.message}`,
};

 transport.sendMail(mailoptions, function(error,info){
    if(error)
    {
        res.send("Failed to sent the mail");
    }
    else{
        res.send("Email sent successfully");
    }
});
transportme.sendMail(mailoptionsme, function(error,info){
    if(error)
    {
        res.send("Failed to sent the mail");
    }
    else{
        res.send("Email sent successfully");
    }
});
    }
    catch(err){
        res.send(err);
    }
})

app.listen(process.env.PORT || port);