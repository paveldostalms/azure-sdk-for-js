/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FarmBeats,
  FarmBeatsModelsListBySubscriptionOptionalParams,
  FarmBeatsModelsListByResourceGroupOptionalParams,
  FarmBeatsModelsGetOptionalParams,
  FarmBeatsModelsGetResponse,
  FarmBeatsModelsCreateOrUpdateOptionalParams,
  FarmBeatsModelsCreateOrUpdateResponse,
  FarmBeatsUpdateRequestModel,
  FarmBeatsModelsUpdateOptionalParams,
  FarmBeatsModelsUpdateResponse,
  FarmBeatsModelsDeleteOptionalParams,
  FarmBeatsModelsGetOperationResultOptionalParams,
  FarmBeatsModelsGetOperationResultResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FarmBeatsModels. */
export interface FarmBeatsModels {
  /**
   * Lists the FarmBeats instances for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats>;
  /**
   * Lists the FarmBeats instances for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats>;
  /**
   * Get FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsGetOptionalParams
  ): Promise<FarmBeatsModelsGetResponse>;
  /**
   * Create or update FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body FarmBeats resource create or update request object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeats,
    options?: FarmBeatsModelsCreateOrUpdateOptionalParams
  ): Promise<FarmBeatsModelsCreateOrUpdateResponse>;
  /**
   * Update a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body Request object.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeatsUpdateRequestModel,
    options?: FarmBeatsModelsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FarmBeatsModelsUpdateResponse>,
      FarmBeatsModelsUpdateResponse
    >
  >;
  /**
   * Update a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param body Request object.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    body: FarmBeatsUpdateRequestModel,
    options?: FarmBeatsModelsUpdateOptionalParams
  ): Promise<FarmBeatsModelsUpdateResponse>;
  /**
   * Delete a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get operationResults for a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param operationResultsId The operation results id.
   * @param options The options parameters.
   */
  getOperationResult(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    operationResultsId: string,
    options?: FarmBeatsModelsGetOperationResultOptionalParams
  ): Promise<FarmBeatsModelsGetOperationResultResponse>;
}
