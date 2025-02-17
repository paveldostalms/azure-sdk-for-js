/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EncryptionScope, StorageManagementClient } from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 *
 * @summary Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountPatchEncryptionScope.json
 */
async function storageAccountPatchEncryptionScope(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["STORAGE_RESOURCE_GROUP"] || "resource-group-name";
  const accountName = "accountname";
  const encryptionScopeName = "{encryption-scope-name}";
  const encryptionScope: EncryptionScope = {
    keyVaultProperties: {
      keyUri:
        "https://testvault.vault.core.windows.net/keys/key1/863425f1358359c",
    },
    source: "Microsoft.KeyVault",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.encryptionScopes.patch(
    resourceGroupName,
    accountName,
    encryptionScopeName,
    encryptionScope,
  );
  console.log(result);
}

async function main(): Promise<void> {
  storageAccountPatchEncryptionScope();
}

main().catch(console.error);
