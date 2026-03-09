<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->