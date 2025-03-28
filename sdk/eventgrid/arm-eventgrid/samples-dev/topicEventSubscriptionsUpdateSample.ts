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
  EventSubscriptionUpdateParameters,
  EventGridManagementClient,
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an existing event subscription for a topic.
 *
 * @summary Update an existing event subscription for a topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/TopicEventSubscriptions_Update.json
 */
async function topicEventSubscriptionsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const topicName = "exampleTopic1";
  const eventSubscriptionName = "exampleEventSubscriptionName1";
  const eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters = {
    destination: {
      endpointType: "WebHook",
      endpointUrl: "https://requestb.in/15ksip71",
    },
    filter: {
      isSubjectCaseSensitive: true,
      subjectBeginsWith: "existingPrefix",
      subjectEndsWith: "newSuffix",
    },
    labels: ["label1", "label2"],
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topicEventSubscriptions.beginUpdateAndWait(
    resourceGroupName,
    topicName,
    eventSubscriptionName,
    eventSubscriptionUpdateParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await topicEventSubscriptionsUpdate();
}

main().catch(console.error);
