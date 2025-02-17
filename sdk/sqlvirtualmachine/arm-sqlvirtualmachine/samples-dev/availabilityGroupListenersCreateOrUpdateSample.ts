/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { AvailabilityGroupListener } from "@azure/arm-sqlvirtualmachine";
import { SqlVirtualMachineManagementClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates an availability group listener.
 *
 * @summary Creates or updates an availability group listener.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2022-08-01-preview/examples/CreateOrUpdateAvailabilityGroupListener.json
 */
async function createsOrUpdatesAnAvailabilityGroupListenerUsingLoadBalancerThisIsUsedForVMSPresentInSingleSubnet(): Promise<void> {
  const subscriptionId =
    process.env["SQLVIRTUALMACHINE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQLVIRTUALMACHINE_RESOURCE_GROUP"] || "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const availabilityGroupListenerName = "agl-test";
  const parameters: AvailabilityGroupListener = {
    availabilityGroupName: "ag-test",
    loadBalancerConfigurations: [
      {
        loadBalancerResourceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb-test",
        privateIpAddress: {
          ipAddress: "10.1.0.112",
          subnetResourceId:
            "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default",
        },
        probePort: 59983,
        sqlVirtualMachineInstances: [
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm2",
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm3",
        ],
      },
    ],
    port: 1433,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(credential, subscriptionId);
  const result = await client.availabilityGroupListeners.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    availabilityGroupListenerName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an availability group listener.
 *
 * @summary Creates or updates an availability group listener.
 * x-ms-original-file: specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/preview/2022-08-01-preview/examples/CreateOrUpdateAvailabilityGroupListenerWithMultiSubnet.json
 */
async function createsOrUpdatesAnAvailabilityGroupListenerThisIsUsedForVMSPresentInMultiSubnet(): Promise<void> {
  const subscriptionId =
    process.env["SQLVIRTUALMACHINE_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQLVIRTUALMACHINE_RESOURCE_GROUP"] || "testrg";
  const sqlVirtualMachineGroupName = "testvmgroup";
  const availabilityGroupListenerName = "agl-test";
  const parameters: AvailabilityGroupListener = {
    availabilityGroupName: "ag-test",
    multiSubnetIpConfigurations: [
      {
        privateIpAddress: {
          ipAddress: "10.0.0.112",
          subnetResourceId:
            "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default",
        },
        sqlVirtualMachineInstance:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm2",
      },
      {
        privateIpAddress: {
          ipAddress: "10.0.1.112",
          subnetResourceId:
            "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/alternate",
        },
        sqlVirtualMachineInstance:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm1",
      },
    ],
    port: 1433,
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlVirtualMachineManagementClient(credential, subscriptionId);
  const result = await client.availabilityGroupListeners.beginCreateOrUpdateAndWait(
    resourceGroupName,
    sqlVirtualMachineGroupName,
    availabilityGroupListenerName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesAnAvailabilityGroupListenerUsingLoadBalancerThisIsUsedForVMSPresentInSingleSubnet();
  await createsOrUpdatesAnAvailabilityGroupListenerThisIsUsedForVMSPresentInMultiSubnet();
}

main().catch(console.error);
