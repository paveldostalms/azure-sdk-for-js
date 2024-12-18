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
    ApiManagementClient,
    ApiReleaseContract
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the details of the release of the API specified by its identifier.
 *
 * @summary Updates the details of the release of the API specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateApiRelease.json
 */
async function apiManagementUpdateApiRelease() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const apiId = "a1";
    const releaseId = "testrev";
    const ifMatch = "*";
    const parameters: ApiReleaseContract = {
        apiId:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ApiManagement/service/apimService1/apis/a1",
        notes: "yahooagain"
    };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.apiRelease.update(
        resourceGroupName,
        serviceName,
        apiId,
        releaseId,
        ifMatch,
        parameters
    );
    console.log(result);
}

async function main() {
    apiManagementUpdateApiRelease();
}

main().catch(console.error);
