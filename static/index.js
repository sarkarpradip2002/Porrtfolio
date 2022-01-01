var width=window.innerWidth;
collapse=()=>{
    const navbar=document.getElementById('navitems');
    const nav=document.getElementById('nav');
    const hamberger=document.getElementById('hamberger');
    const home=document.getElementById('home');
    const about=document.getElementById('about');
    const edu=document.getElementById('education');
    const projects=document.getElementById('projects');
    const contact=document.getElementById('contact')
    const img=document.createElement('img');
         img.src='../static/background.jpeg';
         img.id='homeimage';
    if(navbar.className==='navitems' ){
         navbar.classList.remove('navitems');
         nav.classList.remove('originalnav');
         home.classList.remove('originalhome');
         edu.classList.remove('originaledu');
         projects.classList.remove('projects');
         about.classList.remove('about');
         contact.classList.remove('contact');
         hamberger.classList.remove('fa-window-close');
         hamberger.classList.add('fa-bars');
         nav.classList.add('changenav');
         navbar.classList.add('changenavbar');
         about.classList.add('changeabout');
         projects.classList.add('changeprojects');
         edu.classList.add('changeedu');
         contact.classList.add('changecontact');
         home.classList.add('changehome');
         home.appendChild(img);
    }
    else{
        const homeimg=document.getElementById('homeimage');
        navbar.classList.remove('changenavbar');
        nav.classList.remove('changenav');
        home.classList.remove('changehome');
        contact.classList.remove('changecontact');
        projects.classList.remove('changeprojects');
        edu.classList.remove('changeedu');
        about.classList.remove('changeabout');
        home.removeChild(homeimg);
        hamberger.classList.remove('fa-bars');
        navbar.classList.add('navitems');
        nav.classList.add('originalnav');
        about.classList.add('about');
        edu.classList.add('originaledu');
        projects.classList.add('projects');
        contact.classList.add('contact');
        home.classList.add('originalhome');
        hamberger.classList.add('fa-window-close');
    }
}

const projects=document.querySelectorAll('.projectdivs');

for (const project in projects){
projects[project].addEventListener("mouseover", function( event ) {
    const i=projects[project].lastElementChild;
    i.style.display='block';
}
)
}

function chat(){
    const i=document.getElementById('chatlink');
    i.style.display='none';
}

function tic(){
    const i=document.getElementById('ticlink');
    i.style.display='none';
}

function notes(){
    const i=document.getElementById('noteslink');
    i.style.display='none';
}

function dino(){
    const i=document.getElementById('dinolink');
    i.style.display='none';
}

function news(){
    const i=document.getElementById('newslink');
    i.style.display='none';
}

function windows(){
    const i=document.getElementById('windowslink');
    i.style.display='none';
}

function dogs(){
    const i=document.getElementById('dogslink');
    i.style.display='none';
}

function analog(){
    const i=document.getElementById('analoglink');
    i.style.display='none';
}

function word(){
    const i=document.getElementById('wordlink');
    i.style.display='none';
}

// async function sendmail(){
//     const name=document.getElementById('givenname').value;
//     const mail=document.getElementById('givenmail').value;
//     const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const message=document.getElementById('givenmessage').value;
//     const response=await fetch(`http://localhost:5200/mail`, {
//          method: 'POST',
//          headers: {
//            'Content-Type': 'application/json',
//          },
//          body: JSON.stringify({name,message,mail}),
//        })
//     console.log(response)
//     if(mail.match(regexEmail)){
//         alert("Email sent successfully!!!")
//     }
//     else{
//         alert("Write the correct email to sent !!!");
//     }
// }