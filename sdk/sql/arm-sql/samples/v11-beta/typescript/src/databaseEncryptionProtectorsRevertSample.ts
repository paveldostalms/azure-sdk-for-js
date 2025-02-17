/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Reverts an existing encryption protector for a particular database.
 *
 * @summary Reverts an existing encryption protector for a particular database.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-08-01-preview/examples/DatabaseEncryptionProtectorRevert.json
 */
async function revertsTheEncryptionProtectorForAParticularDatabase(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const databaseName = "sqlcrudtestdb-2342";
  const encryptionProtectorName = "current";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseEncryptionProtectors.beginRevertAndWait(
    resourceGroupName,
    serverName,
    databaseName,
    encryptionProtectorName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  revertsTheEncryptionProtectorForAParticularDatabase();
}

main().catch(console.error);
