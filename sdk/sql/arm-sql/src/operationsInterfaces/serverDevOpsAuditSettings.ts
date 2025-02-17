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
  ServerDevOpsAuditingSettings,
  ServerDevOpsAuditSettingsListByServerOptionalParams,
  DevOpsAuditingSettingsName,
  ServerDevOpsAuditSettingsGetOptionalParams,
  ServerDevOpsAuditSettingsGetResponse,
  ServerDevOpsAuditSettingsCreateOrUpdateOptionalParams,
  ServerDevOpsAuditSettingsCreateOrUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerDevOpsAuditSettings. */
export interface ServerDevOpsAuditSettings {
  /**
   * Lists DevOps audit settings of a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDevOpsAuditSettingsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerDevOpsAuditingSettings>;
  /**
   * Gets a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    devOpsAuditingSettingsName: DevOpsAuditingSettingsName,
    options?: ServerDevOpsAuditSettingsGetOptionalParams,
  ): Promise<ServerDevOpsAuditSettingsGetResponse>;
  /**
   * Creates or updates a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName
   * @param parameters Properties of DevOps audit settings
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    devOpsAuditingSettingsName: DevOpsAuditingSettingsName,
    parameters: ServerDevOpsAuditingSettings,
    options?: ServerDevOpsAuditSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerDevOpsAuditSettingsCreateOrUpdateResponse>,
      ServerDevOpsAuditSettingsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a server's DevOps audit settings.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param devOpsAuditingSettingsName
   * @param parameters Properties of DevOps audit settings
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    devOpsAuditingSettingsName: DevOpsAuditingSettingsName,
    parameters: ServerDevOpsAuditingSettings,
    options?: ServerDevOpsAuditSettingsCreateOrUpdateOptionalParams,
  ): Promise<ServerDevOpsAuditSettingsCreateOrUpdateResponse>;
}
