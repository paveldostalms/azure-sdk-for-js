/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ObjectReplicationPoliciesOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StorageManagementClient } from "../storageManagementClient.js";
import {
  ObjectReplicationPolicy,
  ObjectReplicationPoliciesListOptionalParams,
  ObjectReplicationPoliciesListResponse,
  ObjectReplicationPoliciesGetOptionalParams,
  ObjectReplicationPoliciesGetResponse,
  ObjectReplicationPoliciesCreateOrUpdateOptionalParams,
  ObjectReplicationPoliciesCreateOrUpdateResponse,
  ObjectReplicationPoliciesDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ObjectReplicationPoliciesOperations operations. */
export class ObjectReplicationPoliciesOperationsImpl
  implements ObjectReplicationPoliciesOperations
{
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class ObjectReplicationPoliciesOperations class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * List the object replication policies associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectReplicationPoliciesListOptionalParams,
  ): PagedAsyncIterableIterator<ObjectReplicationPolicy> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectReplicationPoliciesListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ObjectReplicationPolicy[]> {
    let result: ObjectReplicationPoliciesListResponse;
    result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectReplicationPoliciesListOptionalParams,
  ): AsyncIterableIterator<ObjectReplicationPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List the object replication policies associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: ObjectReplicationPoliciesListOptionalParams,
  ): Promise<ObjectReplicationPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the object replication policy of the storage account by policy ID.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
   *                                  the policy on the destination account first. For the source account, provide the value of the policy
   *                                  ID that is returned when you download the policy that was defined on the destination account. The
   *                                  policy is downloaded as a JSON file.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    options?: ObjectReplicationPoliciesGetOptionalParams,
  ): Promise<ObjectReplicationPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, objectReplicationPolicyId, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update the object replication policy of the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
   *                                  the policy on the destination account first. For the source account, provide the value of the policy
   *                                  ID that is returned when you download the policy that was defined on the destination account. The
   *                                  policy is downloaded as a JSON file.
   * @param properties The object replication policy set to a storage account. A unique policy ID will be
   *                   created if absent.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    properties: ObjectReplicationPolicy,
    options?: ObjectReplicationPoliciesCreateOrUpdateOptionalParams,
  ): Promise<ObjectReplicationPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        objectReplicationPolicyId,
        properties,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the object replication policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param objectReplicationPolicyId For the destination account, provide the value 'default'. Configure
   *                                  the policy on the destination account first. For the source account, provide the value of the policy
   *                                  ID that is returned when you download the policy that was defined on the destination account. The
   *                                  policy is downloaded as a JSON file.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    objectReplicationPolicyId: string,
    options?: ObjectReplicationPoliciesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, objectReplicationPolicyId, options },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ObjectReplicationPolicies,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ObjectReplicationPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.objectReplicationPolicyId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ObjectReplicationPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.objectReplicationPolicyId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/objectReplicationPolicies/{objectReplicationPolicyId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.objectReplicationPolicyId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
