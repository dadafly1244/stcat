import { CognitoUserPool } from 'amazon-cognito-identity-js';
import config from './aws-exports';
const poolData = {
  UserPoolId: config.aws_user_pools_id,
  ClientId: config.aws_user_pools_web_client_id

};

export default new CognitoUserPool(poolData);