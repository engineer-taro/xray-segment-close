// このファイルはデプロイされません
import * as AWSXRay from "aws-xray-sdk-core";
import * as http from "http";
import * as https from "https";
import axios from "axios";

export const handler = async (event: { sleepTime: number }) => {
  AWSXRay.captureHTTPsGlobal(http);
  AWSXRay.captureHTTPsGlobal(https);

  const reponse = await axios.get("https://ここがタイムアウトする.com");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
    }),
  };
};
