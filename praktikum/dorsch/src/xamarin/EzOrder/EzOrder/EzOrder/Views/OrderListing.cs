using System;
using System.Linq;

using Xamarin.Forms;

namespace EzOrder.Views
{
    public class OrderListing : ContentPage
    {
        private static long? selectedOrder;
        public OrderListing()
        {
            fillOrders();
        }

        public void fillOrders()
        {
            var orders = App.orderingApi.GetOrders();
            var layout = new StackLayout
            {
                Children = {
                    new Label { Text = "Bestellübersicht", FontAttributes = FontAttributes.Bold }
                }
            };

            foreach (var order in orders)
            {
                if (order.UserUserID != Constants.Constants.userID)
                {
                    var users = App.userApi.GetUsers();
                    var user = users.Single(s => s.UserID == order.UserUserID);
                    var userName = user.Firstname + " " + user.Lastname;
                    layout.Children.Add(new Label { Text = "Bestellung von " + userName + " vom " + order.DateOrder.ToString(), FontAttributes = FontAttributes.Bold });
                    layout.Children.Add(new Label { Text = "Status: " + (order.Status == 0 ? "offen" : "bestätigt") });
                    layout.Children.Add(new Button { Text = "Bestätigen", FontAttributes = FontAttributes.Bold, BackgroundColor = Constants.Constants.primaryColor });
                    var btnShowOrder = new Button { Text = "Bestelldetails ansehen", FontAttributes = FontAttributes.Bold, BackgroundColor = Constants.Constants.primaryColor };
                    btnShowOrder.Clicked += BtnShowOrder_Clicked;
                    selectedOrder = order.OrderID;
                    layout.Children.Add(btnShowOrder);
                }
            }

            this.Content = layout;

        }

        private void BtnShowOrder_Clicked(object sender, EventArgs e)
        {
            App.SetView(new ViewOrder(selectedOrder));
        }
    }
}