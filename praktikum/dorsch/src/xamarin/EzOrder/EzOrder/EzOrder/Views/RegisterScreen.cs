
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
                    new Entry { Placeholder = "Nachname*" },
                    new Entry { Placeholder = "Vorname*" },
                    new Entry { Placeholder = "E-Mail-Adresse*" },
                    new Entry { Placeholder = "Telefonnummer*" },
                    new Entry { Placeholder = "Straße und Hausnumer" },
                    new Entry { Placeholder = "PLZ" },
                    new Entry { Placeholder = "Ort" },
                    new Entry { Placeholder = "Firmenname" },
                    new Entry { Placeholder = "Abteilung / Kommission" },
                    new Button { Text = "Abbrechen", BackgroundColor = Constants.Constants.secondaryColor},
                    new Button { Text = "Registrieren", BackgroundColor = Constants.Constants.primaryColor}
                }
            };


        }
    }
}