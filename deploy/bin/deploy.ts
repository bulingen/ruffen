#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticSite } from '../lib/static-site-stack';
import { GitHubActionsRoleStack } from '../lib/gh-actions-role-stack';

const account = "897469443626"
const region = "eu-west-1"

const app = new cdk.App();

new GitHubActionsRoleStack(app, 'RuffenGitHubActionsRole', {
  githubOidcProviderArn: "arn:aws:iam::897469443626:oidc-provider/token.actions.githubusercontent.com",
  githubRepo: 'bulingen/ruffen',
  branch: 'main',
  env: { account, region }
});

new StaticSite(app, 'RuffenStaticSite', {
  distFolder: '../dist',
  env: { account, region }
});