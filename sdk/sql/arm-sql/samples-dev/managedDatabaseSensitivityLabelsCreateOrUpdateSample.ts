/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { SensitivityLabel } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates the sensitivity label of a given column
 *
 * @summary Creates or updates the sensitivity label of a given column
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedDatabaseColumnSensitivityLabelCreate.json
 */
async function updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "myRG";
  const managedInstanceName = "myManagedInstanceName";
  const databaseName = "myDatabase";
  const schemaName = "dbo";
  const tableName = "myTable";
  const columnName = "myColumn";
  const parameters: SensitivityLabel = {
    informationType: "PhoneNumber",
    informationTypeId: "d22fa6e9-5ee4-3bde-4c2b-a409604c4646",
    labelId: "bf91e08c-f4f0-478a-b016-25164b2a65ff",
    labelName: "PII",
    rank: "High",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedDatabaseSensitivityLabels.createOrUpdate(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    schemaName,
    tableName,
    columnName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updatesOrCreatesASensitivityLabelOfAGivenColumnWithAllParametersInAManagedDatabase();
}

main().catch(console.error);
