/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EncryptionProtector, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing encryption protector.
 *
 * @summary Updates an existing encryption protector.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/EncryptionProtectorCreateOrUpdateKeyVault.json
 */
async function updateTheEncryptionProtectorToKeyVault(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const encryptionProtectorName = "current";
  const parameters: EncryptionProtector = {
    autoRotationEnabled: false,
    serverKeyName: "someVault_someKey_01234567890123456789012345678901",
    serverKeyType: "AzureKeyVault",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.encryptionProtectors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    encryptionProtectorName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing encryption protector.
 *
 * @summary Updates an existing encryption protector.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/EncryptionProtectorCreateOrUpdateServiceManaged.json
 */
async function updateTheEncryptionProtectorToServiceManaged(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const encryptionProtectorName = "current";
  const parameters: EncryptionProtector = {
    serverKeyName: "ServiceManaged",
    serverKeyType: "ServiceManaged",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.encryptionProtectors.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    encryptionProtectorName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateTheEncryptionProtectorToKeyVault();
  updateTheEncryptionProtectorToServiceManaged();
}

main().catch(console.error);
