/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ElasticPool, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/CreateElasticPoolWithAvailabilityZone.json
 */
async function createOrUpdateAnElasticPoolWithAvailabilityZone(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    availabilityZone: "1",
    location: "Japan East",
    perDatabaseSettings: { maxCapacity: 2, minCapacity: 0.25 },
    sku: { name: "HS_Gen5_4" },
    zoneRedundant: true,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/HyperscaleElasticPoolCreateOrUpdateSetHighAvailabilityReplicaCount.json
 */
async function createOrUpdateHyperscaleElasticPoolWithHighAvailabilityReplicaCountParameter(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    highAvailabilityReplicaCount: 2,
    location: "Japan East",
    sku: { name: "HS_Gen5_4" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ElasticPoolCreateOrUpdateMax.json
 */
async function createOrUpdateElasticPoolWithAllParameter(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    location: "Japan East",
    perDatabaseSettings: { maxCapacity: 2, minCapacity: 0.25 },
    sku: { name: "GP_Gen4_2", capacity: 2, tier: "GeneralPurpose" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ElasticPoolCreateOrUpdateSetMaintenanceConfiguration.json
 */
async function createOrUpdateElasticPoolWithMaintenanceConfigurationParameter(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    location: "Japan East",
    maintenanceConfigurationId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ElasticPoolCreateOrUpdateMin.json
 */
async function createOrUpdateElasticPoolWithMinimumParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = { location: "Japan East" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ElasticPoolCreateWithDefaultPreferredEnclaveType.json
 */
async function createOrUpdateElasticPoolWithPreferredEnclaveTypeParameterAsDefault(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    location: "Japan East",
    preferredEnclaveType: "Default",
    sku: { name: "GP_Gen5_4" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an elastic pool.
 *
 * @summary Creates or updates an elastic pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/ElasticPoolCreateWithVBSPreferredEnclaveType.json
 */
async function createOrUpdateElasticPoolWithPreferredEnclaveTypeParameterAsVbs(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-2369";
  const serverName = "sqlcrudtest-8069";
  const elasticPoolName = "sqlcrudtest-8102";
  const parameters: ElasticPool = {
    location: "Japan East",
    preferredEnclaveType: "VBS",
    sku: { name: "GP_Gen5_4" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.elasticPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    elasticPoolName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateAnElasticPoolWithAvailabilityZone();
  createOrUpdateHyperscaleElasticPoolWithHighAvailabilityReplicaCountParameter();
  createOrUpdateElasticPoolWithAllParameter();
  createOrUpdateElasticPoolWithMaintenanceConfigurationParameter();
  createOrUpdateElasticPoolWithMinimumParameters();
  createOrUpdateElasticPoolWithPreferredEnclaveTypeParameterAsDefault();
  createOrUpdateElasticPoolWithPreferredEnclaveTypeParameterAsVbs();
}

main().catch(console.error);
