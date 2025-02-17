/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ManagedInstanceOperation,
  ManagedInstanceOperationsListByManagedInstanceOptionalParams,
  ManagedInstanceOperationsGetOptionalParams,
  ManagedInstanceOperationsGetResponse,
  ManagedInstanceOperationsCancelOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceOperations. */
export interface ManagedInstanceOperations {
  /**
   * Gets a list of operations performed on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams,
  ): PagedAsyncIterableIterator<ManagedInstanceOperation>;
  /**
   * Gets a management operation on a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    operationId: string,
    options?: ManagedInstanceOperationsGetOptionalParams,
  ): Promise<ManagedInstanceOperationsGetResponse>;
  /**
   * Cancels the asynchronous operation on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    managedInstanceName: string,
    operationId: string,
    options?: ManagedInstanceOperationsCancelOptionalParams,
  ): Promise<void>;
}
