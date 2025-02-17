/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CreateDatabaseRestorePointDefinition } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a restore point for a data warehouse.
 *
 * @summary Creates a restore point for a data warehouse.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseRestorePointsPost.json
 */
async function createsDatawarehouseDatabaseRestorePoint(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default-SQL-SouthEastAsia";
  const serverName = "testserver";
  const databaseName = "testDatabase";
  const parameters: CreateDatabaseRestorePointDefinition = {
    restorePointLabel: "mylabel",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.restorePoints.beginCreateAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsDatawarehouseDatabaseRestorePoint();
}

main().catch(console.error);
