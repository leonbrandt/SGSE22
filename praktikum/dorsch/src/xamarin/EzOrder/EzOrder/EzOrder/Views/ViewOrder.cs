using System;
using System.Linq;

using Xamarin.Forms;

namespace EzOrder.Views
{
    public class ViewOrder : ContentPage
    {
        public ViewOrder(long? orderID)
        {
            var orders = App.orderingApi.GetOrders();
            var order = orders.Single(x => x.OrderID == orderID);
            var users = App.userApi.GetUsers();
            var user = users.Single(s => s.UserID == order.UserUserID);
            var userName = user.Firstname + " " + user.Lastname;
            var positions = App.positionApi.GetPositions();
            positions = positions.Where(pos => pos.OrderingOrderID == orderID).ToList();
            var cat1Positions = positions.Where(pos => pos.ProductProductID == 1).ToList();
            var cat2Positions = positions.Where(pos => pos.ProductProductID > 1 && pos.ProductProductID < 5).ToList();
            var cat3Positions = positions.Where(pos => pos.ProductProductID > 4).ToList();
            var products = App.productApi.GetProducts();
            var btnCancel = new Button { Text = "Abbrechen", BackgroundColor = Constants.Constants.secondaryColor };
            btnCancel.Clicked += BtnCancel_Clicked;
            var btnSubmit = new Button { Text = "Bestätigen", BackgroundColor = Constants.Constants.primaryColor };
            btnSubmit.Clicked += BtnSubmit_Clicked;

            var layout = new StackLayout();
            layout.Children.Add(new Label { Text = "Bestelldetails", FontAttributes = FontAttributes.Bold });
            layout.Children.Add(new Label { Text = "Name: " + userName });
            layout.Children.Add(new Label { Text = "E-Mail-Adresse: " + user.Email });
            layout.Children.Add(new Label { Text = "Telefonnummer: " + user.Phone });
            layout.Children.Add(new Label { Text = "Adresse: " + user.Street });
            layout.Children.Add(new Label { Text = user.Zip + " " + user.City });
            layout.Children.Add(new Label { Text = "Firmenname: " + user.Company });
            layout.Children.Add(new Label { Text = "Abteilung: " + user.Department });
            if (cat1Positions.Count > 0)
            {
                layout.Children.Add(new Label { Text = "1. Kaffee" });
                foreach (var position in cat1Positions)
                {
                    var product = products.Single(prod => prod.ProductID == position.ProductProductID);
                    layout.Children.Add(new Label { Text = position.Amount.ToString() + " * " + product.PackDescription });
                }
            }
            if (cat2Positions.Count > 0)
            {
                layout.Children.Add(new Label { Text = "2. Reinigungsmittel" });
                foreach (var position in cat2Positions)
                {
                    var product = products.Single(prod => prod.ProductID == position.ProductProductID);
                    layout.Children.Add(new Label { Text = position.Amount.ToString() + " * " + product.PackDescription });
                }
            }
            if (cat3Positions.Count > 0)
            {
                layout.Children.Add(new Label { Text = "3. Wartung" });
                foreach (var position in cat3Positions)
                {
                    var product = products.Single(prod => prod.ProductID == position.ProductProductID);
                    layout.Children.Add(new Label { Text = product.PackDescription });
                    layout.Children.Add(new Label { Text = "Gewünschter Termin: " + order.DateDelivery.ToString() });
                }
            }
            layout.Children.Add(new Label { Text = "Lieferdatum auswählen:" });
            layout.Children.Add(new DatePicker());
            layout.Children.Add(btnCancel);
            layout.Children.Add(btnSubmit);
            Content = layout;
        }

        private void BtnSubmit_Clicked(object sender, EventArgs e)
        {
            App.ResetView();
        }

        private void BtnCancel_Clicked(object sender, EventArgs e)
        {
            App.ResetView();
        }
    }
}