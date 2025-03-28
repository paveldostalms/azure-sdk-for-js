/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { PolicyDefinitionVersions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PolicyClient } from "../policyClient.js";
import {
  PolicyDefinitionVersion,
  PolicyDefinitionVersionsListNextOptionalParams,
  PolicyDefinitionVersionsListOptionalParams,
  PolicyDefinitionVersionsListResponse,
  PolicyDefinitionVersionsListBuiltInNextOptionalParams,
  PolicyDefinitionVersionsListBuiltInOptionalParams,
  PolicyDefinitionVersionsListBuiltInResponse,
  PolicyDefinitionVersionsListByManagementGroupNextOptionalParams,
  PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  PolicyDefinitionVersionsListByManagementGroupResponse,
  PolicyDefinitionVersionsListAllBuiltinsOptionalParams,
  PolicyDefinitionVersionsListAllBuiltinsResponse,
  PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsListAllAtManagementGroupResponse,
  PolicyDefinitionVersionsListAllOptionalParams,
  PolicyDefinitionVersionsListAllResponse,
  PolicyDefinitionVersionsCreateOrUpdateOptionalParams,
  PolicyDefinitionVersionsCreateOrUpdateResponse,
  PolicyDefinitionVersionsDeleteOptionalParams,
  PolicyDefinitionVersionsGetOptionalParams,
  PolicyDefinitionVersionsGetResponse,
  PolicyDefinitionVersionsGetBuiltInOptionalParams,
  PolicyDefinitionVersionsGetBuiltInResponse,
  PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse,
  PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsGetAtManagementGroupOptionalParams,
  PolicyDefinitionVersionsGetAtManagementGroupResponse,
  PolicyDefinitionVersionsListNextResponse,
  PolicyDefinitionVersionsListBuiltInNextResponse,
  PolicyDefinitionVersionsListByManagementGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicyDefinitionVersions operations. */
export class PolicyDefinitionVersionsImpl implements PolicyDefinitionVersions {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class PolicyDefinitionVersions class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  public list(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listPagingAll(policyDefinitionName, options);
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
        return this.listPagingPage(policyDefinitionName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(policyDefinitionName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        policyDefinitionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listPagingPage(
      policyDefinitionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the built-in policy definition versions for the given policy
   * definition.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  public listBuiltIn(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listBuiltInPagingAll(policyDefinitionName, options);
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
        return this.listBuiltInPagingPage(
          policyDefinitionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listBuiltInPagingPage(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListBuiltInResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBuiltIn(policyDefinitionName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBuiltInNext(
        policyDefinitionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBuiltInPagingAll(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listBuiltInPagingPage(
      policyDefinitionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition in the given management group.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  public listByManagementGroup(
    managementGroupName: string,
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinitionVersion> {
    const iter = this.listByManagementGroupPagingAll(
      managementGroupName,
      policyDefinitionName,
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
        return this.listByManagementGroupPagingPage(
          managementGroupName,
          policyDefinitionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByManagementGroupPagingPage(
    managementGroupName: string,
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyDefinitionVersion[]> {
    let result: PolicyDefinitionVersionsListByManagementGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagementGroup(
        managementGroupName,
        policyDefinitionName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagementGroupNext(
        managementGroupName,
        policyDefinitionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagementGroupPagingAll(
    managementGroupName: string,
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): AsyncIterableIterator<PolicyDefinitionVersion> {
    for await (const page of this.listByManagementGroupPagingPage(
      managementGroupName,
      policyDefinitionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * This operation lists all the built-in policy definition versions for all built-in policy
   * definitions.
   * @param options The options parameters.
   */
  listAllBuiltins(
    options?: PolicyDefinitionVersionsListAllBuiltinsOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllBuiltinsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAllBuiltinsOperationSpec,
    );
  }

  /**
   * This operation lists all the policy definition versions for all policy definitions at the management
   * group scope.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param options The options parameters.
   */
  listAllAtManagementGroup(
    managementGroupName: string,
    options?: PolicyDefinitionVersionsListAllAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, options },
      listAllAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation lists all the policy definition versions for all policy definitions within a
   * subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: PolicyDefinitionVersionsListAllOptionalParams,
  ): Promise<PolicyDefinitionVersionsListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * This operation creates or updates a policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    parameters: PolicyDefinitionVersion,
    options?: PolicyDefinitionVersionsCreateOrUpdateOptionalParams,
  ): Promise<PolicyDefinitionVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, policyDefinitionVersion, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * This operation deletes the policy definition version in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param options The options parameters.
   */
  delete(
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    options?: PolicyDefinitionVersionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, policyDefinitionVersion, options },
      deleteOperationSpec,
    );
  }

  /**
   * This operation retrieves the policy definition version in the given subscription with the given
   * name.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param options The options parameters.
   */
  get(
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    options?: PolicyDefinitionVersionsGetOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, policyDefinitionVersion, options },
      getOperationSpec,
    );
  }

  /**
   * This operation retrieves the built-in policy definition version with the given name.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param options The options parameters.
   */
  getBuiltIn(
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    options?: PolicyDefinitionVersionsGetBuiltInOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetBuiltInResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, policyDefinitionVersion, options },
      getBuiltInOperationSpec,
    );
  }

  /**
   * This operation creates or updates a policy definition version in the given management group with the
   * given name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    managementGroupName: string,
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    parameters: PolicyDefinitionVersion,
    options?: PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupName,
        policyDefinitionName,
        policyDefinitionVersion,
        parameters,
        options,
      },
      createOrUpdateAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation deletes the policy definition in the given management group with the given name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    managementGroupName: string,
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    options?: PolicyDefinitionVersionsDeleteAtManagementGroupOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        managementGroupName,
        policyDefinitionName,
        policyDefinitionVersion,
        options,
      },
      deleteAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation retrieves the policy definition version in the given management group with the given
   * name.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param policyDefinitionVersion The policy definition version.  The format is x.y.z where x is the
   *                                major version number, y is the minor version number, and z is the patch number
   * @param options The options parameters.
   */
  getAtManagementGroup(
    managementGroupName: string,
    policyDefinitionName: string,
    policyDefinitionVersion: string,
    options?: PolicyDefinitionVersionsGetAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupName,
        policyDefinitionName,
        policyDefinitionVersion,
        options,
      },
      getAtManagementGroupOperationSpec,
    );
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  private _list(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListOptionalParams,
  ): Promise<PolicyDefinitionVersionsListResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, options },
      listOperationSpec,
    );
  }

  /**
   * This operation retrieves a list of all the built-in policy definition versions for the given policy
   * definition.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  private _listBuiltIn(
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListBuiltInOptionalParams,
  ): Promise<PolicyDefinitionVersionsListBuiltInResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, options },
      listBuiltInOperationSpec,
    );
  }

  /**
   * This operation retrieves a list of all the policy definition versions for the given policy
   * definition in the given management group.
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param options The options parameters.
   */
  private _listByManagementGroup(
    managementGroupName: string,
    policyDefinitionName: string,
    options?: PolicyDefinitionVersionsListByManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionVersionsListByManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, policyDefinitionName, options },
      listByManagementGroupOperationSpec,
    );
  }

  /**
   * ListNext
   * @param policyDefinitionName The name of the policy definition.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    policyDefinitionName: string,
    nextLink: string,
    options?: PolicyDefinitionVersionsListNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListBuiltInNext
   * @param policyDefinitionName The name of the policy definition.
   * @param nextLink The nextLink from the previous successful call to the ListBuiltIn method.
   * @param options The options parameters.
   */
  private _listBuiltInNext(
    policyDefinitionName: string,
    nextLink: string,
    options?: PolicyDefinitionVersionsListBuiltInNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListBuiltInNextResponse> {
    return this.client.sendOperationRequest(
      { policyDefinitionName, nextLink, options },
      listBuiltInNextOperationSpec,
    );
  }

  /**
   * ListByManagementGroupNext
   * @param managementGroupName The name of the management group. The name is case insensitive.
   * @param policyDefinitionName The name of the policy definition.
   * @param nextLink The nextLink from the previous successful call to the ListByManagementGroup method.
   * @param options The options parameters.
   */
  private _listByManagementGroupNext(
    managementGroupName: string,
    policyDefinitionName: string,
    nextLink: string,
    options?: PolicyDefinitionVersionsListByManagementGroupNextOptionalParams,
  ): Promise<PolicyDefinitionVersionsListByManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupName, policyDefinitionName, nextLink, options },
      listByManagementGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAllBuiltinsOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.managementGroupName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/listPolicyDefinitionVersions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    201: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getBuiltInOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    201: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName,
    Parameters.managementGroupName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName,
    Parameters.managementGroupName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions/{policyDefinitionVersion}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersion,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName,
    Parameters.managementGroupName,
    Parameters.policyDefinitionVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBuiltInOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.policyDefinitionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByManagementGroupOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/managementGroups/{managementGroupName}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.policyDefinitionName,
    Parameters.managementGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.policyDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBuiltInNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.policyDefinitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyDefinitionVersionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.policyDefinitionName,
    Parameters.managementGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
