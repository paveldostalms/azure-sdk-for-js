/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Variable, PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to  This operation creates or updates a variable with the given  management group and name. Policy variables can only be used by a policy definition at the scope they are created or below.
 *
 * @summary  This operation creates or updates a variable with the given  management group and name. Policy variables can only be used by a policy definition at the scope they are created or below.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/preview/2022-08-01-preview/examples/createOrUpdateVariableAtManagementGroup.json
 */
async function createOrUpdateAVariableAtManagementGroup(): Promise<void> {
  const managementGroupId = "DevOrg";
  const variableName = "DemoTestVariable";
  const parameters: Variable = { columns: [{ columnName: "TestColumn" }] };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential);
  const result = await client.variables.createOrUpdateAtManagementGroup(
    managementGroupId,
    variableName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateAVariableAtManagementGroup();
}

main().catch(console.error);
