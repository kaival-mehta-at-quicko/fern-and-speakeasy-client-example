# VerifyBankAccountRequest

## Example Usage

```typescript
import { VerifyBankAccountRequest } from "io-protean-client/models/operations";

let value: VerifyBankAccountRequest = {
  apikey: "kidNaidREXqRUp9qPsrJcLC1pbYJ7Y0q97dFw3gHTf2gbXQF",
  body: {
    entityId: "<id>",
    programId: "<id>",
    requestId: "<id>",
    txnType: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `apikey`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    | kidNaidREXqRUp9qPsrJcLC1pbYJ7Y0q97dFw3gHTf2gbXQF                                                       |
| `body`                                                                                                 | [operations.VerifyBankAccountRequestBody](../../models/operations/verify-bank-account-request-body.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |