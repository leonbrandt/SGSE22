
using Xamarin.Forms;

namespace EzOrder.Views
{
    public class RegisterScreen : ContentPage
    {
        public RegisterScreen()
        {
            Content = new StackLayout
            {
                Children = {
                    new Label { Text = "Registrierung" },
                    new Button { Text = "Abbrechen", BackgroundColor = Constants.Constants.secondaryColor},
                    new Button { Text = "Registrieren", BackgroundColor = Constants.Constants.primaryColor}
                }
            };


        }
    }
}