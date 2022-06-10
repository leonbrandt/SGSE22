using System;
using System.ComponentModel.DataAnnotations;

// Data Transfer Objects

namespace Catalog.Service.Dtos
{
    public record ItemDto
    (//Information von Get-Operation zurückgeben
        Guid Id,
        string Name,
        string Description,
        [Range(0, 1000000)] decimal Price,
        DateTimeOffset CreatedDate
    );

    public record CreateItemDto
    (
        [Required] string Name,
        string Description,
        [Range(0, 1000000)] decimal Price
    );

    public record UpdateItemDto
    (
        [Required] string Name,
        string Description,
        [Range(0, 1000000)] decimal Price
    );
}