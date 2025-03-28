/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PolicySetDefinitionVersion, PolicyClient } from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation creates or updates a policy set definition version in the given subscription with the given name and version.
 *
 * @summary This operation creates or updates a policy set definition version in the given subscription with the given name and version.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2023-04-01/examples/createOrUpdatePolicySetDefinitionVersion.json
 */
async function createOrUpdateAPolicySetDefinitionVersion(): Promise<void> {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "ae640e6b-ba3e-4256-9d62-2993eecfa6f2";
  const policySetDefinitionName = "CostManagement";
  const policyDefinitionVersion = "1.2.1";
  const parameters: PolicySetDefinitionVersion = {
    description: "Policies to enforce low cost storage SKUs",
    displayName: "Cost Management",
    metadata: { category: "Cost Management" },
    parameters: {
      namePrefix: {
        type: "String",
        defaultValue: "myPrefix",
        metadata: { displayName: "Prefix to enforce on resource names" },
      },
    },
    policyDefinitions: [
      {
        parameters: {
          listOfAllowedSKUs: { value: ["Standard_GRS", "Standard_LRS"] },
        },
        policyDefinitionId:
          "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1",
        policyDefinitionReferenceId: "Limit_Skus",
      },
      {
        parameters: {
          prefix: { value: "[parameters('namePrefix')]" },
          suffix: { value: "-LC" },
        },
        policyDefinitionId:
          "/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming",
        policyDefinitionReferenceId: "Resource_Naming",
      },
    ],
    version: "1.2.1",
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const result = await client.policySetDefinitionVersions.createOrUpdate(
    policySetDefinitionName,
    policyDefinitionVersion,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateAPolicySetDefinitionVersion();
}

main().catch(console.error);
