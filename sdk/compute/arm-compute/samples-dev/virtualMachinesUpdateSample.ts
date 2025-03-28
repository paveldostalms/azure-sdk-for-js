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
  VirtualMachineUpdate,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to update a virtual machine.
 *
 * @summary The operation to update a virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/virtualMachineExamples/VirtualMachine_Update_DetachDataDiskUsingToBeDetachedProperty.json
 */
async function updateAVMByDetachingDataDisk(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmName = "myVM";
  const parameters: VirtualMachineUpdate = {
    hardwareProfile: { vmSize: "Standard_D2_v2" },
    networkProfile: {
      networkInterfaces: [
        {
          id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}",
          primary: true,
        },
      ],
    },
    osProfile: {
      adminPassword: "{your-password}",
      adminUsername: "{your-username}",
      computerName: "myVM",
    },
    storageProfile: {
      dataDisks: [
        { createOption: "Empty", diskSizeGB: 1023, lun: 0, toBeDetached: true },
        {
          createOption: "Empty",
          diskSizeGB: 1023,
          lun: 1,
          toBeDetached: false,
        },
      ],
      imageReference: {
        offer: "WindowsServer",
        publisher: "MicrosoftWindowsServer",
        sku: "2016-Datacenter",
        version: "latest",
      },
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadWrite",
        createOption: "FromImage",
        managedDisk: { storageAccountType: "Standard_LRS" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginUpdateAndWait(
    resourceGroupName,
    vmName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to The operation to update a virtual machine.
 *
 * @summary The operation to update a virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-11-01/examples/virtualMachineExamples/VirtualMachine_Update_ForceDetachDataDisk.json
 */
async function updateAVMByForceDetachingDataDisk(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const vmName = "myVM";
  const parameters: VirtualMachineUpdate = {
    hardwareProfile: { vmSize: "Standard_D2_v2" },
    networkProfile: {
      networkInterfaces: [
        {
          id: "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}",
          primary: true,
        },
      ],
    },
    osProfile: {
      adminPassword: "{your-password}",
      adminUsername: "{your-username}",
      computerName: "myVM",
    },
    storageProfile: {
      dataDisks: [
        {
          createOption: "Empty",
          detachOption: "ForceDetach",
          diskSizeGB: 1023,
          lun: 0,
          toBeDetached: true,
        },
        {
          createOption: "Empty",
          diskSizeGB: 1023,
          lun: 1,
          toBeDetached: false,
        },
      ],
      imageReference: {
        offer: "WindowsServer",
        publisher: "MicrosoftWindowsServer",
        sku: "2016-Datacenter",
        version: "latest",
      },
      osDisk: {
        name: "myVMosdisk",
        caching: "ReadWrite",
        createOption: "FromImage",
        managedDisk: { storageAccountType: "Standard_LRS" },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginUpdateAndWait(
    resourceGroupName,
    vmName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAVMByDetachingDataDisk();
  await updateAVMByForceDetachingDataDisk();
}

main().catch(console.error);
