/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LocationBasedRecommendedActionSessionsOperationStatus } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { MySQLManagementClient } from "../mySQLManagementClient.js";
import {
  LocationBasedRecommendedActionSessionsOperationStatusGetOptionalParams,
  LocationBasedRecommendedActionSessionsOperationStatusGetResponse
} from "../models/index.js";

/** Class containing LocationBasedRecommendedActionSessionsOperationStatus operations. */
export class LocationBasedRecommendedActionSessionsOperationStatusImpl
  implements LocationBasedRecommendedActionSessionsOperationStatus {
  private readonly client: MySQLManagementClient;

  /**
   * Initialize a new instance of the class LocationBasedRecommendedActionSessionsOperationStatus class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementClient) {
    this.client = client;
  }

  /**
   * Recommendation action session operation status.
   * @param locationName The name of the location.
   * @param operationId The operation identifier.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    operationId: string,
    options?: LocationBasedRecommendedActionSessionsOperationStatusGetOptionalParams
  ): Promise<LocationBasedRecommendedActionSessionsOperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, operationId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/recommendedActionSessionsAzureAsyncOperation/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecommendedActionSessionsOperationStatus
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
