/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { VmwareCollectorsOperations } from "../operationsInterfaces/index.js";
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
  VmwareCollector,
  VmwareCollectorsOperationsListByAssessmentProjectNextOptionalParams,
  VmwareCollectorsOperationsListByAssessmentProjectOptionalParams,
  VmwareCollectorsOperationsListByAssessmentProjectResponse,
  VmwareCollectorsOperationsGetOptionalParams,
  VmwareCollectorsOperationsGetResponse,
  VmwareCollectorsOperationsCreateOptionalParams,
  VmwareCollectorsOperationsCreateResponse,
  VmwareCollectorsOperationsDeleteOptionalParams,
  VmwareCollectorsOperationsListByAssessmentProjectNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing VmwareCollectorsOperations operations. */
export class VmwareCollectorsOperationsImpl
  implements VmwareCollectorsOperations
{
  private readonly client: AzureMigrateAssessmentService;

  /**
   * Initialize a new instance of the class VmwareCollectorsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateAssessmentService) {
    this.client = client;
  }

  /**
   * List VmwareCollector resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  public listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: VmwareCollectorsOperationsListByAssessmentProjectOptionalParams,
  ): PagedAsyncIterableIterator<VmwareCollector> {
    const iter = this.listByAssessmentProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByAssessmentProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAssessmentProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: VmwareCollectorsOperationsListByAssessmentProjectOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VmwareCollector[]> {
    let result: VmwareCollectorsOperationsListByAssessmentProjectResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAssessmentProject(
        resourceGroupName,
        projectName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAssessmentProjectNext(
        resourceGroupName,
        projectName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAssessmentProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: VmwareCollectorsOperationsListByAssessmentProjectOptionalParams,
  ): AsyncIterableIterator<VmwareCollector> {
    for await (const page of this.listByAssessmentProjectPagingPage(
      resourceGroupName,
      projectName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List VmwareCollector resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  private _listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: VmwareCollectorsOperationsListByAssessmentProjectOptionalParams,
  ): Promise<VmwareCollectorsOperationsListByAssessmentProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByAssessmentProjectOperationSpec,
    );
  }

  /**
   * Get a VmwareCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param vmWareCollectorName VMware collector ARM name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    options?: VmwareCollectorsOperationsGetOptionalParams,
  ): Promise<VmwareCollectorsOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, vmWareCollectorName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a VmwareCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param vmWareCollectorName VMware collector ARM name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    resource: VmwareCollector,
    options?: VmwareCollectorsOperationsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VmwareCollectorsOperationsCreateResponse>,
      VmwareCollectorsOperationsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VmwareCollectorsOperationsCreateResponse> => {
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
      args: {
        resourceGroupName,
        projectName,
        vmWareCollectorName,
        resource,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      VmwareCollectorsOperationsCreateResponse,
      OperationState<VmwareCollectorsOperationsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a VmwareCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param vmWareCollectorName VMware collector ARM name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    resource: VmwareCollector,
    options?: VmwareCollectorsOperationsCreateOptionalParams,
  ): Promise<VmwareCollectorsOperationsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      projectName,
      vmWareCollectorName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a VmwareCollector
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param vmWareCollectorName VMware collector ARM name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    vmWareCollectorName: string,
    options?: VmwareCollectorsOperationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, vmWareCollectorName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByAssessmentProjectNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param nextLink The nextLink from the previous successful call to the ListByAssessmentProject
   *                 method.
   * @param options The options parameters.
   */
  private _listByAssessmentProjectNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: VmwareCollectorsOperationsListByAssessmentProjectNextOptionalParams,
  ): Promise<VmwareCollectorsOperationsListByAssessmentProjectNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listByAssessmentProjectNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAssessmentProjectOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VmwareCollectorListResult,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VmwareCollector,
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
    Parameters.vmWareCollectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VmwareCollector,
    },
    201: {
      bodyMapper: Mappers.VmwareCollector,
    },
    202: {
      bodyMapper: Mappers.VmwareCollector,
    },
    204: {
      bodyMapper: Mappers.VmwareCollector,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.vmWareCollectorName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/vmwarecollectors/{vmWareCollectorName}",
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
    Parameters.vmWareCollectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByAssessmentProjectNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VmwareCollectorListResult,
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
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
