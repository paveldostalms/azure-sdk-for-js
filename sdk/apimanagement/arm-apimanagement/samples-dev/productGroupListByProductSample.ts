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
 * This sample demonstrates how to Lists the collection of developer groups associated with the specified product.
 *
 * @summary Lists the collection of developer groups associated with the specified product.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementListProductGroups.json
 */
async function apiManagementListProductGroups() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const productId = "5600b57e7e8880006a060002";
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const resArray = new Array();
    for await (let item of client.productGroup.listByProduct(
        resourceGroupName,
        serviceName,
        productId
    )) {
        resArray.push(item);
    }
    console.log(resArray);
}

async function main() {
    apiManagementListProductGroups();
}

main().catch(console.error);
