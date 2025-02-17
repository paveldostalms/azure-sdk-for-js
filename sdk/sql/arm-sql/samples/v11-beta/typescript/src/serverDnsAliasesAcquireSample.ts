/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServerDnsAliasAcquisition, SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Acquires server DNS alias from another server.
 *
 * @summary Acquires server DNS alias from another server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerDnsAliasAcquire.json
 */
async function acquireServerDnsAlias(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const serverName = "dns-alias-new-server";
  const dnsAliasName = "dns-alias-name-1";
  const parameters: ServerDnsAliasAcquisition = {
    oldServerDnsAliasId:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/dns-alias-old-server/dnsAliases/dns-alias-name-1",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverDnsAliases.beginAcquireAndWait(
    resourceGroupName,
    serverName,
    dnsAliasName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  acquireServerDnsAlias();
}

main().catch(console.error);
