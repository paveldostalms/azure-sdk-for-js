/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DataBoxManagementClient } = require("@azure/arm-databox");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Request to mark devices for a given job as shipped
 *
 * @summary Request to mark devices for a given job as shipped
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/stable/2025-02-01/examples/MarkDevicesShipped.json
 */
async function markDevicesShipped() {
  const subscriptionId = process.env["DATABOX_SUBSCRIPTION_ID"] || "YourSubscriptionId";
  const jobName = "TestJobName1";
  const resourceGroupName = process.env["DATABOX_RESOURCE_GROUP"] || "YourResourceGroupName";
  const markDevicesShippedRequest = {
    deliverToDcPackageDetails: {
      carrierName: "testCarrier",
      trackingId: "000000",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const result = await client.jobs.markDevicesShipped(
    jobName,
    resourceGroupName,
    markDevicesShippedRequest,
  );
  console.log(result);
}

async function main() {
  await markDevicesShipped();
}

main().catch(console.error);
