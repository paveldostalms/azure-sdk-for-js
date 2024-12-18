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
 * This sample demonstrates how to Lists report records by geography.
 *
 * @summary Lists report records by geography.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementGetReportsByGeo.json
 */
async function apiManagementGetReportsByGeo() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const filter =
        "timestamp ge datetime'2017-06-01T00:00:00' and timestamp le datetime'2017-06-04T00:00:00'";
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const resArray = new Array();
    for await (let item of client.reports.listByGeo(
        resourceGroupName,
        serviceName,
        filter
    )) {
        resArray.push(item);
    }
    console.log(resArray);
}

async function main() {
    apiManagementGetReportsByGeo();
}

main().catch(console.error);
