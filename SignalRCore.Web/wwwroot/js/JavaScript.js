$(document).ready(function () {

    const BroadcastMessageToAllClientHubMethodCall = "BroadcastMessageToAllClient";

    const ReceviceMessageForAllClientClintMethodCall = "ReceviceMessageForAllClient";
    const connection = new signalR.HubConnectionBuilder().withUrl("/exampleHub").configureLogging(signalR.LogLevel.Information).build();

    function start() {
        connection.start().then(() => console.log("Hub ile bağlantı kuruldu"));
    }
    try {
        start();
    } catch {
        setTimeout(() => start(), 5000);
    }
    connection.on(ReceviceMessageForAllClientClintMethodCall, (message) => {
        console.log("gelen mesaj:", message);
    })
    $("#btn-send-message-all-client").click(function () {
        const message = "Selamın aleykum";
        connection.invoke(BroadcastMessageToAllClientHubMethodCall, message).catch(err => console.error("hata",err))
    })
})