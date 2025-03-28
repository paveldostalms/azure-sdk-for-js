/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ManagedHsms } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { KeyVaultManagementClient } from "../keyVaultManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ManagedHsm,
  ManagedHsmsListByResourceGroupNextOptionalParams,
  ManagedHsmsListByResourceGroupOptionalParams,
  ManagedHsmsListByResourceGroupResponse,
  ManagedHsmsListBySubscriptionNextOptionalParams,
  ManagedHsmsListBySubscriptionOptionalParams,
  ManagedHsmsListBySubscriptionResponse,
  DeletedManagedHsm,
  ManagedHsmsListDeletedNextOptionalParams,
  ManagedHsmsListDeletedOptionalParams,
  ManagedHsmsListDeletedResponse,
  ManagedHsmsCreateOrUpdateOptionalParams,
  ManagedHsmsCreateOrUpdateResponse,
  ManagedHsmsUpdateOptionalParams,
  ManagedHsmsUpdateResponse,
  ManagedHsmsDeleteOptionalParams,
  ManagedHsmsGetOptionalParams,
  ManagedHsmsGetResponse,
  ManagedHsmsGetDeletedOptionalParams,
  ManagedHsmsGetDeletedResponse,
  ManagedHsmsPurgeDeletedOptionalParams,
  ManagedHsmsPurgeDeletedResponse,
  CheckMhsmNameAvailabilityParameters,
  ManagedHsmsCheckMhsmNameAvailabilityOptionalParams,
  ManagedHsmsCheckMhsmNameAvailabilityResponse,
  ManagedHsmsListByResourceGroupNextResponse,
  ManagedHsmsListBySubscriptionNextResponse,
  ManagedHsmsListDeletedNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedHsms operations. */
export class ManagedHsmsImpl implements ManagedHsms {
  private readonly client: KeyVaultManagementClient;

