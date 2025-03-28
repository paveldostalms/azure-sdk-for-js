/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  EventSubscription,
  DomainTopicEventSubscriptionsListOptionalParams,
  DomainTopicEventSubscriptionsGetOptionalParams,
  DomainTopicEventSubscriptionsGetResponse,
  DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  DomainTopicEventSubscriptionsCreateOrUpdateResponse,
  DomainTopicEventSubscriptionsDeleteOptionalParams,
  EventSubscriptionUpdateParameters,
  DomainTopicEventSubscriptionsUpdateOptionalParams,
  DomainTopicEventSubscriptionsUpdateResponse,
  DomainTopicEventSubscriptionsGetFullUrlOptionalParams,
  DomainTopicEventSubscriptionsGetFullUrlResponse,
  DomainTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  DomainTopicEventSubscriptionsGetDeliveryAttributesResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DomainTopicEventSubscriptions. */
export interface DomainTopicEventSubscriptions {
  /**
   * List all event subscriptions that have been created for a specific domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    options?: DomainTopicEventSubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<EventSubscription>;
  /**
   * Get properties of a nested event subscription for a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be found.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetOptionalParams,
  ): Promise<DomainTopicEventSubscriptionsGetResponse>;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DomainTopicEventSubscriptionsCreateOrUpdateResponse>,
      DomainTopicEventSubscriptionsCreateOrUpdateResponse
    >
  >;
  /**
   * Asynchronously creates a new event subscription or updates an existing event subscription.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be created. Event subscription names
   *                              must be between 3 and 64 characters in length and use alphanumeric letters only.
   * @param eventSubscriptionInfo Event subscription properties containing the destination and filter
   *                              information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionInfo: EventSubscription,
    options?: DomainTopicEventSubscriptionsCreateOrUpdateOptionalParams,
  ): Promise<DomainTopicEventSubscriptionsCreateOrUpdateResponse>;
  /**
   * Delete a nested existing event subscription for a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a nested existing event subscription for a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Update an existing event subscription for a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainTopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DomainTopicEventSubscriptionsUpdateResponse>,
      DomainTopicEventSubscriptionsUpdateResponse
    >
  >;
  /**
   * Update an existing event subscription for a domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the domain.
   * @param topicName Name of the topic.
   * @param eventSubscriptionName Name of the event subscription to be updated.
   * @param eventSubscriptionUpdateParameters Updated event subscription information.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    eventSubscriptionUpdateParameters: EventSubscriptionUpdateParameters,
    options?: DomainTopicEventSubscriptionsUpdateOptionalParams,
  ): Promise<DomainTopicEventSubscriptionsUpdateResponse>;
  /**
   * Get the full endpoint URL for a nested event subscription for domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getFullUrl(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetFullUrlOptionalParams,
  ): Promise<DomainTopicEventSubscriptionsGetFullUrlResponse>;
  /**
   * Get all delivery attributes for an event subscription for domain topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param domainName Name of the top level domain.
   * @param topicName Name of the domain topic.
   * @param eventSubscriptionName Name of the event subscription.
   * @param options The options parameters.
   */
  getDeliveryAttributes(
    resourceGroupName: string,
    domainName: string,
    topicName: string,
    eventSubscriptionName: string,
    options?: DomainTopicEventSubscriptionsGetDeliveryAttributesOptionalParams,
  ): Promise<DomainTopicEventSubscriptionsGetDeliveryAttributesResponse>;
}
