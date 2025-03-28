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
 * This sample demonstrates how to Get all delivery attributes for an event subscription of a namespace topic.
 *
 * @summary Get all delivery attributes for an event subscription of a namespace topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/NamespaceTopicEventSubscriptions_GetDeliveryAttributes.json
 */
async function namespaceTopicEventSubscriptionsGetDeliveryAttributes(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "exampleNamespace";
  const topicName = "exampleNamespaceTopic";
  const eventSubscriptionName = "exampleEventSubscriptionName";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result =
    await client.namespaceTopicEventSubscriptions.getDeliveryAttributes(
      resourceGroupName,
      namespaceName,
      topicName,
      eventSubscriptionName,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await namespaceTopicEventSubscriptionsGetDeliveryAttributes();
}

main().catch(console.error);
