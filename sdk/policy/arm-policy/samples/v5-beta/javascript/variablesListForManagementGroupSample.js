/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PolicyClient } = require("@azure/arm-policy");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to This operation retrieves the list of all variables applicable to the management group.
 *
 * @summary This operation retrieves the list of all variables applicable to the management group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/preview/2022-08-01-preview/examples/listVariablesForManagementGroup.json
 */
async function listVariablesThatApplyToAManagementGroup() {
  const managementGroupId = "DevOrg";
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential);
  const resArray = new Array();
  for await (const item of client.variables.listForManagementGroup(managementGroupId)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listVariablesThatApplyToAManagementGroup();
}

main().catch(console.error);
