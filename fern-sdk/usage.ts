import { SandboxApiClient, SandboxApi, SandboxApiError } from "./sdks/typescript/index.js";

const client = new SandboxApiClient({
  environment: "https://api.example.com",
  apikey: process.env["PROTEAN_API_KEY"] ?? "",
  token: process.env["PROTEAN_BEARER"] ?? "",
});

async function main() {
  try {
    const response = await client.protean.verifyBankAccount({
      entityId: "78bea7b4-1caf-4528-96e4-ec7f9f43f0db",
      programId: "310",
      requestId: "unique-request-id",
      txnType: "ANY",
      custIfsc: "SBIN0061411",
      custAcctNo: "42090969996",
    });

    console.log("Bank account verified:", response);
  } catch (error) {
    if (error instanceof SandboxApi.UnauthorizedError) {
      // Fern generates a dedicated UnauthorizedError class for 401 responses.
      // The body is typed as SandboxApi.ErrorSchema with structured fields.
      console.error("Unauthorized (401):", error.message);
      console.error("Response body:", error.body);
    } else if (error instanceof SandboxApiError) {
      // All other HTTP errors (400, 403, 429, 500, etc.) are instances of
      // SandboxApiError or their specific subclass (BadRequestError, ForbiddenError, etc.).
      console.error(`API error (${error.statusCode}):`, error.message);
      console.error("Response body:", error.body);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

main();
