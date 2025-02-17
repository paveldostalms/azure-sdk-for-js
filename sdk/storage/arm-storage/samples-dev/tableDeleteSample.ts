/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes the table with the specified table name, under the specified account if it exists.
 *
 * @summary Deletes the table with the specified table name, under the specified account if it exists.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/TableOperationDelete.json
 */
async function tableOperationDelete(): Promise<void> {
  const subscriptionId = process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const tableName = "table6185";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.tableOperations.delete(resourceGroupName, accountName, tableName);
  console.log(result);
}

async function main(): Promise<void> {
  await tableOperationDelete();
}

main().catch(console.error);
