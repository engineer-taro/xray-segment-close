import * as cdk from "aws-cdk-lib";
import { Tracing } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class XraySegmentCloseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new NodejsFunction(this, "HelloLambda", {
      timeout: cdk.Duration.seconds(10),
      tracing: Tracing.ACTIVE,

      entry: "lib/lambda/hello.ts",
      handler: "handler",
    });
  }
}
