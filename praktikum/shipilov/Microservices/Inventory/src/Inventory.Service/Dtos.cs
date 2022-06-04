using System;
using System.ComponentModel.DataAnnotations;

// Data Transfer Objects

namespace Inventory.Service.Dtos
{
    public record GrantItemsDto
    (
        Guid UserId,
        Guid CatalogItemId,
        [Range(0, 1000000)] int Quantity
    );

    public record InventoryItemDto
    (
        Guid CatalogItemId,
        string Name,
        string Description,
        int Quantity,
        DateTimeOffset AcquiredDate
    );

    public record CatalogItemDto
    (
        Guid Id,
        string Name,
        string Description
    );
}