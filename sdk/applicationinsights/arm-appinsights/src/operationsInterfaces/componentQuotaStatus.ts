/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ComponentQuotaStatusGetOptionalParams,
  ComponentQuotaStatusGetResponse,
} from "../models/index.js";

/** Interface representing a ComponentQuotaStatus. */
export interface ComponentQuotaStatus {
  /**
   * Returns daily data volume cap (quota) status for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ComponentQuotaStatusGetOptionalParams,
  ): Promise<ComponentQuotaStatusGetResponse>;
}
