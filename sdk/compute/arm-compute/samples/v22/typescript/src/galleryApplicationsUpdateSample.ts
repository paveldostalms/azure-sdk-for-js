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
  GalleryApplicationUpdate,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a gallery Application Definition.
 *
 * @summary Update a gallery Application Definition.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryApplication_Update.json
 */
async function updateASimpleGalleryApplication(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplication: GalleryApplicationUpdate = {
    description: "This is the gallery application description.",
    customActions: [
      {
        name: "myCustomAction",
        description: "This is the custom action description.",
        parameters: [
          {
            name: "myCustomActionParameter",
            type: "String",
            description: "This is the description of the parameter",
            defaultValue: "default value of parameter.",
            required: false,
          },
        ],
        script: "myCustomActionScript",
      },
    ],
    eula: "This is the gallery application EULA.",
    privacyStatementUri: "myPrivacyStatementUri}",
    releaseNoteUri: "myReleaseNoteUri",
    supportedOSType: "Windows",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryApplications.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    galleryApplication,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateASimpleGalleryApplication();
}

main().catch(console.error);
