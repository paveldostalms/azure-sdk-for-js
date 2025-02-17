/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DeletedShare, StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Restore a file share within a valid retention days if share soft delete is enabled
 *
 * @summary Restore a file share within a valid retention days if share soft delete is enabled
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/FileSharesRestore.json
 */
async function restoreShares(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const shareName = "share1249";
  const deletedShare: DeletedShare = {
    deletedShareName: "share1249",
    deletedShareVersion: "1234567890",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.restore(
    resourceGroupName,
    accountName,
    shareName,
    deletedShare,
  );
  console.log(result);
}

async function main(): Promise<void> {
  restoreShares();
}

main().catch(console.error);
