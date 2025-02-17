/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import { TdeCertificate, TdeCertificatesCreateOptionalParams } from "../models/index.js";

/** Interface representing a TdeCertificates. */
export interface TdeCertificates {
  /**
   * Creates a TDE certificate for a given server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested TDE certificate to be created or updated.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    serverName: string,
    parameters: TdeCertificate,
    options?: TdeCertificatesCreateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Creates a TDE certificate for a given server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested TDE certificate to be created or updated.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: TdeCertificate,
    options?: TdeCertificatesCreateOptionalParams,
  ): Promise<void>;
}
