import { SSTConfig } from "sst";
import { Function } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "sst-ci-demo",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(({ stack }) => {
      const fn = new Function(stack, "Demo", {
        handler: "packages/functions/src/lambda.handler",
        url: true,
      });

      stack.addOutputs({
        ApiEndpoint: fn.url,
      });
    });
  },
} satisfies SSTConfig;
