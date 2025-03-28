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
 * This sample demonstrates how to Asynchronously creates or updates a new domain topic with the specified parameters.
 *
 * @summary Asynchronously creates or updates a new domain topic with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/DomainTopics_CreateOrUpdate.json
 */
async function domainTopicsCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const domainName = "exampledomain1";
  const domainTopicName = "exampledomaintopic1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.domainTopics.beginCreateOrUpdateAndWait(
    resourceGroupName,
    domainName,
    domainTopicName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await domainTopicsCreateOrUpdate();
}

main().catch(console.error);
