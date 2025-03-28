/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  StorageType,
  ComponentLinkedStorageAccountsGetOptionalParams,
  ComponentLinkedStorageAccountsGetResponse,
  ComponentLinkedStorageAccounts,
  ComponentLinkedStorageAccountsCreateAndUpdateOptionalParams,
  ComponentLinkedStorageAccountsCreateAndUpdateResponse,
  ComponentLinkedStorageAccountsPatch,
  ComponentLinkedStorageAccountsUpdateOptionalParams,
  ComponentLinkedStorageAccountsUpdateResponse,
  ComponentLinkedStorageAccountsDeleteOptionalParams,
} from "../models/index.js";

/** Interface representing a ComponentLinkedStorageAccountsOperations. */
export interface ComponentLinkedStorageAccountsOperations {
  /**
   * Returns the current linked storage settings for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param storageType The type of the Application Insights component data source for the linked storage
   *                    account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    storageType: StorageType,
    options?: ComponentLinkedStorageAccountsGetOptionalParams,
  ): Promise<ComponentLinkedStorageAccountsGetResponse>;
  /**
   * Replace current linked storage account for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param storageType The type of the Application Insights component data source for the linked storage
   *                    account.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update linked storage
   *                                        accounts for an Application Insights component.
   * @param options The options parameters.
   */
  createAndUpdate(
    resourceGroupName: string,
    resourceName: string,
    storageType: StorageType,
    linkedStorageAccountsProperties: ComponentLinkedStorageAccounts,
    options?: ComponentLinkedStorageAccountsCreateAndUpdateOptionalParams,
  ): Promise<ComponentLinkedStorageAccountsCreateAndUpdateResponse>;
  /**
   * Update linked storage accounts for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param storageType The type of the Application Insights component data source for the linked storage
   *                    account.
   * @param linkedStorageAccountsProperties Properties that need to be specified to update a linked
   *                                        storage accounts for an Application Insights component.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    storageType: StorageType,
    linkedStorageAccountsProperties: ComponentLinkedStorageAccountsPatch,
    options?: ComponentLinkedStorageAccountsUpdateOptionalParams,
  ): Promise<ComponentLinkedStorageAccountsUpdateResponse>;
  /**
   * Delete linked storage accounts for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param storageType The type of the Application Insights component data source for the linked storage
   *                    account.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    storageType: StorageType,
    options?: ComponentLinkedStorageAccountsDeleteOptionalParams,
  ): Promise<void>;
}
