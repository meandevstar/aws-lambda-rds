# AWS API Gateway & AWS RDS sample

Access AWS RDS via AWS API Gateway.

## Quick Start
1. Run `npm install claudia -g`
2. Run `npm install`
3. Change the code in `package.json` here:

    `claudia create --name lambda-rds-query --region us-east-1 --security-group-ids='' --subnet-ids= --api-module app --profile default`

    Here, change the **security-group-ids** and **subnet-ids** option with your RDS details.
4. Run `npm run claudia:update`

## Test
After deploying lambda function by `npm run claudia:create`, test with the url from console.