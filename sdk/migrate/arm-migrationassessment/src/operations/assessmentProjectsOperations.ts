/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { AssessmentProjectsOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMigrateAssessmentService } from "../azureMigrateAssessmentService.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  AssessmentProject,
  AssessmentProjectsOperationsListBySubscriptionNextOptionalParams,
  AssessmentProjectsOperationsListBySubscriptionOptionalParams,
  AssessmentProjectsOperationsListBySubscriptionResponse,
  AssessmentProjectsOperationsListByResourceGroupNextOptionalParams,
  AssessmentProjectsOperationsListByResourceGroupOptionalParams,
  AssessmentProjectsOperationsListByResourceGroupResponse,
  AssessmentProjectsOperationsGetOptionalParams,
  AssessmentProjectsOperationsGetResponse,
  AssessmentProjectsOperationsCreateOptionalParams,
  AssessmentProjectsOperationsCreateResponse,
  AssessmentProjectUpdate,
  AssessmentProjectsOperationsUpdateOptionalParams,
  AssessmentProjectsOperationsUpdateResponse,
  AssessmentProjectsOperationsDeleteOptionalParams,
  AssessmentProjectsOperationsListBySubscriptionNextResponse,
  AssessmentProjectsOperationsListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing AssessmentProjectsOperations operations. */
export class AssessmentProjectsOperationsImpl
  implements AssessmentProjectsOperations
{
  private readonly client: AzureMigrateAssessmentService;

  /**
   * Initialize a new instance of the class AssessmentProjectsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateAssessmentService) {
    this.client = client;
  }

  /**
   * List AssessmentProject resources by subscription ID
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AssessmentProjectsOperationsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AssessmentProject> {
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
    options?: AssessmentProjectsOperationsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AssessmentProject[]> {
    let result: AssessmentProjectsOperationsListBySubscriptionResponse;
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
    options?: AssessmentProjectsOperationsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AssessmentProject> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List AssessmentProject resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AssessmentProjectsOperationsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AssessmentProject> {
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
    options?: AssessmentProjectsOperationsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AssessmentProject[]> {
    let result: AssessmentProjectsOperationsListByResourceGroupResponse;
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
    options?: AssessmentProjectsOperationsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AssessmentProject> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List AssessmentProject resources by subscription ID
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AssessmentProjectsOperationsListBySubscriptionOptionalParams,
  ): Promise<AssessmentProjectsOperationsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * List AssessmentProject resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AssessmentProjectsOperationsListByResourceGroupOptionalParams,
  ): Promise<AssessmentProjectsOperationsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Get a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentProjectsOperationsGetOptionalParams,
  ): Promise<AssessmentProjectsOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    projectName: string,
    resource: AssessmentProject,
    options?: AssessmentProjectsOperationsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AssessmentProjectsOperationsCreateResponse>,
      AssessmentProjectsOperationsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AssessmentProjectsOperationsCreateResponse> => {
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
      args: { resourceGroupName, projectName, resource, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      AssessmentProjectsOperationsCreateResponse,
      OperationState<AssessmentProjectsOperationsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    projectName: string,
    resource: AssessmentProject,
    options?: AssessmentProjectsOperationsCreateOptionalParams,
  ): Promise<AssessmentProjectsOperationsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      projectName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    projectName: string,
    properties: AssessmentProjectUpdate,
    options?: AssessmentProjectsOperationsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AssessmentProjectsOperationsUpdateResponse>,
      AssessmentProjectsOperationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AssessmentProjectsOperationsUpdateResponse> => {
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
      args: { resourceGroupName, projectName, properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      AssessmentProjectsOperationsUpdateResponse,
      OperationState<AssessmentProjectsOperationsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    projectName: string,
    properties: AssessmentProjectUpdate,
    options?: AssessmentProjectsOperationsUpdateOptionalParams,
  ): Promise<AssessmentProjectsOperationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      projectName,
      properties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentProjectsOperationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AssessmentProjectsOperationsListBySubscriptionNextOptionalParams,
  ): Promise<AssessmentProjectsOperationsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AssessmentProjectsOperationsListByResourceGroupNextOptionalParams,
  ): Promise<AssessmentProjectsOperationsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Migrate/assessmentProjects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProjectListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProjectListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProject,
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
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProject,
    },
    201: {
      bodyMapper: Mappers.AssessmentProject,
    },
    202: {
      bodyMapper: Mappers.AssessmentProject,
    },
    204: {
      bodyMapper: Mappers.AssessmentProject,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProject,
    },
    201: {
      bodyMapper: Mappers.AssessmentProject,
    },
    202: {
      bodyMapper: Mappers.AssessmentProject,
    },
    204: {
      bodyMapper: Mappers.AssessmentProject,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProjectListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentProjectListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
