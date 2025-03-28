/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NamespaceTopic,
  EventGridManagementClient,
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Asynchronously creates a new namespace topic with the specified parameters.
 *
 * @summary Asynchronously creates a new namespace topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/NamespaceTopics_CreateOrUpdate.json
 */
async function namespaceTopicsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const namespaceName = "examplenamespace2";
  const topicName = "examplenamespacetopic2";
  const namespaceTopicInfo: NamespaceTopic = {
    eventRetentionInDays: 1,
    inputSchema: "CloudEventSchemaV1_0",
    publisherType: "Custom",
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.namespaceTopics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    namespaceName,
    topicName,
    namespaceTopicInfo,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await namespaceTopicsCreateOrUpdate();
}

main().catch(console.error);
