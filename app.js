/*
    Librerias de node para iniciar
*/

const express = require("express");

const app = express();
const cors = require('cors')
    /*
        Libreria para el envio de mails
    */
var nodemailer = require('nodemailer');



app.use(express.json());
app.use(cors())


/*
    Crea un servicio que recibe los datos para enviar un correo
    la url es http://localhost:puerto/mail
*/
app.post(("/mail"), async(req, res) => {

    //El email desde donde se va a enviar
    const frommail = req.body.frommail

    //La contraseña del email
    const password = req.body.password

    //El email destinatario
    const tomail = req.body.tomail

    //el cliente

    const cliente = req.body.cliente

    //Gestiona el inicio de sesion para el envio del correo
    var transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: frommail,
            pass: password
        }
    });

    /*
      Envia los datos del correo
    */
    var mailOptions = {
        //Remitente
        from: frommail,
        //Destinatario
        to: tomail,
        //Asunto
        subject: 'Contacto Nuevo',
        //Cuerpo del correo
        text: "Datos del contacto: Nombre: " + cliente.name + ",   Apellido:" + cliente.lastname + ",   Telefono:" + cliente.phone + ",   Email:" + cliente.email + ",   Mensaje:" + cliente.message + " "
            //En caso de necesitar un html se descomenta esto
            // html: '<h1>Datos del contacto</h1> <p>Nombre: " + cliente.name + ", </p>'        
    };

    /* 
      Envia el correo acorde a todo lo definido anteriormente
      
    */
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.json({
                msg: 'fail'
            });
        } else {
            res.json({
                msg: 'success'
            })
        }
    });

})

/*
    Levanta el servidor para escuchar en el puerto 3001, esto debe de ir en la url 
     la url es http://localhost:3001/mail
*/
app.listen(3001, () => {
    console.log("Server is Running");
});