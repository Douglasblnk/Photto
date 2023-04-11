export default {
  handler: 'src/functions/auth/sign-in/handler.main',
  events: [
    {
      http: {
        method: 'post',
        path: 'sign-in',
      },
    },
  ],
  iamRoleStatements: [{
    Effect: 'Allow',
    Action: [
      'dynamodb:GetItem',
      'dynamodb:PutItem',
    ],
    Resource: 'arn:aws:dynamodb:sa-east-1:531760387770:table/Keepim.User',
  }],
}