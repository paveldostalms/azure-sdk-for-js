/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get all delivery attributes for an event subscription for domain.
 *
 * @summary Get all delivery attributes for an event subscription for domain.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/DomainEventSubscriptions_GetDeliveryAttributes.json
 */
async function domainEventSubscriptionsGetDeliveryAttributes(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const domainName = "exampleDomain1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.domainEventSubscriptions.getDeliveryAttributes(
    resourceGroupName,
    domainName,
    eventSubscriptionName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await domainEventSubscriptionsGetDeliveryAttributes();
}

main().catch(console.error);
