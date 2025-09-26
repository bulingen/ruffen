#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StaticSite } from '../lib/static-site-stack';

const account = "897469443626"
const region = "eu-west-1"

const app = new cdk.App();
new StaticSite(app, 'RuffenStaticSite', {
  env: { account, region }
});