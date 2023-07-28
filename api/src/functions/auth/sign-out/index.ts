export default {
  handler: 'src/functions/auth/sign-out/handler.main',
  events: [
    {
      http: {
        method: 'post',
        path: 'sign-out',
        cors: {
          origin: 'https://keepim.douglasblnk.com',
          allowCredentials: true,
        },
      },
    },
  ],
  iamRoleStatements: [
    {
      Effect: 'Allow',
      Action: ['dynamodb:GetItem'],
      Resource: 'arn:aws:dynamodb:sa-east-1:531760387770:table/Keepim.Session',
    },
    {
      Effect: 'Allow',
      Action: ['dynamodb:Delete'],
      Resource: 'arn:aws:dynamodb:sa-east-1:531760387770:table/Keepim.Session',
    },
  ],
}
