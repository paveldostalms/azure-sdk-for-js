/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ContainerServiceClient } from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Aborts the currently running operation on the agent pool. The Agent Pool will be moved to a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation completes before cancellation can take place, a 409 error code is returned.
 *
 * @summary Aborts the currently running operation on the agent pool. The Agent Pool will be moved to a Canceling state and eventually to a Canceled state when cancellation finishes. If the operation completes before cancellation can take place, a 409 error code is returned.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/stable/2025-01-01/examples/AgentPoolsAbortOperation.json
 */
async function abortOperationOnAgentPool(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const agentPoolName = "agentpool1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.agentPools.beginAbortLatestOperationAndWait(
    resourceGroupName,
    resourceName,
    agentPoolName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await abortOperationOnAgentPool();
}

main().catch(console.error);
