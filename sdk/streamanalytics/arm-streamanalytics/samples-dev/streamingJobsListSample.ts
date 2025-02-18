/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { StreamingJobsListOptionalParams } from "@azure/arm-streamanalytics";
import { StreamAnalyticsManagementClient } from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all of the streaming jobs in the given subscription.
 *
 * @summary Lists all of the streaming jobs in the given subscription.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_List_BySubscription_NoExpand.json
 */
async function listAllStreamingJobsInASubscriptionAndDoNotUseTheExpandODataQueryParameter(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.streamingJobs.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Lists all of the streaming jobs in the given subscription.
 *
 * @summary Lists all of the streaming jobs in the given subscription.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_List_BySubscription_Expand.json
 */
async function listAllStreamingJobsInASubscriptionAndUseTheExpandODataQueryParameterToExpandInputsOutputsTransformationAndFunctions(): Promise<void> {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const expand = "inputs,outputs,transformation,functions";
  const options: StreamingJobsListOptionalParams = { expand };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.streamingJobs.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllStreamingJobsInASubscriptionAndDoNotUseTheExpandODataQueryParameter();
  await listAllStreamingJobsInASubscriptionAndUseTheExpandODataQueryParameterToExpandInputsOutputsTransformationAndFunctions();
}

main().catch(console.error);
