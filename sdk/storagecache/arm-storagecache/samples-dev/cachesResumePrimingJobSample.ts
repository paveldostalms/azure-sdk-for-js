/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  PrimingJobIdParameter,
  CachesResumePrimingJobOptionalParams,
} from "@azure/arm-storagecache";
import { StorageCacheManagementClient } from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Resumes a paused priming job.
 *
 * @summary Resumes a paused priming job.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2024-03-01/examples/ResumePrimingJob.json
 */
async function resumePrimingJob(): Promise<void> {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const primingJobId: PrimingJobIdParameter = {
    primingJobId: "00000000000_0000000000",
  };
  const options: CachesResumePrimingJobOptionalParams = { primingJobId };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginResumePrimingJobAndWait(
    resourceGroupName,
    cacheName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await resumePrimingJob();
}

main().catch(console.error);
