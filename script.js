let pahoConfig = {
    hostname: "broker.hivemq.com",  //The hostname is the url, under which your FROST-Server resides.
    port: "8000",           //The port number is the WebSocket-Port,
                            // not (!) the MQTT-Port. This is a Paho characteristic.
    clientId: "clientId-epaDbdSeE2"    //Should be unique for every of your client connections.
}

client = new Paho.MQTT.Client(pahoConfig.hostname, Number(pahoConfig.port), pahoConfig.clientId);
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

client.connect({
    onSuccess: onConnect
});



function onConnect() {
// Once a connection has been made, make a subscription and send a message.
    console.log("Connected with Server");
    client.subscribe('testtopic/7ZW5M0/StudentGroup_15/angle');
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    console.log("onMessageArrived:" + message.payloadString);
    let j = message.payloadString;
    handleMessage(j);
}

function handleMessage(message) {
    if (message != null || message != undefined) {
           console.log(message)
           document.getElementById("myspan").textContent=String(message);
    }
}