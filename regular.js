function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const getId = id => document.getElementById(id);

const check = () => {
    const mailInput = getId('mail');
    const valid = getId('valid');
    const inValid = getId('invalid');
    valid.innerText = '';

    inValid.innerText = '';

    const mail = mailInput.value;
    mailInput.value = '';
    console.log(mail);


    const mailResult = getId('mail-result');
    mailResult.innerText = '';
    if (!mail) {
        mailResult.innerText = 'Please write a mail to validate';
        return;
    }

    mailResult.innerText = `
    your mail:" ${mail} " is 
    `;
    const isValid = validateEmail(mail);

    if (isValid) {
        valid.innerText = 'Valid';
    }
    else {
        inValid.innerText = 'not valid';
    }



}



console.log(validateEmail('anystring@anystring.anystring'));