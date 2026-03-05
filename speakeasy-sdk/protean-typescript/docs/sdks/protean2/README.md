# Protean

## Overview

### Available Operations

* [verifyBankAccount](#verifybankaccount) - Bank Account Verification 

## verifyBankAccount

Verifies Bank Account through Penny Drop, PennyLess and Hybrid.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="verifyBankAccount" method="post" path="/api/v1/bank-account-validation/bank-validateacct" -->
```typescript
import { Protean1 } from "io-protean-client";

const protean1 = new Protean1({
  serverURL: "https://api.example.com",
  bearer: process.env["PROTEAN_BEARER"] ?? "",
});

async function run() {
  const result = await protean1.protean.verifyBankAccount({
    apikey: "kidNaidREXqRUp9qPsrJcLC1pbYJ7Y0q97dFw3gHTf2gbXQF",
    body: {
      entityId: "78bea7b4-1caf-4528-96e4-ec7f9f43f0db",
      programId: "310",
      requestId: "{{requestId}}",
      txnType: "ANY",
      custIfsc: "SBIN0061411",
      custAcctNo: "42090969996",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { Protean1Core } from "io-protean-client/core.js";
import { proteanVerifyBankAccount } from "io-protean-client/funcs/protean-verify-bank-account.js";

// Use `Protean1Core` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const protean1 = new Protean1Core({
  serverURL: "https://api.example.com",
  bearer: process.env["PROTEAN_BEARER"] ?? "",
});

async function run() {
  const res = await proteanVerifyBankAccount(protean1, {
    apikey: "kidNaidREXqRUp9qPsrJcLC1pbYJ7Y0q97dFw3gHTf2gbXQF",
    body: {
      entityId: "78bea7b4-1caf-4528-96e4-ec7f9f43f0db",
      programId: "310",
      requestId: "{{requestId}}",
      txnType: "ANY",
      custIfsc: "SBIN0061411",
      custAcctNo: "42090969996",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("proteanVerifyBankAccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.VerifyBankAccountRequest](../../models/operations/verify-bank-account-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.VerifyBankAccountResponse](../../models/operations/verify-bank-account-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ProteanDefaultError | 4XX, 5XX                   | \*/\*                      |