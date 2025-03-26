/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  AgentPool,
  AgentPoolsListOptionalParams,
  AgentPoolsAbortLatestOperationOptionalParams,
  AgentPoolsAbortLatestOperationResponse,
  AgentPoolsGetOptionalParams,
  AgentPoolsGetResponse,
  AgentPoolsCreateOrUpdateOptionalParams,
  AgentPoolsCreateOrUpdateResponse,
  AgentPoolsDeleteOptionalParams,
  AgentPoolsDeleteResponse,
  AgentPoolsGetUpgradeProfileOptionalParams,
  AgentPoolsGetUpgradeProfileResponse,
  AgentPoolDeleteMachinesParameter,
  AgentPoolsDeleteMachinesOptionalParams,
  AgentPoolsDeleteMachinesResponse,
  AgentPoolsGetAvailableAgentPoolVersionsOptionalParams,
  AgentPoolsGetAvailableAgentPoolVersionsResponse,
  AgentPoolsUpgradeNodeImageVersionOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AgentPools. */
export interface AgentPools {
  /**
   * Gets a list of agent pools in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: AgentPoolsListOptionalParams,
  ): PagedAsyncIterableIterator<AgentPool>;
  /**
   * Aborts the currently running operation on the agent pool. The Agent Pool will be moved to a
   * Canceling state and eventually to a Canceled state when cancellation finishes. If the operation
   * completes before cancellation can take place, an error is returned.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginAbortLatestOperation(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsAbortLatestOperationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsAbortLatestOperationResponse>,
      AgentPoolsAbortLatestOperationResponse
    >
  >;
  /**
   * Aborts the currently running operation on the agent pool. The Agent Pool will be moved to a
   * Canceling state and eventually to a Canceled state when cancellation finishes. If the operation
   * completes before cancellation can take place, an error is returned.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginAbortLatestOperationAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsAbortLatestOperationOptionalParams,
  ): Promise<AgentPoolsAbortLatestOperationResponse>;
  /**
   * Gets the specified managed cluster agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsGetOptionalParams,
  ): Promise<AgentPoolsGetResponse>;
  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters The agent pool to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    parameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsCreateOrUpdateResponse>,
      AgentPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters The agent pool to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    parameters: AgentPool,
    options?: AgentPoolsCreateOrUpdateOptionalParams,
  ): Promise<AgentPoolsCreateOrUpdateResponse>;
  /**
   * Deletes an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsDeleteResponse>,
      AgentPoolsDeleteResponse
    >
  >;
  /**
   * Deletes an agent pool in the specified managed cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams,
  ): Promise<AgentPoolsDeleteResponse>;
  /**
   * Gets the upgrade profile for an agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  getUpgradeProfile(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsGetUpgradeProfileOptionalParams,
  ): Promise<AgentPoolsGetUpgradeProfileResponse>;
  /**
   * Deletes specific machines in an agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param machines A list of machines from the agent pool to be deleted.
   * @param options The options parameters.
   */
  beginDeleteMachines(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    machines: AgentPoolDeleteMachinesParameter,
    options?: AgentPoolsDeleteMachinesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AgentPoolsDeleteMachinesResponse>,
      AgentPoolsDeleteMachinesResponse
    >
  >;
  /**
   * Deletes specific machines in an agent pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param machines A list of machines from the agent pool to be deleted.
   * @param options The options parameters.
   */
  beginDeleteMachinesAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    machines: AgentPoolDeleteMachinesParameter,
    options?: AgentPoolsDeleteMachinesOptionalParams,
  ): Promise<AgentPoolsDeleteMachinesResponse>;
  /**
   * See [supported Kubernetes
   * versions](https://docs.microsoft.com/azure/aks/supported-kubernetes-versions) for more details about
   * the version lifecycle.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param options The options parameters.
   */
  getAvailableAgentPoolVersions(
    resourceGroupName: string,
    resourceName: string,
    options?: AgentPoolsGetAvailableAgentPoolVersionsOptionalParams,
  ): Promise<AgentPoolsGetAvailableAgentPoolVersionsResponse>;
  /**
   * Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the
   * nodes. AKS provides one new image per week with the latest updates. For more details on node image
   * versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginUpgradeNodeImageVersion(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsUpgradeNodeImageVersionOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Upgrading the node image version of an agent pool applies the newest OS and runtime updates to the
   * nodes. AKS provides one new image per week with the latest updates. For more details on node image
   * versions, see: https://docs.microsoft.com/azure/aks/node-image-upgrade
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  beginUpgradeNodeImageVersionAndWait(
    resourceGroupName: string,
    resourceName: string,
    agentPoolName: string,
    options?: AgentPoolsUpgradeNodeImageVersionOptionalParams,
  ): Promise<void>;
}
