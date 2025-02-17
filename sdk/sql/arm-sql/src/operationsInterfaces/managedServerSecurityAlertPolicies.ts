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
  ManagedServerSecurityAlertPolicy,
  ManagedServerSecurityAlertPoliciesListByInstanceOptionalParams,
  SecurityAlertPolicyName,
  ManagedServerSecurityAlertPoliciesGetOptionalParams,
  ManagedServerSecurityAlertPoliciesGetResponse,
  ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedServerSecurityAlertPolicies. */
export interface ManagedServerSecurityAlertPolicies {
  /**
   * Get the managed server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedServerSecurityAlertPoliciesListByInstanceOptionalParams,
  ): PagedAsyncIterableIterator<ManagedServerSecurityAlertPolicy>;
  /**
   * Get a managed server's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: ManagedServerSecurityAlertPoliciesGetOptionalParams,
  ): Promise<ManagedServerSecurityAlertPoliciesGetResponse>;
  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The managed server security alert policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: ManagedServerSecurityAlertPolicy,
    options?: ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse>,
      ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The managed server security alert policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: ManagedServerSecurityAlertPolicy,
    options?: ManagedServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ): Promise<ManagedServerSecurityAlertPoliciesCreateOrUpdateResponse>;
}
