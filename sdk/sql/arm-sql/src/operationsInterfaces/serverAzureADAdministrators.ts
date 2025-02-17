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
  ServerAzureADAdministrator,
  ServerAzureADAdministratorsListByServerOptionalParams,
  AdministratorName,
  ServerAzureADAdministratorsGetOptionalParams,
  ServerAzureADAdministratorsGetResponse,
  ServerAzureADAdministratorsCreateOrUpdateOptionalParams,
  ServerAzureADAdministratorsCreateOrUpdateResponse,
  ServerAzureADAdministratorsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerAzureADAdministrators. */
export interface ServerAzureADAdministrators {
  /**
   * Gets a list of Azure Active Directory administrators in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerAzureADAdministratorsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerAzureADAdministrator>;
  /**
   * Gets a Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsGetOptionalParams,
  ): Promise<ServerAzureADAdministratorsGetResponse>;
  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param parameters The requested Azure Active Directory administrator Resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    parameters: ServerAzureADAdministrator,
    options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerAzureADAdministratorsCreateOrUpdateResponse>,
      ServerAzureADAdministratorsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param parameters The requested Azure Active Directory administrator Resource state.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    parameters: ServerAzureADAdministrator,
    options?: ServerAzureADAdministratorsCreateOrUpdateOptionalParams,
  ): Promise<ServerAzureADAdministratorsCreateOrUpdateResponse>;
  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param administratorName The name of server active directory administrator.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    administratorName: AdministratorName,
    options?: ServerAzureADAdministratorsDeleteOptionalParams,
  ): Promise<void>;
}
