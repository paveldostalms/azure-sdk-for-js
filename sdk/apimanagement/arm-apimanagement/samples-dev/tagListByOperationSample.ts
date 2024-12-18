/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all Tags associated with the Operation.
 *
 * @summary Lists all Tags associated with the Operation.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementListApiOperationTags.json
 */
async function apiManagementListApiOperationTags() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const apiId = "57d2ef278aa04f0888cba3f3";
    const operationId = "57d2ef278aa04f0888cba3f6";
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const resArray = new Array();
    for await (let item of client.tag.listByOperation(
        resourceGroupName,
        serviceName,
        apiId,
        operationId
    )) {
        resArray.push(item);
    }
    console.log(resArray);
}

async function main() {
    apiManagementListApiOperationTags();
}

main().catch(console.error);
