/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { TableServices } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageManagementClient } from "../storageManagementClient.js";
import {
  TableServicesListOptionalParams,
  TableServicesListResponse,
  TableServiceProperties,
  TableServicesSetServicePropertiesOptionalParams,
  TableServicesSetServicePropertiesResponse,
  TableServicesGetServicePropertiesOptionalParams,
  TableServicesGetServicePropertiesResponse,
} from "../models/index.js";

/** Class containing TableServices operations. */
export class TableServicesImpl implements TableServices {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class TableServices class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * List all table services for the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: TableServicesListOptionalParams,
  ): Promise<TableServicesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * Sets the properties of a storage account’s Table service, including properties for Storage Analytics
   * and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The properties of a storage account’s Table service, only properties for Storage
   *                   Analytics and CORS (Cross-Origin Resource Sharing) rules can be specified.
   * @param options The options parameters.
   */
  setServiceProperties(
    resourceGroupName: string,
    accountName: string,
    parameters: TableServiceProperties,
    options?: TableServicesSetServicePropertiesOptionalParams,
  ): Promise<TableServicesSetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, parameters, options },
      setServicePropertiesOperationSpec,
    );
  }

  /**
   * Gets the properties of a storage account’s Table service, including properties for Storage Analytics
   * and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  getServiceProperties(
    resourceGroupName: string,
    accountName: string,
    options?: TableServicesGetServicePropertiesOptionalParams,
  ): Promise<TableServicesGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getServicePropertiesOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListTableServices,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const setServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/{tableServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceProperties,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.tableServiceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/{tableServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceProperties,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.tableServiceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