  /**
   * Initialize a new instance of the class ManagedHsms class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClient) {
    this.client = client;
  }

  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedHsmsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ManagedHsm> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ManagedHsmsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ManagedHsm[]> {
    let result: ManagedHsmsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ManagedHsmsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ManagedHsm> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ManagedHsmsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ManagedHsm> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ManagedHsmsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ManagedHsm[]> {
    let result: ManagedHsmsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ManagedHsmsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<ManagedHsm> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The List operation gets information about the deleted managed HSMs associated with the subscription.
   * @param options The options parameters.
   */
  public listDeleted(
    options?: ManagedHsmsListDeletedOptionalParams,
  ): PagedAsyncIterableIterator<DeletedManagedHsm> {
    const iter = this.listDeletedPagingAll(options);
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
        return this.listDeletedPagingPage(options, settings);
      },
    };
  }

  private async *listDeletedPagingPage(
    options?: ManagedHsmsListDeletedOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DeletedManagedHsm[]> {
    let result: ManagedHsmsListDeletedResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listDeleted(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listDeletedNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listDeletedPagingAll(
    options?: ManagedHsmsListDeletedOptionalParams,
  ): AsyncIterableIterator<DeletedManagedHsm> {
    for await (const page of this.listDeletedPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to create or update the managed HSM Pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedHsmsCreateOrUpdateResponse>,
      ManagedHsmsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ManagedHsmsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, name, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ManagedHsmsCreateOrUpdateResponse,
      OperationState<ManagedHsmsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to create or update the managed HSM Pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsCreateOrUpdateOptionalParams,
  ): Promise<ManagedHsmsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      name,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to patch the managed HSM Pool
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedHsmsUpdateResponse>,
      ManagedHsmsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ManagedHsmsUpdateResponse> => {
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
      args: { resourceGroupName, name, parameters, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ManagedHsmsUpdateResponse,
      OperationState<ManagedHsmsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a managed HSM Pool in the specified subscription.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name Name of the managed HSM Pool
   * @param parameters Parameters to patch the managed HSM Pool
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    name: string,
    parameters: ManagedHsm,
    options?: ManagedHsmsUpdateOptionalParams,
  ): Promise<ManagedHsmsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      name,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool to delete
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsDeleteOptionalParams,
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
      args: { resourceGroupName, name, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool to delete
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, name, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified managed HSM Pool.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param name The name of the managed HSM Pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: ManagedHsmsGetOptionalParams,
  ): Promise<ManagedHsmsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, name, options },
      getOperationSpec,
    );
  }

  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription and
   * within the specified resource group.
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedHsmsListByResourceGroupOptionalParams,
  ): Promise<ManagedHsmsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * The List operation gets information about the managed HSM Pools associated with the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ManagedHsmsListBySubscriptionOptionalParams,
  ): Promise<ManagedHsmsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * The List operation gets information about the deleted managed HSMs associated with the subscription.
   * @param options The options parameters.
   */
  private _listDeleted(
    options?: ManagedHsmsListDeletedOptionalParams,
  ): Promise<ManagedHsmsListDeletedResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeletedOperationSpec,
    );
  }

  /**
   * Gets the specified deleted managed HSM.
   * @param name The name of the deleted managed HSM.
   * @param location The location of the deleted managed HSM.
   * @param options The options parameters.
   */
  getDeleted(
    name: string,
    location: string,
    options?: ManagedHsmsGetDeletedOptionalParams,
  ): Promise<ManagedHsmsGetDeletedResponse> {
    return this.client.sendOperationRequest(
      { name, location, options },
      getDeletedOperationSpec,
    );
  }

  /**
   * Permanently deletes the specified managed HSM.
   * @param name The name of the soft-deleted managed HSM.
   * @param location The location of the soft-deleted managed HSM.
   * @param options The options parameters.
   */
  async beginPurgeDeleted(
    name: string,
    location: string,
    options?: ManagedHsmsPurgeDeletedOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedHsmsPurgeDeletedResponse>,
      ManagedHsmsPurgeDeletedResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ManagedHsmsPurgeDeletedResponse> => {
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
      args: { name, location, options },
      spec: purgeDeletedOperationSpec,
    });
    const poller = await createHttpPoller<
      ManagedHsmsPurgeDeletedResponse,
      OperationState<ManagedHsmsPurgeDeletedResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Permanently deletes the specified managed HSM.
   * @param name The name of the soft-deleted managed HSM.
   * @param location The location of the soft-deleted managed HSM.
   * @param options The options parameters.
   */
  async beginPurgeDeletedAndWait(
    name: string,
    location: string,
    options?: ManagedHsmsPurgeDeletedOptionalParams,
  ): Promise<ManagedHsmsPurgeDeletedResponse> {
    const poller = await this.beginPurgeDeleted(name, location, options);
    return poller.pollUntilDone();
  }

  /**
   * Checks that the managed hsm name is valid and is not already in use.
   * @param mhsmName The name of the managed hsm.
   * @param options The options parameters.
   */
  checkMhsmNameAvailability(
    mhsmName: CheckMhsmNameAvailabilityParameters,
    options?: ManagedHsmsCheckMhsmNameAvailabilityOptionalParams,
  ): Promise<ManagedHsmsCheckMhsmNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { mhsmName, options },
      checkMhsmNameAvailabilityOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName Name of the resource group that contains the managed HSM pool.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ManagedHsmsListByResourceGroupNextOptionalParams,
  ): Promise<ManagedHsmsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ManagedHsmsListBySubscriptionNextOptionalParams,
  ): Promise<ManagedHsmsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListDeletedNext
   * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
   * @param options The options parameters.
   */
  private _listDeletedNext(
    nextLink: string,
    options?: ManagedHsmsListDeletedNextOptionalParams,
  ): Promise<ManagedHsmsListDeletedNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeletedNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsm,
    },
    201: {
      bodyMapper: Mappers.ManagedHsm,
    },
    202: {
      bodyMapper: Mappers.ManagedHsm,
    },
    204: {
      bodyMapper: Mappers.ManagedHsm,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name1,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsm,
    },
    201: {
      bodyMapper: Mappers.ManagedHsm,
    },
    202: {
      bodyMapper: Mappers.ManagedHsm,
    },
    204: {
      bodyMapper: Mappers.ManagedHsm,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name1,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsm,
    },
    204: {},
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/managedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listDeletedOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedManagedHSMs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDeletedOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedManagedHSMs/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedManagedHsm,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const purgeDeletedOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedManagedHSMs/{name}/purge",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.ManagedHsmsPurgeDeletedHeaders,
    },
    201: {
      headersMapper: Mappers.ManagedHsmsPurgeDeletedHeaders,
    },
    202: {
      headersMapper: Mappers.ManagedHsmsPurgeDeletedHeaders,
    },
    204: {
      headersMapper: Mappers.ManagedHsmsPurgeDeletedHeaders,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const checkMhsmNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkMhsmNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckMhsmNameAvailabilityResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.mhsmName,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listDeletedNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedManagedHsmListResult,
    },
    default: {
      bodyMapper: Mappers.ManagedHsmError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
