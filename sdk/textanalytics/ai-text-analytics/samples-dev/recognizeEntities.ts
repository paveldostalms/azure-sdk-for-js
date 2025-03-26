// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Uses the entity recognition endpoint to detect entities in a document using
 * Named Entity Recognition (NER) and prints them along with their recognized
 * entity type.
 *
 * @summary detects entites in a piece of text
 * @azsdk-weight 100
 */

import { TextAnalyticsClient } from "@azure/ai-text-analytics";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import "dotenv/config";

// You will need to set these environment variables or edit the following values
const endpoint = process.env["LANGUAGE_ENDPOINT"] || "<endpoint>";

const documents = [
  "Microsoft was founded by Bill Gates and Paul Allen.",
  "I had a wonderful trip to Seattle last week.",
  "I visited the Space Needle 2 times.",
];

export async function main(): Promise<void> {
  console.log("== Recognize Entities Sample ==");

  const client = new TextAnalyticsClient(endpoint, new DefaultAzureCredential());

  const results = await client.recognizeEntities(documents);

  for (const result of results) {
    console.log(`- Document ${result.id}`);
    if (!result.error) {
      console.log("\tRecognized Entities:");
      for (const entity of result.entities) {
        console.log(`\t- Entity ${entity.text} of type ${entity.category}`);
      }
    } else console.error("\tError:", result.error);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
