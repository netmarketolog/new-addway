!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r);var s=r.register;s("fkNhc",function(t,n){e(t.exports,"getApp",function(){return r("MjY8E").getApp}),e(t.exports,"getApps",function(){return r("MjY8E").getApps}),e(t.exports,"initializeApp",function(){return r("MjY8E").initializeApp}),e(t.exports,"registerVersion",function(){return r("MjY8E").registerVersion}),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r("MjY8E").registerVersion)("firebase","10.12.5","app")}),s("MjY8E",function(t,n){e(t.exports,"_registerComponent",function(){return y}),e(t.exports,"_getProvider",function(){return v}),e(t.exports,"registerVersion",function(){return S}),e(t.exports,"SDK_VERSION",function(){return w}),e(t.exports,"initializeApp",function(){return I}),e(t.exports,"getApp",function(){return E}),e(t.exports,"getApps",function(){return T});var i=r("6ExWU"),s=r("kZfxc"),o=r("2xDiJ"),a=r("ajgRO");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let h="@firebase/app",u="0.10.8",c=new s.Logger("@firebase/app"),d="[DEFAULT]",p={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},_=new Map,f=new Map,g=new Map;function m(e,t){try{e.container.addComponent(t)}catch(n){c.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function y(e){let t=e.name;if(g.has(t))return c.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(g.set(t,e),_.values()))m(n,e);for(let t of f.values())m(t,e);return!0}function v(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let C=new o.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w="10.12.5";function I(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});let r=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw C.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw C.create("no-options");let a=_.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(r,a.config))return a;throw C.create("duplicate-app",{appName:s})}let l=new i.ComponentContainer(s);for(let e of g.values())l.addComponent(e);let h=new b(n,r,l);return _.set(s,h),h}function E(e=d){let t=_.get(e);if(!t&&e===d&&(0,o.getDefaultAppConfig)())return I();if(!t)throw C.create("no-app",{appName:e});return t}function T(){return Array.from(_.values())}function S(e,t,n){var r;let s=null!==(r=p[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${s}" with version "${t}":`];o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),c.warn(e.join(" "));return}y(new i.Component(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}let k="firebase-heartbeat-store",N=null;function x(){return N||(N=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(k)}catch(e){console.warn(e)}}}).catch(e=>{throw C.create("idb-open",{originalErrorMessage:e.message})})),N}async function P(e){try{let t=(await x()).transaction(k),n=await t.objectStore(k).get(D(e));return await t.done,n}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=C.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}async function R(e,t){try{let n=(await x()).transaction(k,"readwrite"),i=n.objectStore(k);await i.put(t,D(e)),await n.done}catch(e){if(e instanceof o.FirebaseError)c.warn(e.message);else{let t=C.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});c.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}class A{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new O(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=L();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=L(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){let n=[],i=e.slice();for(let r of e){let e=n.find(e=>e.agent===r.agent);if(e){if(e.dates.push(r.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),M(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function L(){return new Date().toISOString().substring(0,10)}class O{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await P(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function M(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}y(new i.Component("platform-logger",e=>new l(e),"PRIVATE")),y(new i.Component("heartbeat",e=>new A(e),"PRIVATE")),S(h,u,""),S(h,u,"esm2017"),S("fire-js","")}),s("6ExWU",function(t,n){e(t.exports,"Component",function(){return s}),e(t.exports,"Provider",function(){return a}),e(t.exports,"ComponentContainer",function(){return l});var i=r("2xDiJ");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new i.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(e)&&t.resolve(i);return i}onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===o?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}}),s("2xDiJ",function(n,i){e(n.exports,"assert",function(){return a}),e(n.exports,"assertionError",function(){return l}),e(n.exports,"base64",function(){return c}),e(n.exports,"base64Encode",function(){return p}),e(n.exports,"base64urlEncodeWithoutPadding",function(){return _}),e(n.exports,"deepCopy",function(){return g}),e(n.exports,"getDefaultEmulatorHostnameAndPort",function(){return w}),e(n.exports,"getDefaultAppConfig",function(){return I}),e(n.exports,"Deferred",function(){return E}),e(n.exports,"createMockUserToken",function(){return T}),e(n.exports,"isMobileCordova",function(){return S}),e(n.exports,"isBrowser",function(){return k}),e(n.exports,"isWebWorker",function(){return N}),e(n.exports,"isReactNative",function(){return x}),e(n.exports,"isNodeSdk",function(){return P}),e(n.exports,"isIndexedDBAvailable",function(){return R}),e(n.exports,"validateIndexedDBOpenable",function(){return D}),e(n.exports,"FirebaseError",function(){return A}),e(n.exports,"ErrorFactory",function(){return L}),e(n.exports,"jsonEval",function(){return M}),e(n.exports,"stringify",function(){return F}),e(n.exports,"isValidFormat",function(){return W}),e(n.exports,"isAdmin",function(){return B}),e(n.exports,"contains",function(){return U}),e(n.exports,"safeGet",function(){return j}),e(n.exports,"isEmpty",function(){return H}),e(n.exports,"map",function(){return z}),e(n.exports,"deepEqual",function(){return function e(t,n){if(t===n)return!0;let i=Object.keys(t),r=Object.keys(n);for(let s of i){if(!r.includes(s))return!1;let i=t[s],o=n[s];if(V(i)&&V(o)){if(!e(i,o))return!1}else if(i!==o)return!1}for(let e of r)if(!i.includes(e))return!1;return!0}}),e(n.exports,"querystring",function(){return $}),e(n.exports,"Sha1",function(){return Y}),e(n.exports,"errorPrefix",function(){return K}),e(n.exports,"stringToByteArray",function(){return G}),e(n.exports,"stringLength",function(){return Q}),e(n.exports,"getModularInstance",function(){return J});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var s=r("6qd2L");let o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},h=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},u=function(e){let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{let s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=r>>2,u=(3&r)<<4|o>>4,c=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(c=64)),i.push(n[h],n[u],n[c],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):u(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0,o=++t<e.length?n[e.charAt(t)]:64,a=++t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new d;let l=r<<2|s>>4;if(i.push(l),64!==o){let e=s<<4&240|o>>2;if(i.push(e),64!==a){let e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let p=function(e){let t=h(e);return c.encodeByteArray(t,!0)},_=function(e){return p(e).replace(/\./g,"")},f=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e){return function e(t,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return n}for(let i in n)n.hasOwnProperty(i)&&"__proto__"!==i&&(t[i]=e(t[i],n[i]));return t}(void 0,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,y=()=>{if(void 0===s||void 0===s.env)return;let e=void 0;if(e)return JSON.parse(e)},v=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&f(e[1]);return t&&JSON.parse(t)},C=()=>{try{return m()||y()||v()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},b=e=>{var t,n;return null===(n=null===(t=C())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=e=>{let t=b(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},I=()=>{var e;return null===(e=C())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_(JSON.stringify({alg:"none",type:"JWT"})),_(JSON.stringify(s)),""].join(".")}function S(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function k(){return"undefined"!=typeof window||N()}function N(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function x(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function P(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function R(){try{return"object"==typeof indexedDB}catch(e){return!1}}function D(){return new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class A extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,A.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(O,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new A(i,o,n)}}let O=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return JSON.parse(e)}function F(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let q=function(e){let t={},n={},i={},r="";try{let s=e.split(".");t=M(f(s[0])||""),n=M(f(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},W=function(e){let t=q(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},B=function(e){let t=q(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function H(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function z(e,t,n){let i={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function V(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){let t=[];for(let[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,i;t||(t=0);let r=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=r[e-3]^r[e-8]^r[e-14]^r[e-16];r[e]=(t<<1|t>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),i=1518500249):(n=o^a^l,i=1859775393):e<60?(n=o&a|l&(o|a),i=2400959708):(n=o^a^l,i=3395469782);let t=(s<<5|s>>>27)+n+h+i+r[e]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function K(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=function(e){let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){let t=r-55296;a(++i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:(r<65536?t[n++]=r>>12|224:(t[n++]=r>>18|240,t[n++]=r>>12&63|128),t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},Q=function(e){let t=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return e&&e._delegate?e._delegate:e}}),s("6qd2L",function(e,t){var n,i,r,s=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var h=[],u=!1,c=-1;function d(){u&&r&&(u=!1,r.length?h=r.concat(h):c=-1,h.length&&p())}function p(){if(!u){var e=l(d);u=!0;for(var t=h.length;t;){for(r=h,h=[];++c<t;)r&&r[c].run();c=-1,t=h.length}r=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new _(e,t)),1!==h.length||u||l(p)},_.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),s("kZfxc",function(t,n){var i,r;e(t.exports,"LogLevel",function(){return i}),e(t.exports,"Logger",function(){return u}),e(t.exports,"setLogLevel",function(){return c}),e(t.exports,"setUserLogHandler",function(){return d});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(r=i||(i={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";let o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,l={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},h=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=l[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class u{constructor(e){this.name=e,this._logLevel=a,this._logHandler=h,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function c(e){s.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(let n of s){let r=null;t&&t.level&&(r=o[t.level]),null===e?n.userLogHandler=null:n.userLogHandler=(t,n,...s)=>{let o=s.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}),s("ajgRO",function(t,n){e(t.exports,"openDB",function(){return s});var i=r("kKOTz");function s(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){let l=indexedDB.open(e,t),h=(0,i.w)(l);return r&&l.addEventListener("upgradeneeded",e=>{r((0,i.w)(l.result),e.oldVersion,e.newVersion,(0,i.w)(l.transaction),e)}),n&&l.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),h.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),h}let o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function h(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(l.get(t))return l.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||o.includes(n)))return;let s=async function(e,...t){let s=this.transaction(e,r?"readwrite":"readonly"),o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return l.set(t,s),s}(0,i.r)(e=>({...e,get:(t,n,i)=>h(t,n)||e.get(t,n,i),has:(t,n)=>!!h(t,n)||e.has(t,n)}))}),s("kKOTz",function(t,n){let i,r;e(t.exports,"w",function(){return p}),e(t.exports,"r",function(){return d});let s=(e,t)=>t.some(t=>e instanceof t),o=new WeakMap,a=new WeakMap,l=new WeakMap,h=new WeakMap,u=new WeakMap,c={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){c=e(c)}function p(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(p(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&o.set(t,e)}).catch(()=>{}),u.set(t,e),t}(e);if(h.has(e))return h.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(_(this),e),p(o.get(this))}:function(...e){return p(t.apply(_(this),e))}:function(e,...n){let i=t.call(_(this),e,...n);return l.set(i,e.sort?e.sort():[e]),p(i)}:(t instanceof IDBTransaction&&function(e){if(a.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});a.set(e,t)}(t),s(t,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,c):t;return n!==e&&(h.set(e,n),u.set(n,e)),n}let _=e=>u.get(e)}),s("cokon",function(t,n){e(t.exports,"get",function(){return r("eA2L7").get}),e(t.exports,"getDatabase",function(){return r("eA2L7").getDatabase}),e(t.exports,"ref",function(){return r("eA2L7").ref}),r("eA2L7")}),s("eA2L7",function(t,n){let i,s,o,a,l,h,u,c,d,p,_;e(t.exports,"ref",function(){return iu}),e(t.exports,"get",function(){return id}),e(t.exports,"getDatabase",function(){return im});var f,g,m=r("MjY8E"),y=r("6ExWU"),v=r("2xDiJ"),C=r("kZfxc"),b=r("6qd2L");let w="@firebase/database",I="1.0.7",E="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,v.stringify)(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,v.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,v.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){let t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new T(t)}}catch(e){}return new S},N=k("localStorage"),x=k("sessionStorage"),P=new C.Logger("@firebase/database"),R=(_=1,function(){return _++}),D=function(e){let t=(0,v.stringToByteArray)(e),n=new v.Sha1;n.update(t);let i=n.digest();return(0,v.base64).encodeByteArray(i)},A=function(...e){let t="";for(let n=0;n<e.length;n++){let i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=A.apply(null,i):"object"==typeof i?t+=(0,v.stringify)(i):t+=i,t+=" "}return t},L=null,O=!0,M=function(e,t){(0,v.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(P.logLevel=C.LogLevel.VERBOSE,L=P.log.bind(P),t&&x.set("logging_enabled",!0)):"function"==typeof e?L=e:(L=null,x.remove("logging_enabled"))},F=function(...e){if(!0===O&&(O=!1,null===L&&!0===x.get("logging_enabled")&&M(!0)),L){let t=A.apply(null,e);L(t)}},q=function(e){return function(...t){F(e,...t)}},W=function(...e){let t="FIREBASE INTERNAL ERROR: "+A(...e);P.error(t)},B=function(...e){let t=`FIREBASE FATAL ERROR: ${A(...e)}`;throw P.error(t),Error(t)},U=function(...e){let t="FIREBASE WARNING: "+A(...e);P.warn(t)},j=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&U("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},H=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},z=function(e){if((0,v.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1,n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},V="[MIN_NAME]",$="[MAX_NAME]",Y=function(e,t){if(e===t)return 0;{if(e===V||t===$)return -1;if(t===V||e===$)return 1;let n=et(e),i=et(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},K=function(e,t){return e===t?0:e<t?-1:1},G=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+(0,v.stringify)(t))},Q=function(e){if("object"!=typeof e||null===e)return(0,v.stringify)(e);let t=[];for(let n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,v.stringify)(t[i])+":"+Q(e[t[i]]);return n+"}"},J=function(e,t){let n=e.length;if(n<=t)return[e];let i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function X(e,t){for(let n in e)e.hasOwnProperty(n)&&t(n,e[n])}let Z=function(e){let t,n,i,r,s;(0,v.assert)(!H(e),"Invalid JSON number"),0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=22250738585072014e-324?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),1023))+1023,i=Math.round(e*Math.pow(2,52-r)-4503599627370496)):(n=0,i=Math.round(e/5e-324)));let o=[];for(s=52;s;s-=1)o.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)o.push(n%2?1:0),n=Math.floor(n/2);o.push(t?1:0),o.reverse();let a=o.join(""),l="";for(s=0;s<64;s+=8){let e=parseInt(a.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()},ee=RegExp("^-?(0*)\\d{1,10}$"),et=function(e){if(ee.test(e)){let t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},en=function(e){try{e()}catch(e){setTimeout(()=>{throw U("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}},ei=function(e,t){let n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){U(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',U(e)}}class eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}eo.OWNER="owner";let ea=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,el="websocket",eh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=N.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&N.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ec(e,t,n){let i;if((0,v.assert)("string"==typeof t,"typeof type must == string"),(0,v.assert)("object"==typeof n,"typeof params must == object"),t===el)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===eh)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw Error("Unknown connection type: "+t);(e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams)&&(n.ns=e.namespace);let r=[];return X(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,v.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,v.deepCopy)(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ep={},e_={};function ef(e){let t=e.toString();return ep[t]||(ep[t]=new ed),ep[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&en(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em="start";class ey{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=q(e),this.stats_=ef(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ec(t,eh,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new eg(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),z(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ev((...e)=>{let[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===em)this.id=n,this.password=i;else if("close"===t)n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+t)}},(...e)=>{let[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);let e={};e[em]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ea.test(location.hostname)&&(e.r="f");let t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ey.forceAllow_=!0}static forceDisallow(){ey.forceDisallow_=!0}static isAvailable(){return!(0,v.isNodeSdk)()&&(!!ey.forceAllow_||!ey.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=J((0,v.base64Encode)(t),1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,v.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");let n={};n.dframe="t",n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=(0,v.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ev{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,v.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=R(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ev.createIFrame_();let n="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(n='<script>document.domain="'+document.domain+'";</script>');let i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){F("frame writing exception"),e.stack&&F(e.stack),F(e)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||F("No IE domain setting required")}catch(n){let t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;)if(this.pendingSegs[0].d.length+30+n.length<=1870){let e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}else break;return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,()=>{clearTimeout(i),n()})}addTag(e,t){(0,v.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){let e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}},Math.floor(1))}}let eC=null;"undefined"!=typeof MozWebSocket?eC=MozWebSocket:"undefined"!=typeof WebSocket&&(eC=WebSocket);class eb{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=q(this.connId),this.stats_=ef(t),this.connURL=eb.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){let s={};return s.v="5",!(0,v.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&ea.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),ec(e,el,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,N.set("previous_websocket_failure",!0);try{let e;if((0,v.isNodeSdk)()){let t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${E}/${b.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);let n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new eC(this.connURL,[],e)}catch(t){this.log_("Error instantiating WebSocket.");let e=t.message||t.data;e&&this.log_(e),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");let t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){eb.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let t=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);t&&t.length>1&&4.4>parseFloat(t[1])&&(e=!0)}return!e&&null!==eC&&!eb.forceDisallow_}static previouslyFailed(){return N.isInMemoryStorage||!0===N.get("previous_websocket_failure")}markConnectionHealthy(){N.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let e=this.frames.join("");this.frames=null;let t=(0,v.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,v.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{let e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();let t=(0,v.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let n=J(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}eb.responsesRequiredToBeHealthy=2,eb.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ey,eb]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){let t=eb&&eb.isAvailable(),n=t&&!eb.previouslyFailed();if(e.webSocketOnly&&(t||U("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[eb];else{let e=this.transports_=[];for(let t of ew.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);ew.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ew.globalTransportInitialized_=!1;class eI{constructor(e,t,n,i,r,s,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=q("c:"+this.id+":"),this.transportManager_=new ew(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));let i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){this.sendData_({t:"d",d:e})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){let t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=G("t",e),n=G("d",e);if("c"===t)this.onSecondaryControl_(n);else if("d"===t)this.pendingDataMessages.push(n);else throw Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=G("t",e),n=G("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=G("t",e);if("d"in e){let n=e.d;if("h"===t){let e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?W("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):W("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&U("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(N.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,v.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});let i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);let i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context)){i.splice(e,1);return}}validateEventType_(e){(0,v.assert)(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS extends eT{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,v.isMobileCordova)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new eS}getInitialEvent(e){return(0,v.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}class ek{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function eN(){return new ek("")}function ex(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function eP(e){return e.pieces_.length-e.pieceNum_}function eR(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ek(e.pieces_,t)}function eD(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function eA(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function eL(e){if(e.pieceNum_>=e.pieces_.length)return null;let t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ek(t,0)}function eO(e,t){let n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ek)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{let e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ek(n,0)}function eM(e){return e.pieceNum_>=e.pieces_.length}function eF(e,t){let n=ex(e),i=ex(t);if(null===n)return t;if(n===i)return eF(eR(e),eR(t));throw Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function eq(e,t){if(eP(e)!==eP(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function eW(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(eP(e)>eP(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class eB{constructor(e,t){this.errorPrefix_=t,this.parts_=eA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,v.stringLength)(this.parts_[e]);eU(this)}}function eU(e){if(e.byteLength_>768)throw Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ej(e))}function ej(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eH extends eT{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new eH}getInitialEvent(e){return(0,v.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}class ez extends eE{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ez.nextPersistentConnectionId_++,this.log_=q("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,v.isNodeSdk)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");eH.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&eS.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){let i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_((0,v.stringify)(r)),(0,v.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();let t=new v.Deferred,n={p:e._path.toString(),q:e._queryObject};this.outstandingGets_.push({action:"g",request:n,onComplete:e=>{let n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}}),this.outstandingGetCount_++;let i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();let r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,v.assert)(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");let o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){let t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);let r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,r=>{let s=r.d,o=r.s;ez.warnOnListenWarnings_(s,t),(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,v.contains)(e,"w")){let n=(0,v.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){let e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();U(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,v.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=(0,v.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,t=>{let n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){let n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,v.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);let r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){let r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e.s,e.d)},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();let s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;let o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{if("ok"!==e.s){let t=e.d;this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,v.stringify)(e));let t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else if("error"in e)throw"A server-side error has occurred: "+e.error;else"a"in e&&this.onDataPush_(e.a,e.b)}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):W("Unrecognized action received from server: "+(0,v.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,v.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){!e||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=new Date().getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ez.nextConnectionId_++,r=this.lastSessionId,s=!1,o=null,a=function(){o?o.close():(s=!0,n())};this.realtime_={close:a,sendRequest:function(e){(0,v.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)}};let l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new eI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{U(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&U(e),a())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,v.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>Q(e)).join("$"):"default";let i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){let n;let i=new ek(e).toString();if(this.listens.has(i)){let e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===e||"permission_denied"===e)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===e||"permission_denied"===e)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let e of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";(0,v.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+E.replace(/\./g,"-")]=1,(0,v.isMobileCordova)()?e["framework.cordova"]=1:(0,v.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=eS.getInstance().currentlyOnline();return(0,v.isEmpty)(this.interruptReasons_)&&e}}ez.nextPersistentConnectionId_=0,ez.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new eV(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let n=new eV(V,e),i=new eV(V,t);return 0!==this.compare(n,i)}minPost(){return eV.MIN}}class eY extends e${static get __EMPTY_NODE(){return i}static set __EMPTY_NODE(e){i=e}compare(e,t){return Y(e.name,t.name)}isDefinedOn(e){throw(0,v.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return eV.MIN}maxPost(){return new eV($,i)}makePost(e,t){return(0,v.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new eV(e,i)}toString(){return".key"}}let eK=new eY;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eG{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else if(0===s){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}getNext(){let e;if(0===this.nodeStack_.length)return null;let t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class eQ{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:eQ.RED,this.left=null!=i?i:eJ.EMPTY_NODE,this.right=null!=r?r:eJ.EMPTY_NODE}copy(e,t,n,i,r){return new eQ(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()}removeMin_(){if(this.left.isEmpty())return eJ.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}remove(e,t){let n,i;if(n=this,0>t(e,n.key))n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return eJ.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,eQ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,eQ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){return Math.pow(2,this.check_())<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e===this.right.check_())return e+(this.isRed_()?0:1);throw Error("Black depths differ")}}eQ.RED=!0,eQ.BLACK=!1;class eJ{constructor(e,t=eJ.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new eJ(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,eQ.BLACK,null,null))}remove(e){return new eJ(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,eQ.BLACK,null,null))}get(e){let t;let n=this.root_;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty()){if(i)return i.key;return null}for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new eG(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new eG(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new eG(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new eG(this.root_,null,this.comparator_,!0,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eX(e,t){return Y(e.name,t.name)}function eZ(e,t){return Y(e,t)}eJ.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new eQ(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let e0=function(e){return"number"==typeof e?"number:"+Z(e):"string:"+e},e1=function(e){if(e.isLeafNode()){let t=e.val();(0,v.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,v.contains)(t,".sv"),"Priority must be a string or number.")}else(0,v.assert)(e===s||e.isEmpty(),"priority of unexpected type.");(0,v.assert)(e===s||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};class e2{constructor(e,t=e2.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,v.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),e1(this.priorityNode_)}static set __childrenNodeConstructor(e){o=e}static get __childrenNodeConstructor(){return o}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new e2(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:e2.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return eM(e)?this:".priority"===ex(e)?this.priorityNode_:e2.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:e2.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let n=ex(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,v.assert)(".priority"!==n||1===eP(e),".priority must be the last token in a path"),this.updateImmediateChild(n,e2.__childrenNodeConstructor.EMPTY_NODE.updateChild(eR(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+e0(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":","number"===t?e+=Z(this.value_):e+=this.value_,this.lazyHash_=D(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===e2.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof e2.__childrenNodeConstructor?-1:((0,v.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,n=typeof this.value_,i=e2.VALUE_TYPE_ORDER.indexOf(t),r=e2.VALUE_TYPE_ORDER.indexOf(n);return((0,v.assert)(i>=0,"Unknown leaf type: "+t),(0,v.assert)(r>=0,"Unknown leaf type: "+n),i!==r)?r-i:"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(e){return e===this||!!e.isLeafNode()&&this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}}e2.VALUE_TYPE_ORDER=["object","boolean","number","string"];let e4=new class extends e${compare(e,t){let n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Y(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return eV.MIN}maxPost(){return new eV($,new e2("[PRIORITY-POST]",l))}makePost(e,t){return new eV(t,new e2("[PRIORITY-POST]",a(e)))}toString(){return".priority"}},e6=Math.log(2);class e3{constructor(e){this.count=parseInt(Math.log(e+1)/e6,10),this.current_=this.count-1;let t=parseInt(Array(this.count+1).join("1"),2);this.bits_=e+1&t}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}}let e5=function(e,t,n,i){e.sort(t);let r=function(t,i){let s;let o=i-t;if(0===o)return null;if(1===o)return s=e[t],new eQ(n?n(s):s,s.node,eQ.BLACK,null,null);{let a=parseInt(o/2,10)+t,l=r(t,a),h=r(a+1,i);return s=e[a],new eQ(n?n(s):s,s.node,eQ.BLACK,l,h)}};return new eJ(i||t,function(t){let i=null,s=null,o=e.length,a=function(t,i){let s=o-t,a=o;o-=t;let h=r(s+1,a),u=e[s];l(new eQ(n?n(u):u,u.node,i,null,h))},l=function(e){i?i.left=e:s=e,i=e};for(let e=0;e<t.count;++e){let n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,eQ.BLACK):(a(i,eQ.BLACK),a(i,eQ.RED))}return s}(new e3(e.length)))},e8={};class e9{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,v.assert)(e8&&e4,"ChildrenNode.ts has not been loaded"),h=h||new e9({".priority":e8},{".priority":e4})}get(e){let t=(0,v.safeGet)(this.indexes_,e);if(!t)throw Error("No index defined for "+e);return t instanceof eJ?t:null}hasIndex(e){return(0,v.contains)(this.indexSet_,e.toString())}addIndex(e,t){let n;(0,v.assert)(e!==eK,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(eV.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();n=r?e5(i,e.getCompare()):e8;let a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;let h=Object.assign({},this.indexes_);return h[a]=n,new e9(h,l)}addToIndexes(e,t){return new e9((0,v.map)(this.indexes_,(n,i)=>{let r=(0,v.safeGet)(this.indexSet_,i);if((0,v.assert)(r,"Missing index implementation for "+i),n===e8){if(!r.isDefinedOn(e.node))return e8;{let n=[],i=t.getIterator(eV.Wrap),s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),e5(n,r.getCompare())}}{let i=t.get(e.name),r=n;return i&&(r=r.remove(new eV(e.name,i))),r.insert(e,e.node)}}),this.indexSet_)}removeFromIndexes(e,t){return new e9((0,v.map)(this.indexes_,n=>{if(n===e8)return n;{let i=t.get(e.name);return i?n.remove(new eV(e.name,i)):n}}),this.indexSet_)}}class e7{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&e1(this.priorityNode_),this.children_.isEmpty()&&(0,v.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return u||(u=new e7(new eJ(eZ),null,e9.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||u}updatePriority(e){return this.children_.isEmpty()?this:new e7(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{let t=this.children_.get(e);return null===t?u:t}}getChild(e){let t=ex(e);return null===t?this:this.getImmediateChild(t).getChild(eR(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,v.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{let n,i;let r=new eV(e,t);t.isEmpty()?(n=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(n=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));let s=n.isEmpty()?u:this.priorityNode_;return new e7(n,s,i)}}updateChild(e,t){let n=ex(e);if(null===n)return t;{(0,v.assert)(".priority"!==ex(e)||1===eP(e),".priority must be the last token in a path");let i=this.getImmediateChild(n).updateChild(eR(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},n=0,i=0,r=!0;if(this.forEachChild(e4,(s,o)=>{t[s]=o.val(e),n++,r&&e7.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),e||!r||!(i<2*n))return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t;{let e=[];for(let n in t)e[n]=t[n];return e}}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+e0(this.getPriority().val())+":"),this.forEachChild(e4,(t,n)=>{let i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":D(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){let i=this.resolveIndex_(n);if(!i)return this.children_.getPredecessorKey(e);{let n=i.getPredecessorKey(new eV(e,t));return n?n.name:null}}getFirstChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.minKey();{let e=t.minKey();return e&&e.name}}getFirstChild(e){let t=this.getFirstChildName(e);return t?new eV(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(!t)return this.children_.maxKey();{let e=t.maxKey();return e&&e.name}}getLastChild(e){let t=this.getLastChildName(e);return t?new eV(t,this.children_.get(t)):null}forEachChild(e,t){let n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{let n=this.children_.getIteratorFrom(e.name,eV.Wrap),i=n.peek();for(;null!=i&&0>t.compare(i,e);)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{let n=this.children_.getReverseIteratorFrom(e.name,eV.Wrap),i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===te?-1:0}withIndex(e){if(e===eK||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new e7(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===eK||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode()||!this.getPriority().equals(e.getPriority())||this.children_.count()!==e.children_.count())return!1;{let t=this.getIterator(e4),n=e.getIterator(e4),i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}}resolveIndex_(e){return e===eK?null:this.indexMap_.get(e.toString())}}e7.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let te=new class extends e7{constructor(){super(new eJ(eZ),e7.EMPTY_NODE,e9.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return e7.EMPTY_NODE}isEmpty(){return!1}};function tt(e,t=null){if(null===e)return e7.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,v.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new e2(e,tt(t));if(e instanceof Array){let n=e7.EMPTY_NODE;return X(e,(t,i)=>{if((0,v.contains)(e,t)&&"."!==t.substring(0,1)){let e=tt(i);(e.isLeafNode()||!e.isEmpty())&&(n=n.updateImmediateChild(t,e))}}),n.updatePriority(tt(t))}{let n=[],i=!1;if(X(e,(e,t)=>{if("."!==e.substring(0,1)){let r=tt(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new eV(e,r)))}}),0===n.length)return e7.EMPTY_NODE;let r=e5(n,eX,e=>e.name,eZ);if(!i)return new e7(r,tt(t),e9.Default);{let e=e5(n,e4.getCompare());return new e7(r,tt(t),new e9({".priority":e},{".priority":e4}))}}}Object.defineProperties(eV,{MIN:{value:new eV(V,e7.EMPTY_NODE)},MAX:{value:new eV($,te)}}),eY.__EMPTY_NODE=e7.EMPTY_NODE,e2.__childrenNodeConstructor=e7,s=te,l=te,a=tt;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends e${constructor(e){super(),this.indexPath_=e,(0,v.assert)(!eM(e)&&".priority"!==ex(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Y(e.name,t.name):r}makePost(e,t){let n=tt(e);return new eV(t,e7.EMPTY_NODE.updateChild(this.indexPath_,n))}maxPost(){return new eV($,e7.EMPTY_NODE.updateChild(this.indexPath_,te))}toString(){return eA(this.indexPath_,0).join("/")}}let ti=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends e${compare(e,t){let n=e.node.compareTo(t.node);return 0===n?Y(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return eV.MIN}maxPost(){return eV.MAX}makePost(e,t){return new eV(t,tt(e))}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){return{type:"value",snapshotNode:e}}function ts(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function to(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ta(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){(0,v.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(to(t,o)):(0,v.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(ts(t,n)):s.trackChildChange(ta(t,n,o))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return null==n||(e.isLeafNode()||e.forEachChild(e4,(e,i)=>{t.hasChild(e)||n.trackChildChange(to(e,i))}),t.isLeafNode()||t.forEachChild(e4,(t,i)=>{if(e.hasChild(t)){let r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(ta(t,i,r))}else n.trackChildChange(ts(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?e7.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.indexedFilter_=new tl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=th.getStartPost_(e),this.endPost_=th.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),e):0>this.index_.compare(this.getStartPost(),e),n=this.endIsInclusive_?0>=this.index_.compare(e,this.getEndPost()):0>this.index_.compare(e,this.getEndPost());return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new eV(t,n))||(n=e7.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=e7.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(e7.EMPTY_NODE);let r=this;return t.forEachChild(e4,(e,t)=>{r.matches(new eV(e,t))||(i=i.updateImmediateChild(e,e7.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(!e.hasStart())return e.getIndex().minPost();{let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}}static getEndPost_(e){if(!e.hasEnd())return e.getIndex().maxPost();{let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{let t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{let t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new th(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return(this.rangedFilter_.matches(new eV(t,n))||(n=e7.EMPTY_NODE),e.getImmediateChild(t).equals(n))?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=e7.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=e7.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){let t=e.getNext();if(this.withinDirectionalStart(t)){if(this.withinDirectionalEnd(t))i=i.updateImmediateChild(t.name,t.node),n++;else break}}}else{let e;i=(i=t.withIndex(this.index_)).updatePriority(e7.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){let t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,e7.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){let e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();(0,v.assert)(e.numChildren()===this.limit_,"");let o=new eV(t,n),a=this.reverse_?e.getFirstChild(this.index_):e.getLastChild(this.index_),l=this.rangedFilter_.matches(o);if(e.hasChild(t)){let h=e.getImmediateChild(t),u=i.getChildAfterChild(this.index_,a,this.reverse_);for(;null!=u&&(u.name===t||e.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);let c=null==u?1:s(u,o);if(l&&!n.isEmpty()&&c>=0)return null!=r&&r.trackChildChange(ta(t,n,h)),e.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(to(t,h));let n=e.updateImmediateChild(t,e7.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(ts(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:l&&s(a,o)>=0?(null!=r&&(r.trackChildChange(to(a.name,a.node)),r.trackChildChange(ts(t,n))),e.updateImmediateChild(t,n).updateImmediateChild(a.name,e7.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e4}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,v.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,v.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:V}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,v.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,v.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:$}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,v.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e4}copy(){let e=new tc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function td(e){let t;let n={};if(e.isDefault())return n;if(e.index_===e4?t="$priority":e.index_===ti?t="$value":e.index_===eK?t="$key":((0,v.assert)(e.index_ instanceof tn,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=(0,v.stringify)(t),e.startSet_){let t=e.startAfterSet_?"startAfter":"startAt";n[t]=(0,v.stringify)(e.indexStartValue_),e.startNameSet_&&(n[t]+=","+(0,v.stringify)(e.indexStartName_))}if(e.endSet_){let t=e.endBeforeSet_?"endBefore":"endAt";n[t]=(0,v.stringify)(e.indexEndValue_),e.endNameSet_&&(n[t]+=","+(0,v.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function tp(e){let t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==e4&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends eE{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=q("p:rest:"),this.listens_={}}reportStats(e){throw Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,v.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){let r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);let s=t_.getListenId_(e,n),o={};this.listens_[s]=o;let a=td(e._queryParams);this.restRequest_(r+".json",a,(e,t)=>{let a=t;404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),(0,v.safeGet)(this.listens_,s)===o&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)})}unlisten(e,t){let n=t_.getListenId_(e,t);delete this.listens_[n]}get(e){let t=td(e._queryParams),n=e._path.toString(),i=new v.Deferred;return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);let s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,v.querystring)(t);this.log_("Sending REST request for "+s);let o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=(0,v.jsonEval)(o.responseText)}catch(e){U("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&U("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.rootNode_=e7.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(){return{value:null,children:new Map}}function tm(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((e,n)=>{t(n,e)})}(e,(e,i)=>{tm(i,new ek(t.toString()+"/"+e),n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&X(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}class tv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ty(e);let n=1e4+2e4*Math.random();ei(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){let e=this.statsListener_.get(),t={},n=!1;X(e,(e,i)=>{i>0&&(0,v.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),ei(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}function tC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tw(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}(f=g||(g={}))[f.OVERWRITE=0]="OVERWRITE",f[f.MERGE=1]="MERGE",f[f.ACK_USER_WRITE=2]="ACK_USER_WRITE",f[f.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=g.ACK_USER_WRITE,this.source=tC()}operationForChild(e){if(!eM(this.path))return(0,v.assert)(ex(this.path)===e,"operationForChild called for unrelated child."),new tI(eR(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,v.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new ek(e));return new tI(eN(),t,this.revert)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.source=e,this.path=t,this.type=g.LISTEN_COMPLETE}operationForChild(e){return eM(this.path)?new tE(this.source,eN()):new tE(this.source,eR(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=g.OVERWRITE}operationForChild(e){return eM(this.path)?new tT(this.source,eN(),this.snap.getImmediateChild(e)):new tT(this.source,eR(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=g.MERGE}operationForChild(e){if(!eM(this.path))return(0,v.assert)(ex(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tS(this.source,eR(this.path),this.children);{let t=this.children.subtree(new ek(e));return t.isEmpty()?null:t.value?new tT(this.source,eN(),t.value):new tS(this.source,eN(),t)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(eM(e))return this.isFullyInitialized()&&!this.filtered_;let t=ex(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tx(e,t,n,i,r,s){let o=i.filter(e=>e.type===n);o.sort((t,n)=>(function(e,t,n){if(null==t.childName||null==n.childName)throw(0,v.assertionError)("Should only compare child_ events.");let i=new eV(t.childName,t.snapshotNode),r=new eV(n.childName,n.snapshotNode);return e.index_.compare(i,r)})(e,t,n)),o.forEach(n=>{let i=("value"===n.type||"child_removed"===n.type||(n.prevName=s.getPredecessorChildName(n.childName,n.snapshotNode,e.index_)),n);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(e,t){return{eventCache:e,serverCache:t}}function tR(e,t,n,i){return tP(new tk(t,n,i),e.serverCache)}function tD(e,t,n,i){return tP(e.eventCache,new tk(t,n,i))}function tA(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function tL(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}let tO=()=>(c||(c=new eJ(K)),c);class tM{constructor(e,t=tO()){this.value=e,this.children=t}static fromObject(e){let t=new tM(null);return X(e,(e,n)=>{t=t.set(new ek(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:eN(),value:this.value};if(eM(e))return null;{let n=ex(e),i=this.children.get(n);if(null===i)return null;{let r=i.findRootMostMatchingPathAndValue(eR(e),t);return null!=r?{path:eO(new ek(n),r.path),value:r.value}:null}}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(eM(e))return this;{let t=ex(e),n=this.children.get(t);return null!==n?n.subtree(eR(e)):new tM(null)}}set(e,t){if(eM(e))return new tM(t,this.children);{let n=ex(e),i=(this.children.get(n)||new tM(null)).set(eR(e),t),r=this.children.insert(n,i);return new tM(this.value,r)}}remove(e){if(eM(e))return this.children.isEmpty()?new tM(null):new tM(null,this.children);{let t=ex(e),n=this.children.get(t);if(!n)return this;{let i;let r=n.remove(eR(e));return(i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty())?new tM(null):new tM(this.value,i)}}}get(e){if(eM(e))return this.value;{let t=ex(e),n=this.children.get(t);return n?n.get(eR(e)):null}}setTree(e,t){if(eM(e))return t;{let n;let i=ex(e),r=(this.children.get(i)||new tM(null)).setTree(eR(e),t);return n=r.isEmpty()?this.children.remove(i):this.children.insert(i,r),new tM(this.value,n)}}fold(e){return this.fold_(eN(),e)}fold_(e,t){let n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(eO(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,eN(),t)}findOnPath_(e,t,n){let i=!!this.value&&n(t,this.value);if(i)return i;if(eM(e))return null;{let i=ex(e),r=this.children.get(i);return r?r.findOnPath_(eR(e),eO(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,eN(),t)}foreachOnPath_(e,t,n){if(eM(e))return this;{this.value&&n(t,this.value);let i=ex(e),r=this.children.get(i);return r?r.foreachOnPath_(eR(e),eO(t,i),n):new tM(null)}}foreach(e){this.foreach_(eN(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(eO(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.writeTree_=e}static empty(){return new tF(new tM(null))}}function tq(e,t,n){if(eM(t))return new tF(new tM(n));{let i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){let r=i.path,s=i.value,o=eF(r,t);return s=s.updateChild(o,n),new tF(e.writeTree_.set(r,s))}{let i=new tM(n);return new tF(e.writeTree_.setTree(t,i))}}}function tW(e,t,n){let i=e;return X(n,(e,n)=>{i=tq(i,eO(t,e),n)}),i}function tB(e,t){return eM(t)?tF.empty():new tF(e.writeTree_.setTree(t,new tM(null)))}function tU(e,t){return null!=tj(e,t)}function tj(e,t){let n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(eF(n.path,t)):null}function tH(e){let t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(e4,(e,n)=>{t.push(new eV(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new eV(e,n.value))}),t}function tz(e,t){if(eM(t))return e;{let n=tj(e,t);return new tF(null!=n?new tM(n):e.writeTree_.subtree(t))}}function tV(e){return e.writeTree_.isEmpty()}function t$(e,t){return function e(t,n,i){if(null!=n.value)return i.updateChild(t,n.value);{let r=null;return n.children.inorderTraversal((n,s)=>{".priority"===n?((0,v.assert)(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):i=e(eO(t,n),s,i)}),i.getChild(t).isEmpty()||null===r||(i=i.updateChild(eO(t,".priority"),r)),i}}(eN(),e.writeTree_,t)}function tY(e){return e.visible}function tK(e,t,n){let i=tF.empty();for(let r=0;r<e.length;++r){let s=e[r];if(t(s)){let e;let t=s.path;if(s.snap)eW(n,t)?i=tq(i,e=eF(n,t),s.snap):eW(t,n)&&(e=eF(t,n),i=tq(i,eN(),s.snap.getChild(e)));else if(s.children){if(eW(n,t))i=tW(i,e=eF(n,t),s.children);else if(eW(t,n)){if(eM(e=eF(t,n)))i=tW(i,eN(),s.children);else{let t=(0,v.safeGet)(s.children,ex(e));if(t){let n=t.getChild(eR(e));i=tq(i,eN(),n)}}}}else throw(0,v.assertionError)("WriteRecord should have .snap or .children")}}return i}function tG(e,t,n,i,r){if(i||r){let s=tz(e.visibleWrites,t);return!r&&tV(s)?n:r||null!=n||tU(s,eN())?t$(tK(e.allWrites,function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(eW(e.path,t)||eW(t,e.path))},t),n||e7.EMPTY_NODE):null}{let i=tj(e.visibleWrites,t);if(null!=i)return i;{let i=tz(e.visibleWrites,t);return tV(i)?n:null!=n||tU(i,eN())?t$(i,n||e7.EMPTY_NODE):null}}}function tQ(e,t,n,i){return tG(e.writeTree,e.treePath,t,n,i)}function tJ(e,t){return function(e,t,n){let i=e7.EMPTY_NODE,r=tj(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(e4,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(!n)return tH(tz(e.visibleWrites,t)).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i;{let r=tz(e.visibleWrites,t);return n.forEachChild(e4,(e,t)=>{let n=t$(tz(r,new ek(e)),t);i=i.updateImmediateChild(e,n)}),tH(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}(e.writeTree,e.treePath,t)}function tX(e,t,n,i){return function(e,t,n,i,r){(0,v.assert)(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=eO(t,n);if(tU(e.visibleWrites,s))return null;{let t=tz(e.visibleWrites,s);return tV(t)?r.getChild(n):t$(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function tZ(e,t){var n,i;return n=e.writeTree,i=eO(e.treePath,t),tj(n.visibleWrites,i)}function t0(e,t,n){return function(e,t,n,i){let r=eO(t,n),s=tj(e.visibleWrites,r);return null!=s?s:i.isCompleteForChild(n)?t$(tz(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function t1(e,t){return t2(eO(e.treePath,t),e.writeTree)}function t2(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,n=e.childName;(0,v.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,v.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");let i=this.changeMap.get(n);if(i){let r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,ta(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,to(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ts(n,e.snapshotNode));else if("child_changed"===t&&"child_changed"===r)this.changeMap.set(n,ta(n,e.snapshotNode,i.oldSnap));else throw(0,v.assertionError)("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}let t6=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class t3{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let t=null!=this.optCompleteServerCache_?new tk(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return t0(this.writes_,e,t)}}getChildAfterChild(e,t,n){var i;let r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:tL(this.viewCache_),s=function(e,t,n,i,r,s,o){let a;let l=tz(e.visibleWrites,t),h=tj(l,eN());if(null!=h)a=h;else{if(null==n)return[];a=t$(l,n)}if((a=a.withIndex(o)).isEmpty()||a.isLeafNode())return[];{let e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),r=n.getNext();for(;r&&e.length<1;)0!==t(r,i)&&e.push(r),r=n.getNext();return e}}((i=this.writes_).writeTree,i.treePath,r,t,0,n,e);return 0===s.length?null:s[0]}}function t5(e,t,n,i,r,s){let o=t.eventCache;if(null!=tZ(i,n))return t;{let a,l;if(eM(n)){if((0,v.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){let n=tL(t),r=tJ(i,n instanceof e7?n:e7.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{let n=tQ(i,tL(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}}else{let h=ex(n);if(".priority"===h){(0,v.assert)(1===eP(n),"Can't have a priority with additional path components");let r=o.getNode(),s=tX(i,n,r,l=t.serverCache.getNode());a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{let u;let c=eR(n);if(o.isCompleteForChild(h)){l=t.serverCache.getNode();let e=tX(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else u=t0(i,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,c,r,s):o.getNode()}}return tR(t,a,o.isFullyInitialized()||eM(n),e.filter.filtersNodes())}}function t8(e,t,n,i,r,s,o,a){let l;let h=t.serverCache,u=o?e.filter:e.filter.getIndexedFilter();if(eM(n))l=u.updateFullNode(h.getNode(),i,null);else if(u.filtersNodes()&&!h.isFiltered()){let e=h.getNode().updateChild(n,i);l=u.updateFullNode(h.getNode(),e,null)}else{let e=ex(n);if(!h.isCompleteForPath(n)&&eP(n)>1)return t;let r=eR(n),s=h.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(h.getNode(),s):u.updateChild(h.getNode(),e,s,r,t6,null)}let c=tD(t,l,h.isFullyInitialized()||eM(n),u.filtersNodes()),d=new t3(r,c,s);return t5(e,c,n,r,d,a)}function t9(e,t,n,i,r,s,o){let a,l;let h=t.eventCache,u=new t3(r,t,s);if(eM(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),a=tR(t,l,!0,e.filter.filtersNodes());else{let r=ex(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),a=tR(t,l,h.isFullyInitialized(),h.isFiltered());else{let s;let l=eR(n),c=h.getNode().getImmediateChild(r);if(eM(l))s=i;else{let e=u.getCompleteChild(r);s=null!=e?".priority"===eD(l)&&e.getChild(eL(l)).isEmpty()?e:e.updateChild(l,i):e7.EMPTY_NODE}a=c.equals(s)?t:tR(t,e.filter.updateChild(h.getNode(),r,s,l,u,o),h.isFullyInitialized(),e.filter.filtersNodes())}}return a}function t7(e,t){return e.eventCache.isCompleteForChild(t)}function ne(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function nt(e,t,n,i,r,s,o,a){let l;if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h=t;l=eM(n)?i:new tM(null).setTree(n,i);let u=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(u.hasChild(n)){let l=ne(e,t.serverCache.getNode().getImmediateChild(n),i);h=t8(e,h,new ek(n),l,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{let l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){let l=ne(e,t.serverCache.getNode().getImmediateChild(n),i);h=t8(e,h,new ek(n),l,r,s,o,a)}}),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let n=this.query_._queryParams,i=new tl(n.getIndex()),r=n.loadsAllData()?new tl(n.getIndex()):n.hasLimit()?new tu(n):new th(n);this.processor_={filter:r};let s=t.serverCache,o=t.eventCache,a=i.updateFullNode(e7.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(e7.EMPTY_NODE,o.getNode(),null),h=new tk(a,s.isFullyInitialized(),i.filtersNodes()),u=new tk(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=tP(u,h),this.eventGenerator_=new tN(this.query_)}get query(){return this.query_}}function ni(e){return 0===e.eventRegistrations_.length}function nr(e,t,n){let i=[];if(n){(0,v.assert)(null==t,"A cancel should cancel all event registrations.");let r=e.query._path;e.eventRegistrations_.forEach(e=>{let t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){let r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ns(e,t,n,i){var r,s;t.type===g.MERGE&&null!==t.source.queryId&&((0,v.assert)(tL(e.viewCache_),"We should always have a full cache before handling merges"),(0,v.assert)(tA(e.viewCache_),"Missing event cache, even though we have a server cache"));let o=e.viewCache_,a=function(e,t,n,i,r){let s,o;let a=new t4;if(n.type===g.OVERWRITE)n.source.fromUser?s=t9(e,t,n.path,n.snap,i,r,a):((0,v.assert)(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered()&&!eM(n.path),s=t8(e,t,n.path,n.snap,i,r,o,a));else if(n.type===g.MERGE){var l,h;let u;n.source.fromUser?(l=n.path,h=n.children,u=t,h.foreach((n,s)=>{let o=eO(l,n);t7(t,ex(o))&&(u=t9(e,u,o,s,i,r,a))}),h.foreach((n,s)=>{let o=eO(l,n);t7(t,ex(o))||(u=t9(e,u,o,s,i,r,a))}),s=u):((0,v.assert)(n.source.fromServer,"Unknown source."),o=n.source.tagged||t.serverCache.isFiltered(),s=nt(e,t,n.path,n.children,i,r,o,a))}else if(n.type===g.ACK_USER_WRITE)s=n.revert?function(e,t,n,i,r,s){let o;if(null!=tZ(i,n))return t;{let a;let l=new t3(i,t,r),h=t.eventCache.getNode();if(eM(n)||".priority"===ex(n)){let n;if(t.serverCache.isFullyInitialized())n=tQ(i,tL(t));else{let e=t.serverCache.getNode();(0,v.assert)(e instanceof e7,"serverChildren would be complete if leaf node"),n=tJ(i,e)}a=e.filter.updateFullNode(h,n,s)}else{let r=ex(n),u=t0(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=h.getImmediateChild(r)),(a=null!=u?e.filter.updateChild(h,r,u,eR(n),l,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(h,r,e7.EMPTY_NODE,eR(n),l,s):h).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=tQ(i,tL(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,o,s))}return o=t.serverCache.isFullyInitialized()||null!=tZ(i,eN()),tR(t,a,o,e.filter.filtersNodes())}}(e,t,n.path,i,r,a):function(e,t,n,i,r,s,o){if(null!=tZ(r,n))return t;let a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(eM(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return t8(e,t,n,l.getNode().getChild(n),r,s,a,o);if(!eM(n))return t;{let i=new tM(null);return l.getNode().forEachChild(eK,(e,t)=>{i=i.set(new ek(e),t)}),nt(e,t,n,i,r,s,a,o)}}{let h=new tM(null);return i.foreach((e,t)=>{let i=eO(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))}),nt(e,t,n,h,r,s,a,o)}}(e,t,n.path,n.affectedTree,i,r,a);else if(n.type===g.LISTEN_COMPLETE)s=function(e,t,n,i,r){let s=t.serverCache;return t5(e,tD(t,s.getNode(),s.isFullyInitialized()||eM(n),s.isFiltered()),n,i,t6,r)}(e,t,n.path,i,a);else throw(0,v.assertionError)("Unknown operation type: "+n.type);let u=a.getChanges();return function(e,t,n){let i=t.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=tA(e);!(n.length>0)&&e.eventCache.isFullyInitialized()&&(!r||i.getNode().equals(s))&&i.getNode().getPriority().equals(s.getPriority())||n.push(tr(tA(t)))}}(t,s,u),{viewCache:s,changes:u}}(e.processor_,o,t,n,i);return r=e.processor_,s=a.viewCache,(0,v.assert)(s.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),(0,v.assert)(s.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),(0,v.assert)(a.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,no(e,a.changes,a.viewCache.eventCache.getNode(),null)}function no(e,t,n,i){let r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){let r=[],s=[];return t.forEach(t=>{if("child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)){var n;s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))}}),tx(e,r,"child_removed",t,i,n),tx(e,r,"child_added",t,i,n),tx(e,r,"child_moved",s,i,n),tx(e,r,"child_changed",t,i,n),tx(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}class na{constructor(){this.views=new Map}}function nl(e,t,n,i){let r=t.source.queryId;if(null!==r){let s=e.views.get(r);return(0,v.assert)(null!=s,"SyncTree gave us an op for an invalid query."),ns(s,t,n,i)}{let r=[];for(let s of e.views.values())r=r.concat(ns(s,t,n,i));return r}}function nh(e,t,n,i,r){let s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=tQ(n,r?i:null),s=!1;return e?s=!0:(e=i instanceof e7?tJ(n,i):e7.EMPTY_NODE,s=!1),new nn(t,tP(new tk(e,s,!1),new tk(i,r,!1)))}return o}function nu(e){let t=[];for(let n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function nc(e,t){let n=null;for(let i of e.views.values())n=n||function(e,t){let n=tL(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!eM(t)&&!n.getImmediateChild(ex(t)).isEmpty())?n.getChild(t):null}(i,t);return n}function nd(e,t){if(t._queryParams.loadsAllData())return n_(e);{let n=t._queryIdentifier;return e.views.get(n)}}function np(e){return null!=n_(e)}function n_(e){for(let t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}let nf=1;class ng{constructor(e){this.listenProvider_=e,this.syncPointTree_=new tM(null),this.pendingWriteTree_={visibleWrites:tF.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nm(e,t,n=!1){let i=function(e,t){for(let n=0;n<e.allWrites.length;n++){let i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(!function(e,t){let n=e.allWrites.findIndex(e=>e.writeId===t);(0,v.assert)(n>=0,"removeWrite called with nonexistent writeId.");let i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){let t=e.allWrites[o];t.visible&&(o>=n&&function(e,t){if(e.snap)return eW(e.path,t);for(let n in e.children)if(e.children.hasOwnProperty(n)&&eW(eO(e.path,n),t))return!0;return!1}(t,i.path)?r=!1:eW(i.path,t.path)&&(s=!0)),o--}return!!r&&(s?(e.visibleWrites=tK(e.allWrites,tY,eN()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1):i.snap?e.visibleWrites=tB(e.visibleWrites,i.path):X(i.children,t=>{e.visibleWrites=tB(e.visibleWrites,eO(i.path,t))}),!0)}(e.pendingWriteTree_,t))return[];{let t=new tM(null);return null!=i.snap?t=t.set(eN(),!0):X(i.children,e=>{t=t.set(new ek(e),!0)}),nw(e,new tI(i.path,t,n))}}function ny(e,t,n){return nw(e,new tT(tb(),t,n))}function nv(e,t,n,i,r=!1){let s=t._path,o=e.syncPointTree_.get(s),a=[];if(o&&("default"===t._queryIdentifier||null!=nd(o,t))){let l=function(e,t,n,i){let r=t._queryIdentifier,s=[],o=[],a=np(e);if("default"===r)for(let[t,r]of e.views.entries())o=o.concat(nr(r,n,i)),ni(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{let t=e.views.get(r);t&&(o=o.concat(nr(t,n,i)),ni(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!np(e)&&s.push(new((0,v.assert)(d,"Reference.ts has not been loaded"),d)(t._repo,t._path)),{removed:s,events:o}}(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));let h=l.removed;if(a=l.events,!r){let n=-1!==h.findIndex(e=>e._queryParams.loadsAllData()),r=e.syncPointTree_.findOnPath(s,(e,t)=>np(t));if(n&&!r){let t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){let n=t.fold((e,t,n)=>{if(t&&np(t))return[n_(t)];{let e=[];return t&&(e=nu(t)),X(n,(t,n)=>{e=e.concat(n)}),e}});for(let t=0;t<n.length;++t){let i=n[t],r=i.query,s=nI(e,i);e.listenProvider_.startListening(nx(r),nE(e,r),s.hashFn,s.onComplete)}}}r||!(h.length>0)||i||(n?e.listenProvider_.stopListening(nx(t),null):h.forEach(t=>{let n=e.queryToTagMap.get(nT(t));e.listenProvider_.stopListening(nx(t),n)}))}(function(e,t){for(let n=0;n<t.length;++n){let i=t[n];if(!i._queryParams.loadsAllData()){let t=nT(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}})(e,h)}return a}function nC(e,t,n,i){let r=nS(e,i);if(null==r)return[];{let i=nk(r),s=i.path,o=i.queryId,a=eF(s,t);return nN(e,s,new tT(tw(o),a,n))}}function nb(e,t,n){let i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{let i=nc(n,eF(e,t));if(i)return i});return tG(i,t,r,n,!0)}function nw(e,t){var n;return function e(t,n,i,r){if(eM(t.path))return function e(t,n,i,r){let s=n.get(eN());null==i&&null!=s&&(i=nc(s,eN()));let o=[];return n.children.inorderTraversal((n,s)=>{let a=i?i.getImmediateChild(n):null,l=t1(r,n),h=t.operationForChild(n);h&&(o=o.concat(e(h,s,a,l)))}),s&&(o=o.concat(nl(s,t,r,i))),o}(t,n,i,r);{let s=n.get(eN());null==i&&null!=s&&(i=nc(s,eN()));let o=[],a=ex(t.path),l=t.operationForChild(a),h=n.children.get(a);if(h&&l){let t=i?i.getImmediateChild(a):null,n=t1(r,a);o=o.concat(e(l,h,t,n))}return s&&(o=o.concat(nl(s,t,r,i))),o}}(t,e.syncPointTree_,null,(n=e.pendingWriteTree_,t2(eN(),n)))}function nI(e,t){let n=t.query,i=nE(e,n);return{hashFn:()=>(t.viewCache_.serverCache.getNode()||e7.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t){var r;return i?function(e,t,n){let i=nS(e,n);if(!i)return[];{let n=nk(i),r=n.path,s=n.queryId,o=eF(r,t);return nN(e,r,new tE(tw(s),o))}}(e,n._path,i):(r=n._path,nw(e,new tE(tb(),r)))}{let i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");let i=Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return nv(e,n,null,i)}}}}function nE(e,t){let n=nT(t);return e.queryToTagMap.get(n)}function nT(e){return e._path.toString()+"$"+e._queryIdentifier}function nS(e,t){return e.tagToQueryMap.get(t)}function nk(e){let t=e.indexOf("$");return(0,v.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ek(e.substr(0,t))}}function nN(e,t,n){let i=e.syncPointTree_.get(t);return(0,v.assert)(i,"Missing sync point for query tag that we're tracking"),nl(i,n,t2(t,e.pendingWriteTree_),null)}function nx(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,v.assert)(p,"Reference.ts has not been loaded"),p)(e._repo,e._path):e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this.node_=e}getImmediateChild(e){return new nP(this.node_.getImmediateChild(e))}node(){return this.node_}}class nR{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=eO(this.path_,e);return new nR(this.syncTree_,t)}node(){return nb(this.syncTree_,this.path_)}}let nD=function(e,t,n){return e&&"object"==typeof e?((0,v.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"])?nA(e[".sv"],t,n):"object"==typeof e[".sv"]?nL(e[".sv"],t):void(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2)):e},nA=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,v.assert)(!1,"Unexpected server value: "+e)},nL=function(e,t,n){e.hasOwnProperty("increment")||(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));let i=e.increment;"number"!=typeof i&&(0,v.assert)(!1,"Unexpected increment value: "+i);let r=t.node();if((0,v.assert)(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let s=r.getValue();return"number"!=typeof s?i:s+i};function nO(e,t,n){let i;let r=nD(e.getPriority().val(),t.getImmediateChild(".priority"),n);if(!e.isLeafNode())return i=e,r!==e.getPriority().val()&&(i=i.updatePriority(new e2(r))),e.forEachChild(e4,(e,r)=>{let s=nO(r,t.getImmediateChild(e),n);s!==r&&(i=i.updateImmediateChild(e,s))}),i;{let i=nD(e.getValue(),t,n);return i!==e.getValue()||r!==e.getPriority().val()?new e2(i,tt(r)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nF(e,t){let n=t instanceof ek?t:new ek(t),i=e,r=ex(n);for(;null!==r;){let e=(0,v.safeGet)(i.node.children,r)||{children:{},childCount:0};i=new nM(r,i,e),r=ex(n=eR(n))}return i}function nq(e){return e.node.value}function nW(e,t){e.node.value=t,function e(t){null!==t.parent&&function(t,n,i){let r=void 0===nq(i)&&!nB(i),s=(0,v.contains)(t.node.children,n);r&&s?(delete t.node.children[n],t.node.childCount--,e(t)):r||s||(t.node.children[n]=i.node,t.node.childCount++,e(t))}(t.parent,t.name,t)}(e)}function nB(e){return e.node.childCount>0}function nU(e,t){X(e.node.children,(n,i)=>{t(new nM(n,e,i))})}function nj(e){return new ek(null===e.parent?e.name:nj(e.parent)+"/"+e.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nH=/[\[\].#$\/\u0000-\u001F\u007F]/,nz=/[\[\].#$\u0000-\u001F\u007F]/,nV=function(e){return"string"==typeof e&&0!==e.length&&!nH.test(e)},n$=function(e){return"string"==typeof e&&0!==e.length&&!nz.test(e)},nY=function(e,t,n){let i=n instanceof ek?new eB(n,e):n;if(void 0===t)throw Error(e+"contains undefined "+ej(i));if("function"==typeof t)throw Error(e+"contains a function "+ej(i)+" with contents = "+t.toString());if(H(t))throw Error(e+"contains "+t.toString()+" "+ej(i));if("string"==typeof t&&t.length>10485760/3&&(0,v.stringLength)(t)>10485760)throw Error(e+"contains a string greater than 10485760 utf8 bytes "+ej(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(X(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!nV(t)))throw Error(e+" contains an invalid key ("+t+") "+ej(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(t),i.byteLength_+=(0,v.stringLength)(t),eU(i),nY(e,s,i),function(e){let t=e.parts_.pop();e.byteLength_-=(0,v.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)}),n&&r)throw Error(e+' contains ".value" child '+ej(i)+" in addition to actual children.")}},nK=function(e,t,n,i){if((!i||void 0!==n)&&!n$(n))throw Error((0,v.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},nG=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),nK(e,t,n,i)},nQ=function(e,t){var n;let i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!nV(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&((n=i)&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),!n$(n)))throw Error((0,v.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nX(e,t,n){(function(e,t){let n=null;for(let i=0;i<t.length;i++){let r=t[i],s=r.getPath();null===n||eq(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)})(e,n),function(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){let r=e.eventLists_[i];r&&(t(r.path)?(function(e){for(let t=0;t<e.events.length;t++){let n=e.events[t];if(null!==n){e.events[t]=null;let i=n.getEventRunner();L&&F("event: "+n.toString()),en(i)}}}(e.eventLists_[i]),e.eventLists_[i]=null):n=!1)}n&&(e.eventLists_=[]),e.recursionDepth_--}(e,e=>eW(e,t)||eW(t,e))}class nZ{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nJ,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tg(),this.transactionQueueTree_=new nM,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function n0(e){var t;return(t=t={timestamp:function(e){let t=e.infoData_.getNode(new ek(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}(e)}).timestamp=t.timestamp||new Date().getTime(),t}function n1(e,t,n,i,r){e.dataUpdateCount++;let s=new ek(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r){if(i){let t=(0,v.map)(n,e=>tt(e));o=function(e,t,n,i){let r=nS(e,i);if(!r)return[];{let i=nk(r),s=i.path,o=i.queryId,a=eF(s,t),l=tM.fromObject(n);return nN(e,s,new tS(tw(o),a,l))}}(e.serverSyncTree_,s,t,r)}else{let t=tt(n);o=nC(e.serverSyncTree_,s,t,r)}}else if(i){let t=(0,v.map)(n,e=>tt(e));o=function(e,t,n){let i=tM.fromObject(n);return nw(e,new tS(tb(),t,i))}(e.serverSyncTree_,s,t)}else{let t=tt(n);o=ny(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=n5(e,s)),nX(e.eventQueue_,a,o)}function n2(e,t){n4(e,"connected",t),!1===t&&function(e){n6(e,"onDisconnectEvents");let t=n0(e),n=tg();tm(e.onDisconnect_,eN(),(i,r)=>{let s=nO(r,new nR(e.serverSyncTree_,i),t);!function e(t,n,i){if(eM(n))t.value=i,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(n,i);else{let r=ex(n);t.children.has(r)||t.children.set(r,tg()),e(t.children.get(r),n=eR(n),i)}}(n,i,s)});let i=[];tm(n,eN(),(t,n)=>{i=i.concat(ny(e.serverSyncTree_,t,n));let r=function(e,t){let n=nj(n8(e,t)),i=nF(e.transactionQueueTree_,t);return function(e,t,n){let i=e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,t=>{ie(e,t)}),ie(e,i),function e(t,n,i,r){i&&!r&&n(t),nU(t,t=>{e(t,n,!0,r)}),i&&r&&n(t)}(i,t=>{ie(e,t)}),n}(e,t);n5(e,r)}),e.onDisconnect_=tg(),nX(e.eventQueue_,eN(),i)}(e)}function n4(e,t,n){let i=new ek("/.info/"+t),r=tt(n);e.infoData_.updateSnapshot(i,r);let s=ny(e.infoSyncTree_,i,r);nX(e.eventQueue_,i,s)}function n6(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),F(n,...t)}function n3(e,t,n){return nb(e.serverSyncTree_,t,n)||e7.EMPTY_NODE}function n5(e,t){let n=n8(e,t),i=nj(n),r=n9(e,n);return function(e,t,n){if(0===t.length)return;let i=[],r=[],s=t.filter(e=>0===e.status).map(e=>e.currentWriteId);for(let o=0;o<t.length;o++){let a=t[o],l=eF(n,a.path),h=!1,u;if((0,v.assert)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===a.status)h=!0,u=a.abortReason,r=r.concat(nm(e.serverSyncTree_,a.currentWriteId,!0));else if(0===a.status){if(a.retryCount>=25)h=!0,u="maxretry",r=r.concat(nm(e.serverSyncTree_,a.currentWriteId,!0));else{let n=n3(e,a.path,s);a.currentInputSnapshot=n;let i=t[o].update(n.val());if(void 0!==i){nY("transaction failed: Data returned ",i,a.path);let t=tt(i);"object"==typeof i&&null!=i&&(0,v.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));let o=a.currentWriteId,l=n0(e),h=nO(t,new nP(n),l);a.currentOutputSnapshotRaw=t,a.currentOutputSnapshotResolved=h,a.currentWriteId=e.nextWriteId_++,s.splice(s.indexOf(o),1),r=(r=r.concat(function(e,t,n,i,r){var s,o;return(s=e.pendingWriteTree_,o=r,(0,v.assert)(i>s.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),s.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(s.visibleWrites=tq(s.visibleWrites,t,n)),s.lastWriteId=i,r)?nw(e,new tT(tC(),t,n)):[]}(e.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally))).concat(nm(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(nm(e.serverSyncTree_,a.currentWriteId,!0))}}nX(e.eventQueue_,n,r),r=[],h&&(t[o].status=2,setTimeout(t[o].unwatcher,Math.floor(0)),t[o].onComplete&&("nodata"===u?i.push(()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot)):i.push(()=>t[o].onComplete(Error(u),!1,null))))}n7(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)en(i[e]);(function e(t,n=t.transactionQueueTree_){if(n||n7(t,n),nq(n)){let i=n9(t,n);(0,v.assert)(i.length>0,"Sending zero length transaction queue"),i.every(e=>0===e.status)&&function(t,n,i){let r=n3(t,n,i.map(e=>e.currentWriteId)),s=r,o=r.hash();for(let e=0;e<i.length;e++){let t=i[e];(0,v.assert)(0===t.status,"tryToSendTransactionQueue_: items in queue should all be run."),t.status=1,t.retryCount++;let r=eF(n,t.path);s=s.updateChild(r,t.currentOutputSnapshotRaw)}let a=s.val(!0);t.server_.put(n.toString(),a,r=>{n6(t,"transaction put response",{path:n.toString(),status:r});let s=[];if("ok"===r){let r=[];for(let e=0;e<i.length;e++)i[e].status=2,s=s.concat(nm(t.serverSyncTree_,i[e].currentWriteId)),i[e].onComplete&&r.push(()=>i[e].onComplete(null,!0,i[e].currentOutputSnapshotResolved)),i[e].unwatcher();n7(t,nF(t.transactionQueueTree_,n)),e(t,t.transactionQueueTree_),nX(t.eventQueue_,n,s);for(let e=0;e<r.length;e++)en(r[e])}else{if("datastale"===r)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{U("transaction at "+n.toString()+" failed: "+r);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=r}n5(t,n)}},o)}(t,nj(n),i)}else nB(n)&&nU(n,n=>{e(t,n)})})(e,e.transactionQueueTree_)}(e,r,i),i}function n8(e,t){let n;let i=e.transactionQueueTree_;for(n=ex(t);null!==n&&void 0===nq(i);)i=nF(i,n),n=ex(t=eR(t));return i}function n9(e,t){let n=[];return function e(t,n,i){let r=nq(n);if(r)for(let e=0;e<r.length;e++)i.push(r[e]);nU(n,n=>{e(t,n,i)})}(e,t,n),n.sort((e,t)=>e.order-t.order),n}function n7(e,t){let n=nq(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nW(t,n.length>0?n:void 0)}nU(t,t=>{n7(e,t)})}function ie(e,t){let n=nq(t);if(n){let i=[],r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,v.assert)(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):((0,v.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(nm(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,Error("set"),!1,null))));-1===s?nW(t,void 0):n.length=s+1,nX(e.eventQueue_,nj(t),r);for(let e=0;e<i.length;e++)en(i[e])}}let it=function(e,t){let n=ii(e),i=n.namespace;"firebase.com"===n.domain&&B(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||B("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||j();let r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new eu(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ek(n.pathString)}},ii=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let u=e.indexOf("/");-1===u&&(u=e.length);let c=e.indexOf("?");-1===c&&(c=e.length),t=e.substring(0,Math.min(u,c)),u<c&&(r=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="",n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,c)));let d=function(e){let t={};for(let n of("?"===e.charAt(0)&&(e=e.substring(1)),e.split("&"))){if(0===n.length)continue;let i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):U(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,c)));(h=t.indexOf(":"))>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;let p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{let e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){let e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,v.stringify)(this.snapshot.exportVal())}}class is{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,v.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return eM(this._path)?null:eD(this._path)}get ref(){return new il(this._repo,this._path)}get _queryIdentifier(){let e=Q(tp(this._queryParams));return"{}"===e?"default":e}get _queryObject(){return tp(this._queryParams)}isEqual(e){if(!((e=(0,v.getModularInstance)(e))instanceof ia))return!1;let t=this._repo===e._repo,n=eq(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class il extends ia{constructor(e,t){super(e,t,new tc,!1)}get parent(){let e=eL(this._path);return null===e?null:new il(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ih{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new ek(e),n=ic(this.ref,e);return new ih(this._node.getChild(t),n,e4)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(t,n)=>e(new ih(n,ic(this.ref,t),e4)))}hasChild(e){let t=new ek(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function iu(e,t){return(e=(0,v.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?ic(e._root,t):e._root}function ic(e,t){return null===ex((e=(0,v.getModularInstance)(e))._path)?nG("child","path",t,!1):nK("child","path",t,!1),new il(e._repo,eO(e._path,t))}function id(e){e=(0,v.getModularInstance)(e);let t=new ip(new io(()=>{}));return(function(e,t,n){let i=function(e,t){var n;let i=t._path,r=null;e.syncPointTree_.foreachOnPath(i,(e,t)=>{let n=eF(e,i);r=r||nc(t,n)});let s=e.syncPointTree_.get(i);s?r=r||nc(s,eN()):(s=new na,e.syncPointTree_=e.syncPointTree_.set(i,s));let o=null!=r,a=o?new tk(r,!0,!1):null,l=(n=e.pendingWriteTree_,t2(t._path,n));return tA(nh(s,t,l,o?a.getNode():e7.EMPTY_NODE,o).viewCache_)}(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then(i=>{let r;let s=tt(i).withIndex(t._queryParams.getIndex());if(function(e,t,n,i=!1){let r;let s=t._path,o=null,a=!1;e.syncPointTree_.foreachOnPath(s,(e,t)=>{let n=eF(e,s);o=o||nc(t,n),a=a||np(t)});let l=e.syncPointTree_.get(s);l?(a=a||np(l),o=o||nc(l,eN())):(l=new na,e.syncPointTree_=e.syncPointTree_.set(s,l)),null!=o?r=!0:(r=!1,o=e7.EMPTY_NODE,e.syncPointTree_.subtree(s).foreachChild((e,t)=>{let n=nc(t,eN());n&&(o=o.updateImmediateChild(e,n))}));let h=null!=nd(l,t);if(!h&&!t._queryParams.loadsAllData()){let n=nT(t);(0,v.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");let i=nf++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=function(e,t,n,i,r,s){let o=nh(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){let n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(e4,(e,t)=>{i.push(ts(e,t))}),n.isFullyInitialized()&&i.push(tr(n.getNode())),no(e,i,n.getNode(),t)}(o,n)}(l,t,n,t2(s,e.pendingWriteTree_),o,r);if(!h&&!a&&!i){let n=nd(l,t);u=u.concat(function(e,t,n){let i=t._path,r=nE(e,t),s=nI(e,n),o=e.listenProvider_.startListening(nx(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)(0,v.assert)(!np(a.value),"If we're adding a query, it shouldn't be shadowed");else{let t=a.fold((e,t,n)=>{if(!eM(e)&&t&&np(t))return[n_(t).query];{let e=[];return t&&(e=e.concat(nu(t).map(e=>e.query))),X(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){let i=t[n];e.listenProvider_.stopListening(nx(i),nE(e,i))}}return o}(e,t,n))}}(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=ny(e.serverSyncTree_,t._path,s);else{let n=nE(e.serverSyncTree_,t);r=nC(e.serverSyncTree_,t._path,s,n)}return nX(e.eventQueue_,t._path,r),nv(e.serverSyncTree_,t,n,null,!0),s},n=>(n6(e,"get for query "+(0,v.stringify)(t)+" failed: "+n),Promise.reject(Error(n))))})(e._repo,e,t).then(t=>new ih(t,new il(e._repo,e._path),e._queryParams.getIndex()))}class ip{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){let n=t._queryParams.getIndex();return new ir("value",this,new ih(e.snapshotNode,new il(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new is(this,e,t):null}matches(e){return e instanceof ip&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}(0,v.assert)(!d,"__referenceConstructor has already been defined"),d=il,(0,v.assert)(!p,"__referenceConstructor has already been defined"),p=il;let i_={};class ig{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(e,t,n){if(e.stats_=ef(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new t_(e.repoInfo_,(t,n,i,r)=>{n1(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>n2(e,!0),0);else{if(null!=n){if("object"!=typeof n)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,v.stringify)(n)}catch(e){throw Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ez(e.repoInfo_,t,(t,n,i,r)=>{n1(e,t,n,i,r)},t=>{n2(e,t)},t=>{X(t,(t,n)=>{n4(e,t,n)})},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=function(e,t){let n=e.toString();return e_[n]||(e_[n]=t()),e_[n]}(e.repoInfo_,()=>new tv(e.stats_,e.server_)),e.infoData_=new tf,e.infoSyncTree_=new ng({startListening:(t,n,i,r)=>{let s=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ny(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),n4(e,"connected",!1),e.serverSyncTree_=new ng({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{let s=r(n,i);nX(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new il(this._repo,eN())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(e,t){let n=i_[t];n&&n[e.key]===e||B(`Database ${t}(${e.repoInfo_}) has already been deleted.`),e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt"),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&B("Cannot call "+e+" on a deleted database.")}}function im(e=(0,m.getApp)(),t){let n=(0,m._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){let e=(0,v.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,i={}){var r;let s;(e=(0,v.getModularInstance)(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&B("Cannot call useEmulator() after instance has already been initialized.");let o=e._repoInternal;o.repoInfo_.nodeAdmin?(i.mockUserToken&&B('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new eo(eo.OWNER)):i.mockUserToken&&(s=new eo("string"==typeof i.mockUserToken?i.mockUserToken:(0,v.createMockUserToken)(i.mockUserToken,e.app.options.projectId))),r=s,o.repoInfo_=new eu(`${t}:${n}`,!1,o.repoInfo_.namespace,o.repoInfo_.webSocketOnly,o.repoInfo_.nodeAdmin,o.repoInfo_.persistenceKey,o.repoInfo_.includeNamespaceInQueryParams,!0),r&&(o.authTokenProvider_=r)}(n,...e)}return n}ez.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ez.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},E=m.SDK_VERSION,(0,m._registerComponent)(new(0,y.Component)("database",(e,{instanceIdentifier:t})=>(function(e,t,n,i,r){var s,o;let a,l,h,u,c=i||e.options.databaseURL;void 0===c&&(e.options.projectId||B("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",e.options.projectId),c=`${e.options.projectId}-default-rtdb.firebaseio.com`);let d=it(c,void 0),p=d.repoInfo;void 0!==b&&b.env&&(h=b.env.FIREBASE_DATABASE_EMULATOR_HOST),h?(u=!0,p=(d=it(c=`http://${h}?ns=${p.namespace}`,void 0)).repoInfo):u=!d.repoInfo.secure;let _=new es(e.name,e.options,t);return nQ("Invalid Firebase Database URL",d),eM(d.path)||B("Database URL must point to the root of a Firebase Database (not including a child path)."),new ig((s=p,o=new er(e.name,n),(a=i_[e.name])||(a={},i_[e.name]=a),(l=a[s.toURLString()])&&B("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new nZ(s,!1,_,o),a[s.toURLString()]=l,l),e)})(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t),"PUBLIC").setMultipleInstances(!0)),(0,m.registerVersion)(w,I,void 0),(0,m.registerVersion)(w,I,"esm2017")}),document.querySelector(".scroll_up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),(()=>{let e={openMenuBtn:document.querySelector(".header-menu__open"),closeMenuBtn:document.querySelector(".header-menu__close"),siteNavBtn:document.querySelectorAll(".site-nav__btn"),menu:document.querySelector(".burger"),body:document.querySelector("body")};function t(){e.menu.classList.toggle("open"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),window.innerWidth>=1280||e.siteNavBtn.forEach(e=>{e.addEventListener("click",function(){this.parentElement.nextElementSibling.classList.toggle("open")})})})(),document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".header"),t=window.location.pathname;"/"===t||"/index.html"===t?e.classList.add("home-header"):e.classList.add("other-page-header")}),document.addEventListener("DOMContentLoaded",function(){function e(){let e=document.querySelector(".site-nav__list"),t=document.querySelector(".more-menu__list"),n=document.querySelector(".more-menu__btn"),i=window.innerWidth;if(t.innerHTML="",i>=1280&&i<1440){for(;3<=e.children.length;){let n=e.children[3];n.classList.add("more-menu__item");let i=n.querySelector("a");i&&i.classList.add("more-menu__link"),t.appendChild(n)}return}if(i>=1440&&i<1660){for(;4<=e.children.length;){let n=e.children[4];n.classList.add("more-menu__item");let i=n.querySelector("a");i&&i.classList.add("more-menu__link"),t.appendChild(n)}return}if(i>=1660&&i<1924){for(;5<=e.children.length;){let n=e.children[5];n.classList.add("more-menu__item");let i=n.querySelector("a");i&&i.classList.add("more-menu__link"),t.appendChild(n)}return}n.style.display="none"}e(),window.addEventListener("resize",e)});var o={};o=JSON.parse('{"/about-us":[{"title":"Головна","path":"./"},{"title":"Про компанію","path":"./about"}],"/services":[{"title":"Головна","path":"./"},{"title":"Послуги","path":"./services"}],"/pr":[{"title":"Головна","path":"./"},{"title":"Послуги","path":"./services"},{"title":"PR","path":"./pr"}],"/design":[{"title":"Головна","path":"./"},{"title":"Послуги","path":"./services"},{"title":"Design","path":"./design"}],"/smm":[{"title":"Головна","path":"./"},{"title":"Послуги","path":"./services"},{"title":"SMM","path":"./smm"}],"/digital":[{"title":"Головна","path":"./"},{"title":"Послуги","path":"./services"},{"title":"Digital","path":"./digital"}],"/vacancies":[{"title":"Головна","path":"./"},{"title":"Вакансії","path":"./vacancies"}],"/testimonials":[{"title":"Головна","path":"./"},{"title":"Відгуки про нас","path":"./testimonials"}]}'),r("fkNhc");var a=r("MjY8E");r("cokon");var l=r("eA2L7");!function(){var e;let t=window.location.pathname,n=((e=o)&&e.__esModule?e.default:e)[t];if(!n)return;let i=document.querySelector(".breadcrumb>ul"),r=n.map(e=>`<li key="${e.path}"><a href="${e.path}">${e.title}</a></li>`).join("");i.innerHTML=r}();let h=(0,a.initializeApp)({apiKey:"AIzaSyBSPg3ScFTycIB2Unf4f7_QQ1IuNa-HR0c",authDomain:"addway-ecaed.firebaseapp.com",projectId:"addway-ecaed",storageBucket:"addway-ecaed.appspot.com",messagingSenderId:"717099611397",appId:"1:717099611397:web:3b59ab65c185e28625b36c",measurementId:"G-70MT7EQJME",databaseURL:"https://addway-ecaed-default-rtdb.europe-west1.firebasedatabase.app"}),u=(0,l.getDatabase)(h);(0,l.get)((0,l.ref)(u,"botConfig")).then(e=>{if(e.exists()){let t=e.val();document.body.setAttribute("data-bot-token",t.botToken),document.body.setAttribute("data-chat-id",t.chatId)}else console.log("No data available")}).catch(e=>{console.error(e)})}();
//# sourceMappingURL=about-us.24742122.js.map
