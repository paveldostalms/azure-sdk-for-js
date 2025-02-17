/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DatabaseAutomaticTuning, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update automatic tuning properties for target database.
 *
 * @summary Update automatic tuning properties for target database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseAutomaticTuningUpdateMax.json
 */
async function updatesDatabaseAutomaticTuningSettingsWithAllProperties(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "default-sql-onebox";
  const serverName = "testsvr11";
  const databaseName = "db1";
  const parameters: DatabaseAutomaticTuning = {
    desiredState: "Auto",
    options: {
      createIndex: { desiredState: "Off" },
      dropIndex: { desiredState: "On" },
      forceLastGoodPlan: { desiredState: "Default" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    databaseName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update automatic tuning properties for target database.
 *
 * @summary Update automatic tuning properties for target database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseAutomaticTuningUpdateMin.json
 */
async function updatesDatabaseAutomaticTuningSettingsWithMinimalProperties(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "default-sql-onebox";
  const serverName = "testsvr11";
  const databaseName = "db1";
  const parameters: DatabaseAutomaticTuning = { desiredState: "Auto" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    databaseName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  updatesDatabaseAutomaticTuningSettingsWithAllProperties();
  updatesDatabaseAutomaticTuningSettingsWithMinimalProperties();
}

main().catch(console.error);
