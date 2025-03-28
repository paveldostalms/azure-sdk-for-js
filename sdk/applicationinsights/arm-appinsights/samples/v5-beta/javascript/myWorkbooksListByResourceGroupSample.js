/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
const { ApplicationInsightsManagementClient } = require("@azure/arm-appinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get all private workbooks defined within a specified resource group and category.
 *
 * @summary Get all private workbooks defined within a specified resource group and category.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2021-03-08/examples/MyWorkbooksList.json
 */
async function workbooksList() {
  const subscriptionId = "6b643656-33eb-422f-aee8-3ac145d124af";
  const resourceGroupName = "my-resource-group";
  const category = "workbook";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.myWorkbooks.listByResourceGroup(resourceGroupName, category)) {
    resArray.push(item);
  }
  console.log(resArray);
}

workbooksList().catch(console.error);

/**
 * This sample demonstrates how to Get all private workbooks defined within a specified resource group and category.
 *
 * @summary Get all private workbooks defined within a specified resource group and category.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2021-03-08/examples/MyWorkbooksList2.json
 */
async function workbooksList2() {
  const subscriptionId = "6b643656-33eb-422f-aee8-3ac145d124af";
  const resourceGroupName = "my-resource-group";
  const category = "workbook";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.myWorkbooks.listByResourceGroup(resourceGroupName, category)) {
    resArray.push(item);
  }
  console.log(resArray);
}

workbooksList2().catch(console.error);
