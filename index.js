//const mqtt = require('mqtt'); 

//One way authentication : 

//const protocol =  'mqtts';
//const host = 'broker.emqx.io'; 
//const port = '8883';
//const clientId = `mqtt_${Math.random().toString(16).slice(3)}`; 
//const connectUrl = `${protocol}://${host}:${port}`; 
//const fs = require('fs'); 
//const client = mqtt.connect(connectUrl, {
//    clientId, 
//    clean: true, 
//    connectTimeout: 4000, 
//    username: 'emqx', 
//    password: 'public', 
//    reconnectPeriod: 1000,
//if the server is using a self-signed certificate , we need to pass the CA
//    ca: fs.readFileSync('./broker.emqx.io-ca.crt'),
//}); 



//Two-way authentication 

//const fs = require('fs'); 
//const { error, Console } = require('console');

//const protocol = 'mqtts'; 
//const host = 'borker.emqx.io'; 
//const port = '8883'; 
//const clientId = `mqtt_${protocol}://${host}:${port}`; 

//const connectUrl = `${protocol}://${host}:${port}`; 

//const client = mqtt.connect(connectUrl , {
//    clientId , 
//    clean: true, 
//    connectTimeout: 4000, 
//    username: 'emqx', 
//     password: 'public', 
//    reconnectPeriod: 1000, 
    //Enable the SSL/TLS, whether a client verifies the server's certificate chain and host name
//    rejectUnauthorized: true, 
    //If we're using Two-way authentication, we need to pass the CA, client certificate , and client private key.
//    ca : fs.readFileSync('./broker.emqx.io-ca.crt'), 
//    key: fs.readFileSync('/client.key'), 
//    cert: fs.readFileSync('./client.crt'), 
//})


//Subscribe to an MQTT Topic 
// const topic = '/nodejs/mqtt'

// client.on('connect' , () => {
//    console.log('Connected');
//    client.subscribe([topic], () => {
//        console.log(`Sunscribe to topic '${topic}'`);
//    })
// })

// client.once('message' , (topic, payload) => {
//    console.log('Received Message:' , topic, payload.toString())
// })

 //Publish MQTT Messages
 //client.on('connect' , ()=> {
 //   client.publish(topic , 'nodejs mqtt test', {qos: 0, retrain: false}, (err) => {
 //       if (err) {
 //           console.error(err); 
 //       }
 //   })
// })

 //Disconnect MQTT Connection 
// client.end(); 

 //Force disconnect 
// client.end(true); 

 //Callback for diconnection 
// client.end(false , {} , () => {
//    console.log('client disconnected');
// })

 //Error Handling: 
 //Connection error handling: 

// client.on('error' , (err) => {
//    console.error('connection failed', err); 
// })

 //Reconnection error handling: 

// client.on('reconnect', (err) => {
//    console.error('reconnect failed' ,err); 
// })

 //Subscription error handling: 

// client.on('connect' , ()=> {
//    client.subscribe('topic', subOpts , (err) => {
//        if (err) {
//            console.error('subscription failed', err); 
//        }
//    })
// })

 //Publishing error handling 

// client.on('connect' , ()=> {
//    client.publish('topic', 'hello mqtt', (err) => {
//        if (err) {
//            console.log('publish failed', err); 
//        }
//    })
// })

//------Complete CODE------------
//-----The code for server connection , topic subscription , message publishing, and receiving: 

const mqtt = require('mqtt')

const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${host}:${port}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
})

const topic = '/nodejs/mqtt'

client.on('connect', () => {
  console.log('Connected')

  client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`)
    client.publish(topic, 'nodejs mqtt test', { qos: 0, retain: false }, (error) => {
      if (error) {
        console.error(error)
      }
    })
  })
})

client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
})


 





 



