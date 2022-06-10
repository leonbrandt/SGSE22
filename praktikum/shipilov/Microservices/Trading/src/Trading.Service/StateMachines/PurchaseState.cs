using System;
using Automatonymous;
using MassTransit.Saga;

namespace Trading.Service.StateMachines
{
    public class PurchaseState : SagaStateMachineInstance, ISagaVersion
    {
        public Guid CorrelationId { get; set; }
        public string CurrentState { get; set; } //from PurchaseStateMachine.cs
        public Guid UserId { get; set; }
        public Guid ItemId { get; set; }
        public int Quantity { get; set; }
        public DateTimeOffset Received { get; set; }
        public decimal? PurchaseTotal { get; set; } //totalAmountOfItems * Price - Debit
        public DateTimeOffset LastUpdated { get; set; }
        public string ErrorMessage { get; set; }
        public int Version { get; set; } //version of state machine (saga)
    }
}