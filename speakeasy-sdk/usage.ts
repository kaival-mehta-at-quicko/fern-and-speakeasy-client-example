import { Protean1 } from "./src/index.js";
import { ErrorSchema } from "./src/models/errors/error-schema.js";
import { ProteanError } from "./src/models/errors/protean-error.js";
import { ProteanDefaultError } from "./src/models/errors/protean-default-error.js";

const client = new Protean1({
  serverURL: "https://api.example.com",
  bearer: process.env["PROTEAN_BEARER"] ?? "",
});

async function main() {
  try {
    const response = await client.protean.verifyBankAccount({
      apikey: process.env["PROTEAN_API_KEY"] ?? "",
      body: {
        entityId: "78bea7b4-1caf-4528-96e4-ec7f9f43f0db",
        programId: "310",
        requestId: "unique-request-id",
        txnType: "ANY",
        custIfsc: "SBIN0061411",
        custAcctNo: "42090969996",
      },
    });

    console.log("Bank account verified:", response);
  } catch (error) {
    if (error instanceof ErrorSchema && error.statusCode === 401) {
      // Speakeasy does NOT generate a dedicated class per status code.
      // Instead, all known error codes (400, 401, 403, etc.) are parsed into
      // the same ErrorSchema class. You check statusCode to distinguish them.
      console.error("Unauthorized (401):", error.errorDescription);
      console.error("Error code:", error.errorCode);
      console.error("Status:", error.status);
    } else if (error instanceof ErrorSchema) {
      // Other matched error codes (400, 403, 415, 422, 429, 500, 502, etc.)
      console.error(`API error (${error.statusCode}):`, error.errorDescription);
    } else if (error instanceof ProteanDefaultError) {
      // Unmatched status codes fall through to this generic fallback.
      // It still includes statusCode, body, and headers.
      console.error("Unhandled HTTP error:", error.statusCode, error.body);
    } else if (error instanceof ProteanError) {
      // Base class catch-all for any other HTTP-level error.
      console.error("HTTP error:", error.statusCode, error.body);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

main();
