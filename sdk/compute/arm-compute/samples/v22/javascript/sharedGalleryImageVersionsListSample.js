/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to List shared gallery image versions by subscription id or tenant id.
 *
 * @summary List shared gallery image versions by subscription id or tenant id.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/sharedGalleryExamples/SharedGalleryImageVersions_List.json
 */
async function listSharedGalleryImageVersions() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "myLocation";
  const galleryUniqueName = "galleryUniqueName";
  const galleryImageName = "myGalleryImageName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sharedGalleryImageVersions.list(
    location,
    galleryUniqueName,
    galleryImageName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listSharedGalleryImageVersions();
}

main().catch(console.error);
