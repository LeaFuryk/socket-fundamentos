
      var socket = io();

      socket.on('connect', function(){
        console.log('Conectado al servidor');
      })
      //El ON es para escuchar informaciom
      socket.on('disconnect', function(){
        console.log('Se perdio la conexion al servidor');
      });

      //El EMIT es para enviar informacion
      socket.emit('enviarMensaje', {
        usuario: 'Fernando',
        mensaje: 'Hola Mundo'
      }, function(resp){
        console.log('Respuesta Servidor: ',resp)
      });

      //Escuchar informacion
      socket.on('enviarMensaje', function(mensaje){
        console.log('Servidor: ',mensaje)
      })
