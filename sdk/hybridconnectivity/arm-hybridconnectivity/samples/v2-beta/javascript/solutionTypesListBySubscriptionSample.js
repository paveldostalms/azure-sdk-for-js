// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { HybridConnectivityManagementAPI } = require("@azure/arm-hybridconnectivity");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list SolutionTypeResource resources by subscription ID
 *
 * @summary list SolutionTypeResource resources by subscription ID
 * x-ms-original-file: 2024-12-01/SolutionTypes_ListBySubscription.json
 */
async function solutionTypesListBySubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5ACC4579-DB34-4C2F-8F8C-25061168F342";
  const client = new HybridConnectivityManagementAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.solutionTypes.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await solutionTypesListBySubscription();
}

main().catch(console.error);
