const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_messages = document.getElementById('error-messages')

form.addEventListener('submit', (e) => {
   // e.preventDefault() um den Submit zu verhindern bei falschen angaben
    e.preventDefault()



   let errors = []

    if(username_input){
        //wenn wir einen usernamen haben dann signup
        errors = getSignupFromErrors(username_input.value, email_input.value, password_input.value, repeat_password_input.value)



    }else{
        //wenn wir keinen usernamen haben sind wir beim login
        errors = getLoginFromErrors(email_input.value, password_input.value)
    }

    if(errors.length > 0){
        //wenn fehler dann submit verhindern
       // e.preventDefault()
        error_messages.innerText = 'FEHLER: ' + errors.join( ",  ")
    }else{
        error_messages.innerText = ''

        if(username_input){
            //form.submit() //wenn alles passt
        window.location.href = "index.html"; //später quiz.html hier einfügen
        }else {
            window.location.href = "profile.html";
        }
        

    }

    
    
})

function getLoginFromErrors(email, password){
    let errors = []

    if(email === '' || email == null)
    {
        errors.push('Email eingeben!')
        email_input.parentElement.classList.add('error')
    }

    if(password === '' || password == null)
    {
        errors.push('Passwort eingeben!')
        password_input.parentElement.classList.add('error')
    }




    return errors; 
    
}

function getSignupFromErrors(username, email, password, repeatPassword){
    let errors = []

    if(username === '' || username == null)
    {
        errors.push('Username eingeben!')
        username_input.parentElement.classList.add('error')
    }
    if(email === '' || email == null)
    {
        errors.push('Email eingeben!')
        email_input.parentElement.classList.add('error')
    }
    if(password === '' || password == null)
    {
        errors.push('Passwort eingeben!')
        password_input.parentElement.classList.add('error')
    }

    if(password.length < 8){
        errors.push('Das Passwort muss mindestens 8 Zeichen lang sein!')
        password_input.parentElement.classList.add('error')
    }
    
    if(repeatPassword === '' || repeatPassword == null)
    {
        errors.push('Passwort eingeben!')
        repeat_password_input.parentElement.classList.add('error')
    }

    if(password != repeatPassword){
        errors.push('Die Passwörter stimmen nicht überein!')
        repeat_password_input.parentElement.classList.add('error')
    }


    return errors; 
    
}


const allInputs = [username_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.parentElement.classList.contains('error'))
            input.parentElement.classList.remove('error')
            error_messages.innerText = ''
    })
});