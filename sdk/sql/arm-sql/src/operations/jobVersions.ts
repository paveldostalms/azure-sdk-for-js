/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { JobVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SqlManagementClient } from "../sqlManagementClient.js";
import {
  JobVersion,
  JobVersionsListByJobNextOptionalParams,
  JobVersionsListByJobOptionalParams,
  JobVersionsListByJobResponse,
  JobVersionsGetOptionalParams,
  JobVersionsGetResponse,
  JobVersionsListByJobNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobVersions operations. */
export class JobVersionsImpl implements JobVersions {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobVersions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all versions of a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  public listByJob(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobVersionsListByJobOptionalParams,
  ): PagedAsyncIterableIterator<JobVersion> {
    const iter = this.listByJobPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
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
        return this.listByJobPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          jobName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByJobPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobVersionsListByJobOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JobVersion[]> {
    let result: JobVersionsListByJobResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByJob(
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByJobNext(
        resourceGroupName,
        serverName,
        jobAgentName,
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

  private async *listByJobPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobVersionsListByJobOptionalParams,
  ): AsyncIterableIterator<JobVersion> {
    for await (const page of this.listByJobPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      jobName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all versions of a job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param options The options parameters.
   */
  private _listByJob(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    options?: JobVersionsListByJobOptionalParams,
  ): Promise<JobVersionsListByJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, jobName, options },
      listByJobOperationSpec,
    );
  }

  /**
   * Gets a job version.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job.
   * @param jobVersion The version of the job to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobVersion: number,
    options?: JobVersionsGetOptionalParams,
  ): Promise<JobVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        jobVersion,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListByJobNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param nextLink The nextLink from the previous successful call to the ListByJob method.
   * @param options The options parameters.
   */
  private _listByJobNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    nextLink: string,
    options?: JobVersionsListByJobNextOptionalParams,
  ): Promise<JobVersionsListByJobNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        jobName,
        nextLink,
        options,
      },
      listByJobNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByJobOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobVersionListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/jobs/{jobName}/versions/{jobVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobVersion,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.jobName,
    Parameters.jobVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobVersionListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
    Parameters.jobName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
