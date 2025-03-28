/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Outputs } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { StreamAnalyticsManagementClient } from "../streamAnalyticsManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Output,
  OutputsListByStreamingJobNextOptionalParams,
  OutputsListByStreamingJobOptionalParams,
  OutputsListByStreamingJobResponse,
  OutputsCreateOrReplaceOptionalParams,
  OutputsCreateOrReplaceResponse,
  OutputsUpdateOptionalParams,
  OutputsUpdateResponse,
  OutputsDeleteOptionalParams,
  OutputsGetOptionalParams,
  OutputsGetResponse,
  OutputsTestOptionalParams,
  OutputsTestResponse,
  OutputsListByStreamingJobNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Outputs operations. */
export class OutputsImpl implements Outputs {
  private readonly client: StreamAnalyticsManagementClient;

  /**
   * Initialize a new instance of the class Outputs class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the outputs under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  public listByStreamingJob(
    resourceGroupName: string,
    jobName: string,
    options?: OutputsListByStreamingJobOptionalParams,
  ): PagedAsyncIterableIterator<Output> {
    const iter = this.listByStreamingJobPagingAll(
      resourceGroupName,
      jobName,
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
        return this.listByStreamingJobPagingPage(
          resourceGroupName,
          jobName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByStreamingJobPagingPage(
    resourceGroupName: string,
    jobName: string,
    options?: OutputsListByStreamingJobOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Output[]> {
    let result: OutputsListByStreamingJobResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByStreamingJob(
        resourceGroupName,
        jobName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByStreamingJobNext(
        resourceGroupName,
        jobName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByStreamingJobPagingAll(
    resourceGroupName: string,
    jobName: string,
    options?: OutputsListByStreamingJobOptionalParams,
  ): AsyncIterableIterator<Output> {
    for await (const page of this.listByStreamingJobPagingPage(
      resourceGroupName,
      jobName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates an output or replaces an already existing output under an existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param output The definition of the output that will be used to create a new output or replace the
   *               existing one under the streaming job.
   * @param options The options parameters.
   */
  createOrReplace(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    output: Output,
    options?: OutputsCreateOrReplaceOptionalParams,
  ): Promise<OutputsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, outputName, output, options },
      createOrReplaceOperationSpec,
    );
  }

  /**
   * Updates an existing output under an existing streaming job. This can be used to partially update
   * (ie. update one or two properties) an output without affecting the rest the job or output
   * definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param output An Output object. The properties specified here will overwrite the corresponding
   *               properties in the existing output (ie. Those properties will be updated). Any properties that are
   *               set to null here will mean that the corresponding property in the existing output will remain the
   *               same and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    output: Output,
    options?: OutputsUpdateOptionalParams,
  ): Promise<OutputsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, outputName, output, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes an output from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    options?: OutputsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, outputName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets details about the specified output.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    options?: OutputsGetOptionalParams,
  ): Promise<OutputsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, outputName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists all of the outputs under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  private _listByStreamingJob(
    resourceGroupName: string,
    jobName: string,
    options?: OutputsListByStreamingJobOptionalParams,
  ): Promise<OutputsListByStreamingJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      listByStreamingJobOperationSpec,
    );
  }

  /**
   * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The options parameters.
   */
  async beginTest(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    options?: OutputsTestOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<OutputsTestResponse>, OutputsTestResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<OutputsTestResponse> => {
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
      args: { resourceGroupName, jobName, outputName, options },
      spec: testOperationSpec,
    });
    const poller = await createHttpPoller<
      OutputsTestResponse,
      OperationState<OutputsTestResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param outputName The name of the output.
   * @param options The options parameters.
   */
  async beginTestAndWait(
    resourceGroupName: string,
    jobName: string,
    outputName: string,
    options?: OutputsTestOptionalParams,
  ): Promise<OutputsTestResponse> {
    const poller = await this.beginTest(
      resourceGroupName,
      jobName,
      outputName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByStreamingJobNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param nextLink The nextLink from the previous successful call to the ListByStreamingJob method.
   * @param options The options parameters.
   */
  private _listByStreamingJobNext(
    resourceGroupName: string,
    jobName: string,
    nextLink: string,
    options?: OutputsListByStreamingJobNextOptionalParams,
  ): Promise<OutputsListByStreamingJobNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, nextLink, options },
      listByStreamingJobNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrReplaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsCreateOrReplaceHeaders,
    },
    201: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsCreateOrReplaceHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.output,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.output,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Output,
      headersMapper: Mappers.OutputsGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByStreamingJobOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutputListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const testOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}/test",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceTestStatus,
    },
    201: {
      bodyMapper: Mappers.ResourceTestStatus,
    },
    202: {
      bodyMapper: Mappers.ResourceTestStatus,
    },
    204: {
      bodyMapper: Mappers.ResourceTestStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.output1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.outputName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const listByStreamingJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OutputListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
