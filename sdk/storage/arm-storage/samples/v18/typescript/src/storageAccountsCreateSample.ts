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
  StorageAccountCreateParameters,
  StorageManagementClient,
} from "@azure/arm-storage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/NfsV3AccountCreate.json
 */
async function nfsV3AccountCreate(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    enableExtendedGroups: true,
    isHnsEnabled: true,
    enableNfsV3: true,
    kind: "BlockBlobStorage",
    location: "eastus",
    networkRuleSet: {
      bypass: "AzureServices",
      defaultAction: "Allow",
      ipRules: [],
      virtualNetworkRules: [
        {
          virtualNetworkResourceId:
            "/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.Network/virtualNetworks/net123/subnets/subnet12",
        },
      ],
    },
    sku: { name: "Premium_LRS" },
    enableHttpsTrafficOnly: false,
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreate.json
 */
async function storageAccountCreate(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    defaultToOAuthAuthentication: false,
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    isHnsEnabled: true,
    isSftpEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateAllowedCopyScopeToAAD.json
 */
async function storageAccountCreateAllowedCopyScopeToAad(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    allowedCopyScope: "AAD",
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    isHnsEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateAllowedCopyScopeToPrivateLink.json
 */
async function storageAccountCreateAllowedCopyScopeToPrivateLink(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    allowedCopyScope: "PrivateLink",
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    isHnsEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateDisallowPublicNetworkAccess.json
 */
async function storageAccountCreateDisallowPublicNetworkAccess(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    isHnsEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    publicNetworkAccess: "Disabled",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateDnsEndpointTypeToAzureDnsZone.json
 */
async function storageAccountCreateDnsEndpointTypeToAzureDnsZone(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    defaultToOAuthAuthentication: false,
    dnsEndpointType: "AzureDnsZone",
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    isHnsEnabled: true,
    isSftpEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateDnsEndpointTypeToStandard.json
 */
async function storageAccountCreateDnsEndpointTypeToStandard(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    defaultToOAuthAuthentication: false,
    dnsEndpointType: "Standard",
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    isHnsEnabled: true,
    isSftpEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateEnablePublicNetworkAccess.json
 */
async function storageAccountCreateEnablePublicNetworkAccess(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowBlobPublicAccess: false,
    allowSharedKeyAccess: true,
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    isHnsEnabled: true,
    keyPolicy: { keyExpirationPeriodInDays: 20 },
    kind: "Storage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    publicNetworkAccess: "Enabled",
    routingPreference: {
      publishInternetEndpoints: true,
      publishMicrosoftEndpoints: true,
      routingChoice: "MicrosoftRouting",
    },
    sasPolicy: { expirationAction: "Log", sasExpirationPeriod: "1.15:59:59" },
    sku: { name: "Standard_GRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreatePremiumBlockBlobStorage.json
 */
async function storageAccountCreatePremiumBlockBlobStorage(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    allowSharedKeyAccess: true,
    encryption: {
      keySource: "Microsoft.Storage",
      requireInfrastructureEncryption: false,
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    kind: "BlockBlobStorage",
    location: "eastus",
    minimumTlsVersion: "TLS1_2",
    sku: { name: "Premium_LRS" },
    tags: { key1: "value1", key2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateUserAssignedEncryptionIdentityWithCMK.json
 */
async function storageAccountCreateUserAssignedEncryptionIdentityWithCmk(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    encryption: {
      encryptionIdentity: {
        encryptionUserAssignedIdentity:
          "/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}",
      },
      keySource: "Microsoft.Keyvault",
      keyVaultProperties: {
        keyName: "wrappingKey",
        keyVaultUri: "https://myvault8569.vault.azure.net",
        keyVersion: "",
      },
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/{subscriptionId}/resourceGroups/res9101/providers/MicrosoftManagedIdentity/userAssignedIdentities/{managedIdentityName}":
          {},
      },
    },
    kind: "Storage",
    location: "eastus",
    sku: { name: "Standard_LRS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateUserAssignedIdentityWithFederatedIdentityClientId.json
 */
async function storageAccountCreateUserAssignedIdentityWithFederatedIdentityClientId(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["STORAGE_RESOURCE_GROUP"] || "res131918";
  const accountName = "sto131918";
  const parameters: StorageAccountCreateParameters = {
    encryption: {
      encryptionIdentity: {
        encryptionFederatedIdentityClientId:
          "f83c6b1b-4d34-47e4-bb34-9d83df58b540",
        encryptionUserAssignedIdentity:
          "/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}",
      },
      keySource: "Microsoft.Keyvault",
      keyVaultProperties: {
        keyName: "wrappingKey",
        keyVaultUri: "https://myvault8569.vault.azure.net",
        keyVersion: "",
      },
      services: {
        blob: { enabled: true, keyType: "Account" },
        file: { enabled: true, keyType: "Account" },
      },
    },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/{subscriptionId}/resourceGroups/res9101/providers/MicrosoftManagedIdentity/userAssignedIdentities/{managedIdentityName}":
          {},
      },
    },
    kind: "Storage",
    location: "eastus",
    sku: { name: "Standard_LRS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 *
 * @summary Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2023-05-01/examples/StorageAccountCreateWithImmutabilityPolicy.json
 */
async function storageAccountCreateWithImmutabilityPolicy(): Promise<void> {
  const subscriptionId =
    process.env["STORAGE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["STORAGE_RESOURCE_GROUP"] || "res9101";
  const accountName = "sto4445";
  const parameters: StorageAccountCreateParameters = {
    extendedLocation: { name: "losangeles001", type: "EdgeZone" },
    immutableStorageWithVersioning: {
      enabled: true,
      immutabilityPolicy: {
        allowProtectedAppendWrites: true,
        immutabilityPeriodSinceCreationInDays: 15,
        state: "Unlocked",
      },
    },
    kind: "Storage",
    location: "eastus",
    sku: { name: "Standard_GRS" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.beginCreateAndWait(
    resourceGroupName,
    accountName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  nfsV3AccountCreate();
  storageAccountCreate();
  storageAccountCreateAllowedCopyScopeToAad();
  storageAccountCreateAllowedCopyScopeToPrivateLink();
  storageAccountCreateDisallowPublicNetworkAccess();
  storageAccountCreateDnsEndpointTypeToAzureDnsZone();
  storageAccountCreateDnsEndpointTypeToStandard();
  storageAccountCreateEnablePublicNetworkAccess();
  storageAccountCreatePremiumBlockBlobStorage();
  storageAccountCreateUserAssignedEncryptionIdentityWithCmk();
  storageAccountCreateUserAssignedIdentityWithFederatedIdentityClientId();
  storageAccountCreateWithImmutabilityPolicy();
}

main().catch(console.error);
