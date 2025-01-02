/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import ServiceFabricManagementClient, { getLongRunningPoller } from "@azure-rest/arm-servicefabric";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a Service Fabric application type name resource with the specified name.
 *
 * @summary Delete a Service Fabric application type name resource with the specified name.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ApplicationTypeNameDeleteOperation_example.json
 */
async function deleteAnApplicationType() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "resRg";
  const clusterName = "myCluster";
  const applicationTypeName = "myAppType";
  const credential = new DefaultAzureCredential();
  const client = ServiceFabricManagementClient(credential);
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/clusters/{clusterName}/applicationTypes/{applicationTypeName}",
      subscriptionId,
      resourceGroupName,
      clusterName,
      applicationTypeName
    )
    .delete();
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();
  console.log(result);
}

deleteAnApplicationType().catch(console.error);
