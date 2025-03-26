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
  ManagedClusterServicePrincipalProfile,
  ContainerServiceClient,
} from "@azure/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This action cannot be performed on a cluster that is not using a service principal
 *
 * @summary This action cannot be performed on a cluster that is not using a service principal
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2024-10-02-preview/examples/ManagedClustersResetServicePrincipalProfile.json
 */
async function resetServicePrincipalProfile(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const resourceName = "clustername1";
  const parameters: ManagedClusterServicePrincipalProfile = {
    clientId: "clientid",
    secret: "secret",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result =
    await client.managedClusters.beginResetServicePrincipalProfileAndWait(
      resourceGroupName,
      resourceName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await resetServicePrincipalProfile();
}

main().catch(console.error);
