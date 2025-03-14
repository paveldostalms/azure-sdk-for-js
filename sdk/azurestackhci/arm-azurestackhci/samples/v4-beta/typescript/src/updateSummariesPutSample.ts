/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { UpdateSummaries, AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Put Update summaries under the HCI cluster
 *
 * @summary Put Update summaries under the HCI cluster
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/stable/2024-04-01/examples/PutUpdateSummaries.json
 */
async function putUpdateSummariesUnderClusterResource() {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "b8d594e5-51f3-4c11-9c54-a7771b81c712";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "testrg";
  const clusterName = "testcluster";
  const updateLocationProperties: UpdateSummaries = {
    currentVersion: "4.2203.2.32",
    hardwareModel: "PowerEdge R730xd",
    lastChecked: new Date("2022-04-07T18:04:07Z"),
    lastUpdated: new Date("2022-04-06T14:08:18.254Z"),
    oemFamily: "DellEMC",
    state: "AppliedSuccessfully",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.updateSummariesOperations.put(
    resourceGroupName,
    clusterName,
    updateLocationProperties,
  );
  console.log(result);
}

async function main() {
  putUpdateSummariesUnderClusterResource();
}

main().catch(console.error);
