/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Images } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureSphereManagementClient } from "../azureSphereManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Image,
  ImagesListByCatalogNextOptionalParams,
  ImagesListByCatalogOptionalParams,
  ImagesListByCatalogResponse,
  ImagesGetOptionalParams,
  ImagesGetResponse,
  ImagesCreateOrUpdateOptionalParams,
  ImagesCreateOrUpdateResponse,
  ImagesDeleteOptionalParams,
  ImagesListByCatalogNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Images operations. */
export class ImagesImpl implements Images {
  private readonly client: AzureSphereManagementClient;

  /**
   * Initialize a new instance of the class Images class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSphereManagementClient) {
    this.client = client;
  }

  /**
   * List Image resources by Catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param options The options parameters.
   */
  public listByCatalog(
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ): PagedAsyncIterableIterator<Image> {
    const iter = this.listByCatalogPagingAll(
      resourceGroupName,
      catalogName,
      options,
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
        return this.listByCatalogPagingPage(
          resourceGroupName,
          catalogName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByCatalogPagingPage(
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Image[]> {
    let result: ImagesListByCatalogResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCatalog(
        resourceGroupName,
        catalogName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCatalogNext(
        resourceGroupName,
        catalogName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCatalogPagingAll(
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ): AsyncIterableIterator<Image> {
    for await (const page of this.listByCatalogPagingPage(
      resourceGroupName,
      catalogName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Image resources by Catalog
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param options The options parameters.
   */
  private _listByCatalog(
    resourceGroupName: string,
    catalogName: string,
    options?: ImagesListByCatalogOptionalParams,
  ): Promise<ImagesListByCatalogResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, options },
      listByCatalogOperationSpec,
    );
  }

  /**
   * Get a Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param imageName Image name. Use an image GUID for GA versions of the API.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesGetOptionalParams,
  ): Promise<ImagesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, imageName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param imageName Image name. Use an image GUID for GA versions of the API.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    resource: Image,
    options?: ImagesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ImagesCreateOrUpdateResponse>,
      ImagesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ImagesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, catalogName, imageName, resource, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ImagesCreateOrUpdateResponse,
      OperationState<ImagesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param imageName Image name. Use an image GUID for GA versions of the API.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    resource: Image,
    options?: ImagesCreateOrUpdateOptionalParams,
  ): Promise<ImagesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      catalogName,
      imageName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param imageName Image name. Use an image GUID for GA versions of the API.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, catalogName, imageName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Image
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param imageName Image name. Use an image GUID for GA versions of the API.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    catalogName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      catalogName,
      imageName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByCatalogNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param catalogName Name of catalog
   * @param nextLink The nextLink from the previous successful call to the ListByCatalog method.
   * @param options The options parameters.
   */
  private _listByCatalogNext(
    resourceGroupName: string,
    catalogName: string,
    nextLink: string,
    options?: ImagesListByCatalogNextOptionalParams,
  ): Promise<ImagesListByCatalogNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, catalogName, nextLink, options },
      listByCatalogNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCatalogOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.maxpagesize,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Image,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Image,
    },
    201: {
      bodyMapper: Mappers.Image,
    },
    202: {
      bodyMapper: Mappers.Image,
    },
    204: {
      bodyMapper: Mappers.Image,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureSphere/catalogs/{catalogName}/images/{imageName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
    Parameters.imageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCatalogNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
