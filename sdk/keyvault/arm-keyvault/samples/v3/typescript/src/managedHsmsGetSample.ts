/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KeyVaultManagementClient } from "@azure/arm-keyvault";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the specified managed HSM Pool.
 *
 * @summary Gets the specified managed HSM Pool.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/stable/2024-11-01/examples/ManagedHsm_Get.json
 */
async function retrieveAManagedHsmPool(): Promise<void> {
  const subscriptionId =
    process.env["KEYVAULT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["KEYVAULT_RESOURCE_GROUP"] || "hsm-group";
  const name = "hsm1";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.managedHsms.get(resourceGroupName, name);
  console.log(result);
}

async function main(): Promise<void> {
  await retrieveAManagedHsmPool();
}

main().catch(console.error);
