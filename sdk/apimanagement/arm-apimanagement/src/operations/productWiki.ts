/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
    ProductWikiCreateOrUpdateOptionalParams,
    ProductWikiCreateOrUpdateResponse,
    ProductWikiDeleteOptionalParams,
    ProductWikiGetEntityTagOptionalParams,
    ProductWikiGetEntityTagResponse,
    ProductWikiGetOptionalParams,
    ProductWikiGetResponse,
    ProductWikiUpdateOptionalParams,
    ProductWikiUpdateResponse,
    WikiContract,
    WikiUpdateContract
} from "../models/index.js";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ProductWiki } from "../operationsInterfaces/index.js";

/** Class containing ProductWiki operations. */
export class ProductWikiImpl implements ProductWiki {
    private readonly client: ApiManagementClient;

    /**
     * Initialize a new instance of the class ProductWiki class.
     * @param client Reference to the service client
     */
    constructor(client: ApiManagementClient) {
        this.client = client;
    }

    /**
     * Gets the entity state (Etag) version of the Wiki for a Product specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        options?: ProductWikiGetEntityTagOptionalParams
    ): Promise<ProductWikiGetEntityTagResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, options },
            getEntityTagOperationSpec
        );
    }

    /**
     * Gets the details of the Wiki for a Product specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        options?: ProductWikiGetOptionalParams
    ): Promise<ProductWikiGetResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, options },
            getOperationSpec
        );
    }

    /**
     * Creates a new Wiki for a Product or updates an existing one.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param parameters Create parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        parameters: WikiContract,
        options?: ProductWikiCreateOrUpdateOptionalParams
    ): Promise<ProductWikiCreateOrUpdateResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, parameters, options },
            createOrUpdateOperationSpec
        );
    }

    /**
     * Updates the details of the Wiki for a Product specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param parameters Wiki Update parameters.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        ifMatch: string,
        parameters: WikiUpdateContract,
        options?: ProductWikiUpdateOptionalParams
    ): Promise<ProductWikiUpdateResponse> {
        return this.client.sendOperationRequest(
            {
                resourceGroupName,
                serviceName,
                productId,
                ifMatch,
                parameters,
                options
            },
            updateOperationSpec
        );
    }

    /**
     * Deletes the specified Wiki from a Product.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        ifMatch: string,
        options?: ProductWikiDeleteOptionalParams
    ): Promise<void> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, productId, ifMatch, options },
            deleteOperationSpec
        );
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getEntityTagOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/wikis/default",
    httpMethod: "HEAD",
    responses: {
        200: {
            headersMapper: Mappers.ProductWikiGetEntityTagHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/wikis/default",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.WikiContract,
            headersMapper: Mappers.ProductWikiGetHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/wikis/default",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.WikiContract,
            headersMapper: Mappers.ProductWikiCreateOrUpdateHeaders
        },
        201: {
            bodyMapper: Mappers.WikiContract,
            headersMapper: Mappers.ProductWikiCreateOrUpdateHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters16,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch
    ],
    mediaType: "json",
    serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/wikis/default",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.WikiContract,
            headersMapper: Mappers.ProductWikiUpdateHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters17,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch1
    ],
    mediaType: "json",
    serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/wikis/default",
    httpMethod: "DELETE",
    responses: {
        200: {},
        204: {},
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.productId
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer
};
