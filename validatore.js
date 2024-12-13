//Classe dello user
var User = /** @class */ (function () {
    function User(nome, cognome, password, username, email, sesso, data, status) {
        this.nome = '';
        this.cognome = '';
        this.password = '';
        this.username = '';
        this.email = '';
        this.sesso = 0;
        this.dataNascita = '';
        this.status = 1;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
        this.username = username;
        this.email = email;
        this.sesso = sesso;
        this.dataNascita = data;
        this.status = status;
    }
    return User;
}());
var buttR = document.getElementById('register_b');
var buttLogin = document.getElementById('login_b');
var form = document.getElementById('registrazione');
form.addEventListener('submit', function (e) {
    e.preventDefault(); //evito il refresh della pagina 
    // dichiaro una variabile numerico
    // buttR.onclick = function () {
    var valido = 0;
    //VALIDAZIONE DEL NOME
    //nome e label nome
    var nome = document.getElementById('Nome').value;
    var lb_nome = document.getElementById('lb_nome');
    valido += nome != null && nome != "" && controllaRangeStringa(nome, 2, 30) ? 0 : 1;
    console.log("VALIDO", valido);
    if (valido > 0) {
        lb_nome.classList.add("errore");
        console.log(lb_nome, "ramo1", nome);
    }
    else {
        lb_nome.classList.remove("errore");
        console.log(lb_nome, "ramo2", nome);
    }
    //VALIDAZIONE DEL COGNOME
    // cognome e label cognome
    valido = 0;
    var cognome = document.getElementById('Cognome').value;
    var lb_cognome = document.getElementById('lb_cognome');
    valido += cognome != null && cognome != "" && controllaRangeStringa(cognome, 2, 30) ? 0 : 1;
    if (valido > 0) {
        lb_cognome.classList.add("errore");
        console.log(lb_cognome, "ramo1", cognome);
    }
    else {
        lb_cognome.classList.remove("errore");
        console.log(lb_cognome, "ramo2", cognome);
    }
    //VALIDAZIONE DELLO USER
    //prendo il valore dell'input
    valido = 0;
    var user = document.getElementById('user').value;
    valido += user != null && user != "" && controllaRangeStringa(user, 6, 25) ? 0 : 1;
    //prenod la label dello user
    var lb_user = document.getElementById('lb_user');
    if (valido > 0) {
        lb_user.classList.add("errore");
        console.log(lb_user, "ramo1", user);
    }
    else {
        lb_user.classList.remove("errore");
        console.log(lb_user, "ramo2", user);
    }
    //VALIDAZIONE DELL'EMAIL
    // prendo il valore dell'input
    valido = 0;
    var email = document.getElementById('email').value;
    valido += email != null && email != "" && controllaRangeStringa(email, 6, 50) && validaEMail(email) ? 0 : 1;
    ;
    //prendo la label dell'email
    var lb_email = document.getElementById('lb_email');
    if (valido > 0) {
        lb_email.classList.add("errore");
        console.log(lb_email, "ramo1", email);
    }
    else {
        lb_email.classList.remove("errore");
        console.log(lb_email, "ramo2", email);
    }
    //VALIDAZIONE PASSWORD
    // prendo il valore dell'input
    valido = 0;
    var password = document.getElementById('password').value;
    valido += password != null && password != "" && controllaRangeStringa(password, 6, 50) ? 0 : 1;
    //prendo la label della password
    var lb_password = document.getElementById('lb_password');
    if (valido > 0) {
        lb_password.classList.add("errore");
        console.log(lb_password, "ramo1", password);
    }
    else {
        lb_password.classList.remove("errore");
        console.log(lb_password, "ramo2", password);
    }
    //VALIDAZIONE CONFERMA PASSWORD
    //prendo il valore dell'inoput
    valido = 0;
    var password_conf = document.getElementById('password_confirm').value;
    valido += password_conf === password && password_conf != '' && password_conf != null ? 0 : 1;
    var lb_conf = document.getElementById('lb_password_confirm');
    if (valido > 0) {
        lb_conf.classList.add("errore");
        console.log(lb_conf, "ramo1", password_conf);
    }
    else {
        lb_conf.classList.remove("errore");
        console.log(lb_conf, "ramo2", password_conf);
    }
    //VALIDAZIONE DELLA DATA DI NASCITA
    //prendo il valore dell'input
    valido = 0;
    var dataNascita = document.getElementById('dataNascita').value;
    valido += (dataNascita != null && dataNascita != "") ? 0 : 1;
    var lb_date = document.getElementById('lb_dataNascita');
    if (valido > 0) {
        lb_date.classList.add("errore");
        console.log(lb_date, "ramo1", dataNascita);
    }
    else {
        lb_date.classList.remove("errore");
        console.log(lb_date, "ramo2", dataNascita);
    }
    //VALIDAZIONE DEL SESSO
    //prendo il valore dell'input
    valido = 0;
    var sesso = document.getElementById('scelta_genere').value;
    valido += (sesso != null && sesso != '') ? 0 : 1;
    var lb_select = document.getElementById('lb_select');
    if (valido > 0) {
        lb_select.classList.add("errore");
        console.log(lb_select, "ramo1", sesso);
    }
    else {
        lb_select.classList.remove("errore");
        console.log(lb_select, "ramo2", sesso);
    }
    var nuovoUtente = new User(nome, cognome, password, user, email, sesso != 'female' ? 1 : 0, dataNascita, 1);
    console.log(nuovoUtente.nome + nuovoUtente.cognome);
    // ######################################    FUNZIONI UTILI    ##########################################################
    /**
     * Funzione per la validazione delle e-mail
     * @param string mail
     * @returns boolean
     */
    function validaEMail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
            return true;
        }
        else {
            return false;
        }
    }
    function validaOption(par) {
        var x;
        if (par != null && par != '' && par == 'male') {
            x = 1;
        }
        else if (par != null && par != '' && par == 'female') {
            x = 0;
        }
        return x;
    }
    /**
     *
     * @param string stringa
     * @param number min
     * @param number max
     * @returns boolean
     */
    function controllaRangeStringa(stringa, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        var rit = 0;
        var n = stringa.length;
        if (min != null && n < min) {
            rit++;
        }
        if (max != null && n > max) {
            rit++;
        }
        return (rit == 0);
    }
});
