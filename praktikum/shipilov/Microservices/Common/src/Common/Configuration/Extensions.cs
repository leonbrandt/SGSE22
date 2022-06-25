using System;
using Azure.Identity;
using Common.Settings;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace Common.Configuration
{
    public static class Extensions
    {
        public static IHostBuilder ConfigureAzureKeyVault(this IHostBuilder builder)
        {
            return builder.ConfigureAppConfiguration((context, configurationBuilder) =>
            {
                if (context.HostingEnvironment.IsProduction())
                {
                    var configuration = configurationBuilder.Build();
                    var serviceSettings = configuration.GetSection(nameof(ServiceSettings))
                                                       .Get<ServiceSettings>();

                    configurationBuilder.AddAzureKeyVault(
                        new Uri($"https://{serviceSettings.KeyVaultName}.vault.azure.net/"),
                        new DefaultAzureCredential()
                    );
                }
            });
        }
    }
}