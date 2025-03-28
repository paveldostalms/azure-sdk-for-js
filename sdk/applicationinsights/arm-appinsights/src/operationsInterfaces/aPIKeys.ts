/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationInsightsComponentAPIKey,
  APIKeysListOptionalParams,
  APIKeyRequest,
  APIKeysCreateOptionalParams,
  APIKeysCreateResponse,
  APIKeysDeleteOptionalParams,
  APIKeysDeleteResponse,
  APIKeysGetOptionalParams,
  APIKeysGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a APIKeys. */
export interface APIKeys {
  /**
   * Gets a list of API keys of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: APIKeysListOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationInsightsComponentAPIKey>;
  /**
   * Create an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param aPIKeyProperties Properties that need to be specified to create an API key of a Application
   *                         Insights component.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    aPIKeyProperties: APIKeyRequest,
    options?: APIKeysCreateOptionalParams,
  ): Promise<APIKeysCreateResponse>;
  /**
   * Delete an API Key of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    keyId: string,
    options?: APIKeysDeleteOptionalParams,
  ): Promise<APIKeysDeleteResponse>;
  /**
   * Get the API Key for this key id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param keyId The API Key ID. This is unique within a Application Insights component.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    keyId: string,
    options?: APIKeysGetOptionalParams,
  ): Promise<APIKeysGetResponse>;
}
