import * as AWSXRay from "aws-xray-sdk-core";

export const handler = async (event: { sleepTime: number }) => {
  const segment = AWSXRay.getSegment();

  // 1000msのセグメントを取る
  const initialSegment = segment?.addNewSubsegment("init");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  initialSegment?.close();

  // eventの指定秒数のセグメントを取る
  const sleepSegment = segment?.addNewSubsegment("sleep");
  if (event.sleepTime > 0)
    await new Promise((resolve) => setTimeout(resolve, event.sleepTime));
  sleepSegment?.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
    }),
  };
};
