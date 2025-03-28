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
  PartnerConfigurationUpdateParameters,
  EventGridManagementClient,
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Synchronously updates a partner configuration with the specified parameters.
 *
 * @summary Synchronously updates a partner configuration with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/PartnerConfigurations_Update.json
 */
async function partnerConfigurationsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const partnerConfigurationUpdateParameters: PartnerConfigurationUpdateParameters =
    {
      defaultMaximumExpirationTimeInDays: 100,
      tags: { tag1: "value11", tag2: "value22" },
    };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerConfigurations.beginUpdateAndWait(
    resourceGroupName,
    partnerConfigurationUpdateParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await partnerConfigurationsUpdate();
}

main().catch(console.error);
