using Microsoft.AspNetCore.SignalR;

namespace SignalRCore.Web.Hubs
{
    public class ExampleHub : Hub //hub İsimli Microsoft.AspNetCore.Signal dan miras aldı
    {
       public async Task BroadcastMessageToAllClient(string message)
        {
            //Client Tarafından UI Tarafından tetiklenecek
            await Clients.All.SendAsync("ReceviceMessageForAllClient",message);
            //1 Kullanıcı Bu metodu çağırdığında
            //Aktif olan bütün clientlara o bir kullanıcının gönderdiği mesajı göndericek
        }
    }
}
