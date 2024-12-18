/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient.js";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl.js";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByResourceOptionalParams,
  PrivateEndpointConnectionsListByResourceResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Get list of Private endpoint connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  public listByResource(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: PrivateEndpointConnectionsListByResourceOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listByResourcePagingAll(
      resourceGroupName,
      farmBeatsResourceName,
      options
    );
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
        return this.listByResourcePagingPage(
          resourceGroupName,
          farmBeatsResourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourcePagingPage(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: PrivateEndpointConnectionsListByResourceOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result: PrivateEndpointConnectionsListByResourceResponse;
    result = await this._listByResource(
      resourceGroupName,
      farmBeatsResourceName,
      options
    );
    yield result.value || [];
  }

  private async *listByResourcePagingAll(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: PrivateEndpointConnectionsListByResourceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByResourcePagingPage(
      resourceGroupName,
      farmBeatsResourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Approves or Rejects a Private endpoint connection request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param privateEndpointConnectionName Private endpoint connection name.
   * @param body Request object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    privateEndpointConnectionName: string,
    body: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        farmBeatsResourceName,
        privateEndpointConnectionName,
        body,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get Private endpoint connection object.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param privateEndpointConnectionName Private endpoint connection name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        farmBeatsResourceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Delete Private endpoint connection request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param privateEndpointConnectionName Private endpoint connection name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        farmBeatsResourceName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Private endpoint connection request.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param privateEndpointConnectionName Private endpoint connection name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      farmBeatsResourceName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get list of Private endpoint connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  private _listByResource(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: PrivateEndpointConnectionsListByResourceOptionalParams
  ): Promise<PrivateEndpointConnectionsListByResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, options },
      listByResourceOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    404: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.farmBeatsResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
