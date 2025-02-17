/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { InstanceFailoverGroup } from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a failover group.
 *
 * @summary Creates or updates a failover group.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/InstanceFailoverGroupCreateOrUpdate.json
 */
async function createFailoverGroup(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const locationName = "Japan East";
  const failoverGroupName = "failover-group-test-3";
  const parameters: InstanceFailoverGroup = {
    managedInstancePairs: [
      {
        partnerManagedInstanceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-secondary-mngdInstance",
        primaryManagedInstanceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-primary-mngdInstance",
      },
    ],
    partnerRegions: [{ location: "Japan West" }],
    readOnlyEndpoint: { failoverPolicy: "Disabled" },
    readWriteEndpoint: {
      failoverPolicy: "Automatic",
      failoverWithDataLossGracePeriodMinutes: 480,
    },
    secondaryType: "Geo",
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.instanceFailoverGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    locationName,
    failoverGroupName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createFailoverGroup();
}

main().catch(console.error);
