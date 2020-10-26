import { Api, JsonRpc } from 'eosjs';
import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';
const { TextEncoder, TextDecoder } = require('util');
require("dotenv").config();

// REQUIRED configurations
if (!process.env.ACTOR) throw new Error("process.env.ACTOR is required");
if (!process.env.PRIVATE_KEYS) throw new Error("process.env.PRIVATE_KEYS is required");
export const ACTOR = process.env.ACTOR;

// OPTIONAL configurations
export const NODEOS_ENDPOINT = process.env.NODEOS_ENDPOINT || "http://localhost:8888"
export const PERMISSION = process.env.PERMISSION || "active";
export const CONCURRENCY = Number(process.env.CONCURRENCY || 5);
export const TIMEOUT_MS = Number(process.env.TIMEOUT_MS || 20);
export const ACCOUNT = process.env.ACCOUNT || "basic.sx";
export const ACTION = process.env.ACTION || "mine";


// EOSIO RPC & API
const signatureProvider = new JsSignatureProvider(process.env.PRIVATE_KEYS.split(","));
export const rpc = new JsonRpc(NODEOS_ENDPOINT, { fetch: require('node-fetch') });
export const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
