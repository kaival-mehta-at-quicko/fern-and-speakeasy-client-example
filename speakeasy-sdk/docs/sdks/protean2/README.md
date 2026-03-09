# Protean

## Overview

### Available Operations

* [verifyBankAccount](#verifybankaccount) - Bank Account Verification 

## verifyBankAccount

Verifies Bank Account through Penny Drop, PennyLess and Hybrid.

### Example Usage: Decryption Fail

<!-- UsageSnippet language="typescript" operationID="verifyBankAccount" method="post" path="/api/v1/bank-account-validation/bank-validateacct" example="Decryption Fail" -->
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
      entityId: "<id>",
      programId: "<id>",
      requestId: "<id>",
      txnType: "<value>",
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
      entityId: "<id>",
      programId: "<id>",
      requestId: "<id>",
      txnType: "<value>",
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
### Example Usage: Invalid target URL

<!-- UsageSnippet language="typescript" operationID="verifyBankAccount" method="post" path="/api/v1/bank-account-validation/bank-validateacct" example="Invalid target URL" -->
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
      entityId: "<id>",
      programId: "<id>",
      requestId: "<id>",
      txnType: "<value>",
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
      entityId: "<id>",
      programId: "<id>",
      requestId: "<id>",
      txnType: "<value>",
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

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrorSchema           | 400, 401, 403, 415, 422, 429 | application/json             |
| errors.ErrorSchema           | 500, 502, 503, 504, 505      | application/json             |
| errors.ProteanDefaultError   | 4XX, 5XX                     | \*/\*                        |