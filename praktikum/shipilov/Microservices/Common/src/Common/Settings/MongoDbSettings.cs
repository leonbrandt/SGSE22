namespace Common.Settings
{
    public class MongoDbSettings
    {
        private string connectionString;
        public string Host { get; init; }

        public int Port { get; init; }

        // public string ConnectionString => $"mongodb://{Host}:{Port}";

        public string ConnectionString
        {
            get { return string.IsNullOrWhiteSpace(connectionString) ? $"mongodb://{Host}:{Port}" : connectionString; }
            init { connectionString = value; }
        }

    }
}