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
  DedicatedHostUpdate,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a dedicated host .
 *
 * @summary Update a dedicated host .
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/dedicatedHostExamples/DedicatedHost_Update_MaximumSet_Gen.json
 */
async function dedicatedHostUpdateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const hostGroupName = "aaaaaaaaa";
  const hostName = "aaaaaaaaaaaaaaaaaaaaa";
  const parameters: DedicatedHostUpdate = {
    autoReplaceOnFailure: true,
    instanceView: {
      availableCapacity: {
        allocatableVMs: [{ count: 26, vmSize: "aaaaaaaaaaaaaaaaaaaa" }],
      },
      statuses: [
        {
          code: "aaaaaaaaaaaaaaaaaaaaaaa",
          displayStatus: "aaaaaa",
          level: "Info",
          message: "a",
          time: new Date("2021-11-30T12:58:26.522Z"),
        },
      ],
    },
    licenseType: "Windows_Server_Hybrid",
    platformFaultDomain: 1,
    tags: { key8813: "aaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.beginUpdateAndWait(
    resourceGroupName,
    hostGroupName,
    hostName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a dedicated host .
 *
 * @summary Update a dedicated host .
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/dedicatedHostExamples/DedicatedHost_Update_MinimumSet_Gen.json
 */
async function dedicatedHostUpdateMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const hostGroupName = "aa";
  const hostName = "aaaaaaaaaaaaaaaaaaaaaaaaaa";
  const parameters: DedicatedHostUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.beginUpdateAndWait(
    resourceGroupName,
    hostGroupName,
    hostName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a dedicated host .
 *
 * @summary Update a dedicated host .
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/dedicatedHostExamples/DedicatedHost_Update_Resize.json
 */
async function dedicatedHostUpdateResize(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const hostGroupName = "aaaaaaaaa";
  const hostName = "aaaaaaaaaaaaaaaaaaaaa";
  const parameters: DedicatedHostUpdate = { sku: { name: "DSv3-Type1" } };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.dedicatedHosts.beginUpdateAndWait(
    resourceGroupName,
    hostGroupName,
    hostName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await dedicatedHostUpdateMaximumSetGen();
  await dedicatedHostUpdateMinimumSetGen();
  await dedicatedHostUpdateResize();
}

main().catch(console.error);
