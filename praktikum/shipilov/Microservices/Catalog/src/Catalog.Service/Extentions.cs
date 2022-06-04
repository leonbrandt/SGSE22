using Catalog.Service.Dtos;
using Catalog.Service.Entities;

// Translate new Item (Catalog.Service.Entities) into existing ItemDto (Catalog.Service.Dtos)

namespace Catalog.Service
{
    public static class Extensions
    {
        public static ItemDto AsDto(this Item item)
        {
            return new ItemDto(item.Id, item.Name, item.Description, item.Price, item.CreatedDate);
        }
    }
}