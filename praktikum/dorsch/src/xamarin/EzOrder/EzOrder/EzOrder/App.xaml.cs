//using EzOrder.Views;
using EzOrder.Views;
using IO.Swagger.Api;
using Xamarin.Forms;

namespace EzOrder
{
    public partial class App : Application
    {

        public static ProductApi productApi = new ProductApi();
        public static UserApi userApi = new UserApi();
        public static CategoryApi categoryApi = new CategoryApi();
        public static OrderingApi orderingApi = new OrderingApi();
        public static PositionApi positionApi = new PositionApi();
        public static Page MainView;
        public static App Instance;
        public App()
        {
            InitializeComponent();
            CarouselPage mainView = new CarouselPage();
            //mainView.Children.Add(new RegisterScreen());
            //mainView.Children.Add(new NewOrder());
            //mainView.Children.Add(new OrderListing());
            //mainView.Children.Add(new MyOrders());
            mainView.Children.Add(new Benchmark());
            MainPage = mainView;
            MainView = mainView;
            Instance = this;
        }

        protected override void OnStart()
        {
        }

        protected override void OnSleep()
        {
        }

        protected override void OnResume()
        {
        }

        public static void ResetView()
        {
            Instance.MainPage = MainView;
        }

        public static void SetView(Page view)
        {
            Instance.MainPage = view;
        }
    }
}
