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
  DatabaseSecurityAlertPolicy,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a database's security alert policy.
 *
 * @summary Creates or updates a database's security alert policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseSecurityAlertCreateMax.json
 */
async function updateADatabaseThreatDetectionPolicyWithAllParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "securityalert-4799";
  const serverName = "securityalert-6440";
  const databaseName = "testdb";
  const securityAlertPolicyName = "Default";
  const parameters: DatabaseSecurityAlertPolicy = {
    disabledAlerts: ["Sql_Injection", "Usage_Anomaly"],
    emailAccountAdmins: true,
    emailAddresses: ["test@microsoft.com", "user@microsoft.com"],
    retentionDays: 6,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseSecurityAlertPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    securityAlertPolicyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a database's security alert policy.
 *
 * @summary Creates or updates a database's security alert policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseSecurityAlertCreateMin.json
 */
async function updateADatabaseThreatDetectionPolicyWithMinimalParameters(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "securityalert-4799";
  const serverName = "securityalert-6440";
  const databaseName = "testdb";
  const securityAlertPolicyName = "Default";
  const parameters: DatabaseSecurityAlertPolicy = { state: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.databaseSecurityAlertPolicies.createOrUpdate(
    resourceGroupName,
    serverName,
    databaseName,
    securityAlertPolicyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateADatabaseThreatDetectionPolicyWithAllParameters();
  updateADatabaseThreatDetectionPolicyWithMinimalParameters();
}

main().catch(console.error);
