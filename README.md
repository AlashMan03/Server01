# Server01
```
El proyecto consiste en la creación del servidor, para el envio de correos electronicos
a través del formulario de la pagina web Impresiones. 
```

### Librerias
```
Brevemente se hablara de las librerias utilizadas para la construcción de este proyecto
```

### NodeMailer
```
Este libreria se inserto principalmente para el envio de correos electronicos. 
npm install nodemailer
Url: https://www.npmjs.com/package/nodemailer
```
## Detalles del servidor
```
Puerto de entrada: 3001
metodo para correr el servicio: node app.js
```
## Data que requiere el servicio  
```
{
	"frommail": "correo electronico de salida",
	"password": "contraseña del correo de salida",
	"tomail": "correo electronico de entrada",
	"cliente":{
		"name":"Nombre del cliente",
		"lastname":"Apellido del cliente",
		"phone":"Telefono del cliente",
		"email":"Email del cliente",
		"message":"Mensaje del cliente"
	}
}
```