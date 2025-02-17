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
  LeaseShareRequest,
  FileSharesLeaseOptionalParams,
  StorageManagementClient,
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @summary The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/FileSharesLease_Acquire.json
 */
async function acquireALeaseOnAShare(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const shareName = "share124";
  const parameters: LeaseShareRequest = {
    action: "Acquire",
    breakPeriod: undefined,
    leaseDuration: -1,
    leaseId: undefined,
    proposedLeaseId: undefined,
  };
  const options: FileSharesLeaseOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.lease(
    resourceGroupName,
    accountName,
    shareName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 *
 * @summary The Lease Share operation establishes and manages a lock on a share for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/FileSharesLease_Break.json
 */
async function breakALeaseOnAShare(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res3376";
  const accountName = "sto328";
  const shareName = "share12";
  const parameters: LeaseShareRequest = {
    action: "Break",
    breakPeriod: undefined,
    leaseDuration: undefined,
    leaseId: "8698f513-fa75-44a1-b8eb-30ba336af27d",
    proposedLeaseId: undefined,
  };
  const options: FileSharesLeaseOptionalParams = { parameters };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.fileShares.lease(
    resourceGroupName,
    accountName,
    shareName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  acquireALeaseOnAShare();
  breakALeaseOnAShare();
}

main().catch(console.error);
