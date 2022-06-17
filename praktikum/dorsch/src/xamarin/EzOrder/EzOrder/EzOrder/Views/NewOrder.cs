
using Xamarin.Forms;

namespace EzOrder.Views
{
    public class NewOrder : ContentPage
    {
        public NewOrder()
        {
            var products = App.productApi.GetProducts();
            var layout = new StackLayout();
            layout.Children.Add(new Label { Text = "Neue Bestellung", FontAttributes = FontAttributes.Bold });
            layout.Children.Add(new Label { Text = "1. Kaffee:" });
            foreach (var product in products)
            {
                if (product.CategoryCatID == 1)
                {
                    layout.Children.Add(new Image { Aspect = Aspect.AspectFit, Source = ImageSource.FromUri(new System.Uri(product.ImgURL)) });
                    layout.Children.Add(new Entry { Placeholder = "Anzahl" });
                    layout.Children.Add(new Label { Text = " * " + product.PackDescription + " " + product.Name });
                }
            }
            layout.Children.Add(new Label { Text = "2. Reinigungsmittel:" });
            foreach (var product in products)
            {
                if (product.CategoryCatID == 2)
                {
                    layout.Children.Add(new Image { Aspect = Aspect.AspectFit, Source = ImageSource.FromUri(new System.Uri(product.ImgURL)) });
                    layout.Children.Add(new Entry { Placeholder = "Anzahl" });
                    layout.Children.Add(new Label { Text = " * " + product.PackDescription + " " + product.Name });
                }
            }
            layout.Children.Add(new Label { Text = "3. Wartungstermin:" });
            foreach (var product in products)
            {
                if (product.CategoryCatID == 3)
                {
                    layout.Children.Add(new Image {Aspect = Aspect.AspectFit, Source = ImageSource.FromUri(new System.Uri(product.ImgURL)) });
                    layout.Children.Add(new CheckBox());
                    layout.Children.Add(new Label { Text = product.Name + " benötigt? " });
                    layout.Children.Add(new DatePicker());
                }
            }
            var btnCancel = new Button { Text = "Abbrechen", BackgroundColor = Constants.Constants.secondaryColor };
            btnCancel.Clicked += BtnCancel_Clicked;
            var btnSubmit = new Button { Text = "Bestätigen", BackgroundColor = Constants.Constants.primaryColor };
            btnSubmit.Clicked += BtnSubmit_Clicked;
            layout.Children.Add(btnCancel);
            layout.Children.Add(btnSubmit);
            Content = layout;
        }

        private void BtnCancel_Clicked(object sender, System.EventArgs e)
        {
            App.ResetView();
        }

        private void BtnSubmit_Clicked(object sender, System.EventArgs e)
        {
            App.ResetView();
        }
    }
}