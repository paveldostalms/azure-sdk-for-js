/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { ApplicationInsightsManagementClient } = require("@azure/arm-appinsights");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Create a new workbook template.
 *
 * @summary Create a new workbook template.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2020-11-20/examples/WorkbookTemplateAdd.json
 */
async function workbookTemplateAdd() {
  const subscriptionId = process.env["APPLICATIONINSIGHTS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APPLICATIONINSIGHTS_RESOURCE_GROUP"] || "my-resource-group";
  const resourceName = "testtemplate2";
  const workbookTemplateProperties = {
    author: "Contoso",
    galleries: [
      {
        name: "Simple Template",
        type: "tsg",
        category: "Failures",
        order: 100,
        resourceType: "microsoft.insights/components",
      },
    ],
    location: "west us",
    priority: 1,
    tags: {},
    templateData: {
      $schema:
        "https://github.com/Microsoft/Application-Insights-Workbooks/blob/master/schema/workbook.json",
      items: [
        {
          name: "text - 2",
          type: 1,
          content: {
            json: "## New workbook\n---\n\nWelcome to your new workbook.  This area will display text formatted as markdown.\n\n\nWe've included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections.",
          },
        },
        {
          name: "query - 2",
          type: 3,
          content: {
            exportToExcelOptions: "visible",
            query:
              "union withsource=TableName *\n| summarize Count=count() by TableName\n| render barchart",
            queryType: 0,
            resourceType: "microsoft.operationalinsights/workspaces",
            size: 1,
            version: "KqlItem/1.0",
          },
        },
      ],
      styleSettings: {},
      version: "Notebook/1.0",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(credential, subscriptionId);
  const result = await client.workbookTemplates.createOrUpdate(
    resourceGroupName,
    resourceName,
    workbookTemplateProperties,
  );
  console.log(result);
}

async function main() {
  await workbookTemplateAdd();
}

main().catch(console.error);
