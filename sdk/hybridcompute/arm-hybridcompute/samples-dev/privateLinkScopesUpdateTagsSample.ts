/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { TagsResource } from "@azure/arm-hybridcompute";
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 *
 * @summary Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-07-31-preview/examples/privateLinkScope/PrivateLinkScopes_UpdateTagsOnly.json
 */
async function privateLinkScopeUpdateTagsOnly(): Promise<void> {
  const subscriptionId = process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDCOMPUTE_RESOURCE_GROUP"] || "my-resource-group";
  const scopeName = "my-privatelinkscope";
  const privateLinkScopeTags: TagsResource = {
    tags: { tag1: "Value1", tag2: "Value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.updateTags(
    resourceGroupName,
    scopeName,
    privateLinkScopeTags,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await privateLinkScopeUpdateTagsOnly();
}

main().catch(console.error);
