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
    ApiManagementServiceBackupRestoreParameters
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete.
 *
 * @summary Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementRestoreWithAccessKey.json
 */
async function apiManagementRestoreService() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const parameters: ApiManagementServiceBackupRestoreParameters = {
        accessKey: "**************************************************",
        accessType: "AccessKey",
        backupName: "apimService1backup_2017_03_19",
        containerName: "backupContainer",
        storageAccount: "teststorageaccount"
    };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.apiManagementService.beginRestoreAndWait(
        resourceGroupName,
        serviceName,
        parameters
    );
    console.log(result);
}

async function main() {
    apiManagementRestoreService();
}

main().catch(console.error);
