/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
    PortalSignupSettings,
    SignUpSettingsCreateOrUpdateOptionalParams,
    SignUpSettingsCreateOrUpdateResponse,
    SignUpSettingsGetEntityTagOptionalParams,
    SignUpSettingsGetEntityTagResponse,
    SignUpSettingsGetOptionalParams,
    SignUpSettingsGetResponse,
    SignUpSettingsUpdateOptionalParams
} from "../models/index.js";

/** Interface representing a SignUpSettings. */
export interface SignUpSettings {
    /**
     * Gets the entity state (Etag) version of the SignUpSettings.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        options?: SignUpSettingsGetEntityTagOptionalParams
    ): Promise<SignUpSettingsGetEntityTagResponse>;
    /**
     * Get Sign Up Settings for the Portal
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        options?: SignUpSettingsGetOptionalParams
    ): Promise<SignUpSettingsGetResponse>;
    /**
     * Update Sign-Up settings.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param parameters Update Sign-Up settings.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        ifMatch: string,
        parameters: PortalSignupSettings,
        options?: SignUpSettingsUpdateOptionalParams
    ): Promise<void>;
    /**
     * Create or Update Sign-Up settings.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param parameters Create or update parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        parameters: PortalSignupSettings,
        options?: SignUpSettingsCreateOrUpdateOptionalParams
    ): Promise<SignUpSettingsCreateOrUpdateResponse>;
}
