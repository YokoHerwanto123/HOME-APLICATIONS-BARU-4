/*const endpoint = "http://192.168.133.172";

function getLampuDapur() {
    fetch(endpoint + "/Dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            LampuDapur.style.backgroundColor = "blue";
            DapurImage.src = "./assets/Lampu-On.png";
        } else {
            LampuDapur.style.backgroundColor = "darkblue";
            DapurImage.src = "./assets/Lampu-Off.png";
        }
    });
}

function setLampuDapur() {
    fetch(endpoint + "/Dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}





function setLampuTeras() {
    LampuTeras.style.backgroundColor = "blue";
    TerasImage.src = "./assets/Lampu-On.png";
}

function setLampuKamar1() {
    LampuKamar1.style.backgroundColor = "blue";
    kamar1Image.src = "./assets/Lampu-On.png";
}

getLampuDapur(); */

const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt', {
    reconnectPeriod: 5000 
});

client.on('connect', function () {
    console.log('Connected to MQTT broker');
    document.getElementById('status').innerText = "Status: terhubung";
});

client.on('disconnect', function () {
    console.log('Disconnected from MQTT broker');
    document.getElementById('status').innerText = "Status: terputus";
});

client.on('reconnect', function () {
    console.log('Reconnecting to MQTT broker...');
    document.getElementById('status').innerText = "Status: Reconnecting...";
});

function sendData(message) {
    if (client.connected) {
        client.publish('Dapur', message);
        console.log(`Message '${message}' sent to MQTT`);
    } else {
        console.log('Cannot send message, not connected to MQTT broker');
    }
}
