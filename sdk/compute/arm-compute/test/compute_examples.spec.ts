/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { ComputeManagementClient } from "../src/computeManagementClient.js";
import { NetworkManagementClient, VirtualNetwork, NetworkInterface, Subnet } from "@azure/arm-network";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Compute test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ComputeManagementClient;
  let network_client: NetworkManagementClient;
  let location: string;
  let resourceGroupName: string;
  let availabilitySetName: string;
  let network_name: string;
  let subnet_name: string;
  let interface_name: string;
  let virtual_machine_name: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ComputeManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    network_client = new NetworkManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus2";
    resourceGroupName = "myjstest";
    availabilitySetName = "availabilitySets123";
    network_name = "networknamexx1";
    subnet_name = "subnetnamexx1";
    interface_name = "interfacex1";
    virtual_machine_name = "virtualmachinex1";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  //network_client.virtualNetworks.createOrUpdate
  async function createVirtualNetwork(): Promise<void> {
    const parameter: VirtualNetwork = {
      location: location,
      addressSpace: {
        addressPrefixes: ["10.0.0.0/16"],
      },
    };
    await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
      resourceGroupName,
      network_name,
      parameter,
      testPollingOptions
    );

    const subnet_parameter: Subnet = {
      addressPrefix: "10.0.0.0/24",
    };
    await network_client.subnets.beginCreateOrUpdateAndWait(
      resourceGroupName,
      network_name,
      subnet_name,
      subnet_parameter,
      testPollingOptions
    );
  }

  //network_client.networkInterfaces.createOrUpdate
  async function createNetworkInterface(
    group_name: any,
    location: any,
    nic_name: any
  ): Promise<void> {
    const parameter: NetworkInterface = {
      location: location,
      ipConfigurations: [
        {
          name: "MyIpConfig",
          subnet: {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/virtualNetworks/" +
              network_name +
              "/subnets/" +
              subnet_name,
          },
        },
      ],
    };
    await network_client.networkInterfaces.beginCreateOrUpdateAndWait(
      group_name,
      nic_name,
      parameter,
      testPollingOptions
    );
  }

  it("operations list test", async function () {
    const resArray = new Array();
    for await (const item of client.operations.list()) {
      resArray.push(item);
    }
    assert.notEqual(resArray.length, 0);
  });

  it("availabilitySets create test", async function () {
    const res = await client.availabilitySets.createOrUpdate(resourceGroupName, availabilitySetName, {
      platformFaultDomainCount: 2,
      platformUpdateDomainCount: 20,
      location: location,
    })
    assert.equal(res.name, availabilitySetName);
  });

  it("availabilitySets update test", async function () {
    const res = await client.availabilitySets.update(resourceGroupName, availabilitySetName, {
      platformFaultDomainCount: 2,
      platformUpdateDomainCount: 20
    })
    assert.equal(res.type, "Microsoft.Compute/availabilitySets");
  });

  it("availabilitySets get test", async function () {
    const res = await client.availabilitySets.get(resourceGroupName, availabilitySetName);
    assert.equal(res.name, availabilitySetName);
  });

  it("availabilitySets list test", async function () {
    const resArray = new Array();
    for await (const item of client.availabilitySets.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("availabilitySets delete test", async function () {
    await client.availabilitySets.delete(resourceGroupName, availabilitySetName);
    const resArray = new Array();
    for await (const item of client.availabilitySets.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("virtualMachines create test", async function () {
    await createVirtualNetwork();
    await createNetworkInterface(resourceGroupName, location, interface_name);
    const res = await client.virtualMachines.beginCreateOrUpdateAndWait(resourceGroupName, virtual_machine_name, {
      location: location,
      hardwareProfile: {
        vmSize: "Standard_B1ls",
      },
      storageProfile: {
        imageReference: {
          sku: "2016-Datacenter",
          publisher: "MicrosoftWindowsServer",
          version: "latest",
          offer: "WindowsServer",
        },
        osDisk: {
          caching: "ReadWrite",
          managedDisk: {
            storageAccountType: "Standard_LRS",
          },
          name: "myVMosdisk",
          createOption: "FromImage",
        },
        dataDisks: [
          {
            diskSizeGB: 1023,
            createOption: "Empty",
            lun: 0,
          },
          {
            diskSizeGB: 1023,
            createOption: "Empty",
            lun: 1,
          },
        ],
      },
      osProfile: {
        adminUsername: "testuser",
        computerName: "myVM",
        adminPassword: "SecretPlaceholder123",
        windowsConfiguration: {
          enableAutomaticUpdates: true, // need automatic update for reimage
        },
      },
      networkProfile: {
        networkInterfaces: [
          {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/networkInterfaces/" +
              interface_name +
              "",
            primary: true,
          },
        ],
      }
    }, testPollingOptions);
    assert.equal(res.name, virtual_machine_name);
  });

  it("virtualMachines get test", async function () {
    const res = await client.virtualMachines.get(resourceGroupName, virtual_machine_name);
    assert.equal(res.name, virtual_machine_name);
  });

  it("virtualMachines list test", async function () {
    const resArray = new Array();
    for await (const item of client.virtualMachines.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("virtualMachines update test", async function () {
    await client.virtualMachines.beginUpdateAndWait(resourceGroupName, virtual_machine_name, {
      networkProfile: {
        networkInterfaces: [
          {
            id:
              "/subscriptions/" +
              subscriptionId +
              "/resourceGroups/" +
              resourceGroupName +
              "/providers/Microsoft.Network/networkInterfaces/" +
              interface_name +
              "",
            primary: true,
          },
        ],
      }
    }, testPollingOptions)
    const res1 = await client.virtualMachines.get(resourceGroupName, virtual_machine_name);
    assert.equal(res1.name, virtual_machine_name);
  });

  it("virtualMachines delete test", async function () {
    const resArray = new Array();
    await client.virtualMachines.beginDeleteAndWait(resourceGroupName, virtual_machine_name, testPollingOptions);
    for await (const item of client.virtualMachines.list(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
    await client.disks.beginDeleteAndWait(resourceGroupName, "myVMosdisk", testPollingOptions)
    await network_client.networkInterfaces.beginDeleteAndWait(resourceGroupName, interface_name, testPollingOptions);
    await network_client.subnets.beginDeleteAndWait(resourceGroupName, network_name, subnet_name, testPollingOptions);
    await network_client.virtualNetworks.beginDeleteAndWait(resourceGroupName, network_name, testPollingOptions);
  });
});
