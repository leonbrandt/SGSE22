using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Trading.Service.StateMachines;

namespace Trading.Service.SignalR
{
    [Authorize]
    public class MessageHub : Hub
    {
        /* Our state machine will invoke it by passing in the entire purchase state,
        and then we will forward that purchase state all the way back to the client using SignalR. */
        public async Task SendStatusAsync(PurchaseState status)
        {
            if (Clients != null)
            {
                await Clients.User(Context.UserIdentifier)
                       .SendAsync("ReceivePurchaseStatus", status); //send the message with status to the specific user (with our user Id)
            }
        }
    }
}