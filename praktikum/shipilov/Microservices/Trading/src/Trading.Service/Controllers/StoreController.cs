using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Common;
using Trading.Service.Dtos;
using Trading.Service.Entities;

namespace Trading.Service.Controllers
{
    [ApiController]
    [Route("store")]
    [Authorize]
    public class StoreController : ControllerBase
    {
        private readonly IRepository<CatalogItem> catalogRepository;
        private readonly IRepository<ApplicationUser> usersRepository;
        private readonly IRepository<InventoryItem> inventoryRepository;

        public StoreController(
            IRepository<CatalogItem> catalogRepository,
            IRepository<ApplicationUser> usersRepository,
            IRepository<InventoryItem> inventoryRepository)
        {
            this.catalogRepository = catalogRepository;
            this.usersRepository = usersRepository;
            this.inventoryRepository = inventoryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<StoreDto>> GetAsync()
        {
            string userId = User.FindFirstValue("sub");

            var catalogItems = await catalogRepository.GetAllAsync();
            var inventoryItems = await inventoryRepository.GetAllAsync(
                item => item.UserId == Guid.Parse(userId)
            );
            var user = await usersRepository.GetAsync(Guid.Parse(userId));

            var storeDto = new StoreDto(
                catalogItems.Select(catalogItem =>
                    new StoreItemDto(
                        catalogItem.Id,
                        catalogItem.Name,
                        catalogItem.Description,
                        catalogItem.Price,
                        inventoryItems.FirstOrDefault(
                            inventoryItem => inventoryItem.CatalogItemId == catalogItem.Id)?.Quantity ?? 0
                        )
                ),
                user?.Gil ?? 0 //if we find the user, we take the Gil from him, if we don´t -> return 0
            );

            return Ok(storeDto);
        }
    }
}