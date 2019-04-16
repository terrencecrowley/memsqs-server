/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@terrencecrowley/memsqs/dist/memsqs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@terrencecrowley/memsqs/dist/memsqs.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/all.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./queue */ "./lib/queue.ts"));
__export(__webpack_require__(/*! ./client */ "./lib/client.ts"));
__export(__webpack_require__(/*! ./server */ "./lib/server.ts"));


/***/ }),

/***/ "./lib/client.ts":
/*!***********************!*\
  !*** ./lib/client.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Node libraries
const http = __webpack_require__(/*! http */ "http");
const url = __webpack_require__(/*! url */ "url");
// Project libraries
const Util = __webpack_require__(/*! @terrencecrowley/util */ "./node_modules/@terrencecrowley/util/dist/util.js");
// Local libraries
const Q = __webpack_require__(/*! ./queue */ "./lib/queue.ts");
class SQSRequest {
    constructor(httpoptions, data, cb) {
        this.httpoptions = httpoptions;
        this.data = data;
        this.cb = cb;
        this.body = '';
        this.request = http.request(this.httpoptions, (res) => {
            this.response = res;
            this.statusCode = res.statusCode;
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                this.body += chunk;
            });
            res.on('error', (err) => {
                this.onError(err);
            });
            res.on('end', () => {
                if (this.statusCode == 200) {
                    this.json = JSON.parse(this.body);
                    this.cb(this.json.error, this.json.result);
                }
                else
                    this.onError(`error status: ${this.statusCode}`);
            });
        });
        this.request.on('error', (err) => {
            this.onError(err);
        });
        this.request.setHeader('Content-Type', 'application/json; charset=UTF-8');
        this.request.write(JSON.stringify(this.data));
        this.request.end();
    }
    onError(err) {
        if (this.cb) {
            this.cb(err, null);
            this.cb = null;
        }
    }
}
class SQSClient {
    constructor(urlstring = Q.DefaultServerUrl) {
        this.targeturl = new url.URL(urlstring);
        this.owner = Util.createGuid();
        this.queues = {};
        this.agent = new http.Agent({ keepAlive: true });
        this.httpoptions = {
            protocol: this.targeturl.protocol,
            host: this.targeturl.hostname,
            port: this.targeturl.port ? this.targeturl.port : Q.DefaultPort,
            agent: this.agent,
            method: 'POST',
            path: '/',
        };
    }
    queue(queueid) {
        let q = this.queues[queueid];
        if (q === undefined) {
            q = new SQSQueue(this, queueid);
            this.queues[queueid] = q;
        }
        return q;
    }
    setOptions(queueid, options, cb) {
        new SQSRequest(this.httpoptions, {
            queueid: queueid,
            api: 'setoptions',
            data: options
        }, cb);
    }
    send(queueid, m, cb) {
        new SQSRequest(this.httpoptions, {
            queueid: queueid,
            api: 'send',
            data: m
        }, cb);
    }
    remove(queueid, m, cb) {
        new SQSRequest(this.httpoptions, {
            queueid: queueid,
            api: 'remove',
            data: m
        }, cb);
    }
    receive(queueid, cb) {
        new SQSRequest(this.httpoptions, {
            queueid: queueid,
            api: 'receive',
            owner: this.owner,
        }, cb);
    }
}
exports.SQSClient = SQSClient;
class SQSQueue {
    constructor(client, queueid) {
        this.client = client;
        this.queueid = queueid;
    }
    setOptions(options, cb) {
        this.client.setOptions(this.queueid, options, cb);
    }
    send(m, cb) {
        this.client.send(this.queueid, m, cb);
    }
    remove(m, cb) {
        this.client.remove(this.queueid, m, cb);
    }
    receive(cb) {
        this.client.receive(this.queueid, cb);
    }
}
exports.SQSQueue = SQSQueue;


/***/ }),

/***/ "./lib/orderedlist.ts":
/*!****************************!*\
  !*** ./lib/orderedlist.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class OrderedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.next = 0;
        this.index = {};
    }
    isempty() {
        return this.head == null;
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.index = {};
    }
    insert(key, value) {
        if (this.index[key] !== undefined)
            return false;
        let e = { prev: this.tail, next: null, seqno: this.next++, value: value };
        this.tail = e;
        if (this.head == null)
            this.head = e;
        this.index[key] = e;
        return true;
    }
    remove(key) {
        let e = this.index[key];
        if (e === undefined)
            return false;
        if (e === this.tail)
            this.tail = e.prev;
        else
            e.next.prev = e.prev;
        if (e === this.head)
            this.head = e.next;
        else
            e.prev.next = e.next;
        delete this.index[key];
        return true;
    }
    forEach(cb) {
        for (let p = this.head; p && cb(p.value); p = p.next)
            continue;
    }
}
exports.OrderedList = OrderedList;


/***/ }),

/***/ "./lib/queue.ts":
/*!**********************!*\
  !*** ./lib/queue.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Project libraries
const Util = __webpack_require__(/*! @terrencecrowley/util */ "./node_modules/@terrencecrowley/util/dist/util.js");
// Local libraries
const OL = __webpack_require__(/*! ./orderedlist */ "./lib/orderedlist.ts");
exports.DefaultPort = 8785;
exports.DefaultServerUrl = `http://localhost:${exports.DefaultPort}`;
const DefaultVisibility = { owner: '', deadline: 0, index: null };
const DefaultQueueOptions = {
    timeoutVisibility: 30000,
    timeoutDead: 1800000,
    receiveLimit: 10,
    longpoll: true,
};
class QQueue {
    constructor(id, options) {
        this.id = id;
        this.options = options ? options : Util.shallowCopy(DefaultQueueOptions);
        this.groups = {};
        this.nHeld = 0;
    }
    setOptions(options) {
        this.options = Util.shallowCopy(options);
    }
    _group(id) {
        let g = this.groups[id];
        if (g === undefined) {
            g = { id: id, messages: new OL.OrderedList(), visibility: Util.shallowCopy(DefaultVisibility) };
            this.groups[g.id] = g;
        }
        return g;
    }
    forEachGroup(cb) {
        for (let id in this.groups)
            if (this.groups.hasOwnProperty(id))
                if (!cb(this.groups[id]))
                    break;
    }
    forEachMessageHolder(g, cb) {
        g.messages.forEach(cb);
    }
    checkTimeout() {
        let msNow = Util.NowMS();
        // Clear visibility and cull empty groups
        this.forEachGroup((g) => {
            // Clear deadline if passed
            if (g.visibility.deadline && msNow > g.visibility.deadline) {
                g.messages.forEach((h) => {
                    h.pending = false;
                    return true; // continue
                });
                g.visibility = Util.shallowCopy(DefaultVisibility);
            }
            // Cull group if no messages and no deadline.
            // Note that not culling group means that we can build up list of groups (during deadline)
            // if many groups are used (like one-per-message which is standard if no grouping is needed).
            if (g.visibility.owner === '' && g.messages.isempty())
                delete this.groups[g.id];
            return true; // continue
        });
        // Cull messages past deadline
        this.forEachGroup((g) => {
            g.messages.forEach((h) => {
                if (h.deadline < msNow)
                    this.removeFromGroup(g, h.m);
                return true; // continue
            });
            // Cull group if no messages and no deadline
            if (g.visibility.owner === '' && g.messages.isempty())
                delete this.groups[g.id];
            return true; // continue
        });
    }
    send(m) {
        this.nHeld++;
        let g = this._group(m.groupid);
        return g.messages.insert(m.messageid, { m: m, pending: false, deadline: Util.NowMS() + this.options.timeoutDead });
    }
    receive(owner, result) {
        let msNow = Util.NowMS();
        let deadline = msNow + this.options.timeoutVisibility;
        // First prioritize returning non-pending messages for same owner
        this.forEachGroup((g) => {
            if (g.visibility.owner === owner) {
                g.messages.forEach((h) => {
                    if (!h.pending) {
                        h.pending = true;
                        g.visibility.index[h.m.messageid] = true;
                        g.visibility.deadline = deadline;
                        result.push(h.m);
                        if (result.length >= this.options.receiveLimit)
                            return false;
                    }
                    return true;
                });
            }
            return true;
        });
        // Now go through and add messages for any unclaimed message groups
        if (result.length >= this.options.receiveLimit)
            return;
        this.forEachGroup((g) => {
            if (g.visibility.owner === '') {
                g.messages.forEach((h) => {
                    if (!h.pending) {
                        if (g.visibility.owner === '')
                            g.visibility = { owner: owner, deadline: deadline, index: {} };
                        h.pending = true;
                        g.visibility.index[h.m.messageid] = true;
                        result.push(h.m);
                        if (result.length >= this.options.receiveLimit)
                            return false;
                    }
                    return true;
                });
            }
            return true;
        });
    }
    removeFromGroup(g, m) {
        let result = g.messages.remove(m.messageid);
        delete g.visibility.index[m.messageid];
        if (result)
            this.nHeld--;
        return result;
    }
    remove(m) {
        let g = this._group(m.groupid);
        if (g) {
            let result = this.removeFromGroup(g, m);
            // Comment these lines out to leave visiblity constrained through deadline.
            // (Not completely sure what AWS semantics for SQS is on this point.)
            // The alternative is to force client to send/receive/remove keep-alive messages.
            // if (Util.isEmpty(g.visibility.index))
            // g.visibility = Util.shallowCopy(DefaultVisibility);
            return result;
        }
        else
            return false;
    }
}
class QQueueManager {
    constructor() {
        this.queues = {};
        this.nSent = 0;
        this.nReceived = 0;
        this.nRemoved = 0;
        this.nCulled = 0;
        this.checkTimeout = this.checkTimeout.bind(this);
        setTimeout(this.checkTimeout, 5000);
    }
    _queue(queueid) {
        let q = this.queues[queueid];
        if (q === undefined) {
            q = new QQueue(queueid);
            this.queues[queueid] = q;
        }
        return q;
    }
    checkTimeout() {
        this.forEach((q) => {
            let nHeld = q.nHeld;
            q.checkTimeout();
            this.nCulled += nHeld - q.nHeld;
        });
        setTimeout(this.checkTimeout, 5000);
    }
    forEach(cb) {
        for (let qid in this.queues)
            if (this.queues.hasOwnProperty(qid))
                cb(this.queues[qid]);
    }
    setOptions(queueid, options) {
        this._queue(queueid).setOptions(options);
    }
    isLongpoll(queueid) {
        return this._queue(queueid).options.longpoll;
    }
    send(queueid, m) {
        this.nSent++;
        return this._queue(queueid).send(m);
    }
    receive(queueid, owner, result) {
        this._queue(queueid).receive(owner, result);
        this.nReceived += result.length;
    }
    remove(queueid, m) {
        this.nRemoved++;
        return this._queue(queueid).remove(m);
    }
}
exports.QQueueManager = QQueueManager;


/***/ }),

/***/ "./lib/server.ts":
/*!***********************!*\
  !*** ./lib/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Node libraries
const http = __webpack_require__(/*! http */ "http");
// Local libraries
const Q = __webpack_require__(/*! ./queue */ "./lib/queue.ts");
const LongPollTimeout = 5000;
class SQSServer {
    constructor(port = Q.DefaultPort) {
        this.queuemanager = new Q.QQueueManager();
        this.longpoll = new LongPoll();
        this.port = port;
        this.server = http.createServer();
        this.server.on('request', (req, res) => {
            new OneRequest(this, req, res);
        });
        this.server.on('close', () => {
            this.server = null;
        });
        this.server.on('error', (err) => {
            this.server = null;
        });
        try {
            this.server.listen(this.port);
        }
        catch (err) {
            this.server = null;
        }
    }
    get running() {
        return this.server != null;
    }
    close() {
        if (this.server)
            this.server.close();
    }
}
exports.SQSServer = SQSServer;
class LongPoll {
    constructor() {
        this.requests = [];
        this.tick = this.tick.bind(this);
        setTimeout(this.tick, 1000);
    }
    check() {
        let deadline = (new Date()).getTime();
        for (let i = this.requests.length - 1; i >= 0; i--) {
            let r = this.requests[i];
            if (!r.request.onRetry())
                if (r.deadline < deadline)
                    r.request.onFinish();
            if (r.request.isDone())
                this.requests.splice(i, 1);
        }
    }
    tick() {
        this.check();
        setTimeout(this.tick, 1000);
    }
    add(one) {
        this.requests.push({ deadline: (new Date()).getTime() + LongPollTimeout, request: one });
    }
}
class OneRequest {
    constructor(server, req, res) {
        this.server = server;
        this.req = req;
        this.res = res;
        this.data = '';
        this.json = null;
        this.body = { statuscode: 0 };
        req.on('data', (s) => { this.data += s; });
        req.on('end', () => { this.onDone(); });
        req.on('error', (err) => { this.onError(); });
    }
    isDone() {
        return this.res == null;
    }
    onRetry() {
        let result = [];
        let qm = this.server.queuemanager;
        qm.receive(this.json.queueid, this.json.owner, result);
        this.body.result = result;
        if (result.length != 0) {
            this.onFinish();
            return true;
        }
        else
            return false;
    }
    onDone() {
        try {
            this.json = JSON.parse(this.data);
            if (this.json.queueid === undefined || this.json.queueid == '' || this.json.api === undefined) {
                this.onError();
                return;
            }
            let qm = this.server.queuemanager;
            switch (this.json.api) {
                case 'setoptions':
                    if (this.json.data === undefined)
                        this.onError();
                    else
                        qm.setOptions(this.json.queueid, this.json.data);
                    break;
                case 'send':
                    if (this.json.data === undefined)
                        this.onError();
                    else if (!qm.send(this.json.queueid, this.json.data))
                        this.onError();
                    else
                        this.server.longpoll.check();
                    break;
                case 'receive':
                    if (this.json.owner === undefined)
                        this.onError();
                    else {
                        let result = [];
                        qm.receive(this.json.queueid, this.json.owner, result);
                        this.body.result = result;
                        if (result.length == 0 && qm.isLongpoll(this.json.queueid)) {
                            this.server.longpoll.add(this);
                            return;
                        }
                    }
                    break;
                case 'remove':
                    if (this.json.data === undefined)
                        this.onError();
                    else if (!qm.remove(this.json.queueid, this.json.data))
                        this.onError();
                    break;
            }
            this.onFinish();
        }
        catch (err) {
            this.onError();
        }
    }
    onError() {
        this.body.statuscode = 1;
        this.body.error = 'failure';
        this.onFinish();
    }
    onFinish() {
        if (this.res) {
            this.res.writeHead(200, { 'Content-Type': 'application/json; charset=UTF-8' });
            this.res.end(JSON.stringify(this.body));
            this.res = null;
        }
    }
}


/***/ }),

/***/ "./node_modules/@terrencecrowley/util/dist/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/@terrencecrowley/util/dist/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/all.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./util */ "./lib/util.ts"));


/***/ }),

/***/ "./lib/util.ts":
/*!*********************!*\
  !*** ./lib/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Now() { return (new Date()).toJSON(); }
exports.Now = Now;
function NowMS() { return (new Date()).getTime(); }
exports.NowMS = NowMS;
function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.createGuid = createGuid;
function _sizeof(a, loops) {
    if (a === null || a === undefined)
        return 0;
    switch (typeof a) {
        default: return 0;
        case 'number': return 8;
        case 'boolean': return 4;
        case 'string': return a.length * 2;
        case 'object':
            {
                if (loops.has(a))
                    return 0;
                else
                    loops.set(a, true);
                let t = 0;
                if (Array.isArray(a)) {
                    for (let i = 0; i < a.length; i++)
                        t += _sizeof(a[i], loops);
                    t += 8; // length
                }
                else if (Buffer.isBuffer(a)) {
                    t = a.length;
                }
                else {
                    for (var key in a)
                        if (a.hasOwnProperty(key)) {
                            t += _sizeof(key, loops); // this is a good estimate of download size, but poor estimate of internal size
                            // because of JS object templating vs. naive hashtables
                            t += _sizeof(a[key], loops);
                        }
                }
                return t;
            }
    }
}
function sizeof(a) {
    let loops = new WeakMap();
    let n = _sizeof(a, loops);
    return n;
}
exports.sizeof = sizeof;
function depthof(a) {
    switch (typeof a) {
        default: return 1;
        case 'number': return 1;
        case 'boolean': return 1;
        case 'string': return 1;
        case 'object':
            {
                let d = 0;
                if (Array.isArray(a))
                    return a.length > 0 ? (1 + depthof(a[0])) : 2; // still return 2 for empty array
                else if (Buffer.isBuffer(a))
                    return 2;
                else {
                    for (var key in a)
                        if (a.hasOwnProperty(key))
                            return 1 + depthof(a[key]);
                    return 2; // or 2 for empty object
                }
            }
    }
}
exports.depthof = depthof;
function isEmpty(o) {
    for (var p in o)
        if (o.hasOwnProperty(p))
            return false;
    return true;
}
exports.isEmpty = isEmpty;
function countKeys(o) {
    if (typeof o !== 'object')
        return -1;
    let count = 0;
    for (let p in o)
        if (o.hasOwnProperty(p))
            count++;
    return count;
}
exports.countKeys = countKeys;
function nthProperty(o, n = 0) {
    for (let p in o)
        if (o.hasOwnProperty(p)) {
            if (n <= 0)
                return o[p];
            n--;
        }
    return undefined;
}
exports.nthProperty = nthProperty;
function partialEqual(o, subset) {
    for (let p in subset)
        if (subset.hasOwnProperty(p))
            if (o[p] !== subset[p])
                return false;
    return true;
}
exports.partialEqual = partialEqual;
function deepEqual(o1, o2) {
    if (typeof o1 !== typeof o2)
        return false;
    if (typeof o1 !== 'object')
        return o1 === o2;
    // Special case array
    if (Array.isArray(o1)) {
        if (!Array.isArray(o2))
            return false;
        if (o1.length != o2.length)
            return false;
        for (let i = 0; i < o1.length; i++)
            if (!deepEqual(o1[i], o2[i]))
                return false;
        return true;
    }
    // Special case object
    for (let p in o1)
        if (o1.hasOwnProperty(p)) {
            if (o2[p] === undefined)
                return false;
            if (!deepEqual(o1[p], o2[p]))
                return false;
        }
    // If any properties in o2 aren't in o1, not equal
    for (let p in o2)
        if (o2.hasOwnProperty(p))
            if (o1[p] === undefined)
                return false;
    return true;
}
exports.deepEqual = deepEqual;
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function prettyDate(d) {
    if (d == null)
        return 'unknown';
    let mmm = Months[d.getMonth()];
    let dd = d.getDate();
    let yyyy = d.getFullYear();
    let hh = d.getHours();
    let m = d.getMinutes();
    let mm = m < 10 ? `0${m}` : String(m);
    let ampm = hh >= 12 ? 'PM' : 'AM';
    if (hh > 12)
        hh -= 12;
    return `${mmm} ${dd}, ${yyyy} at ${hh}:${mm} ${ampm}`;
}
exports.prettyDate = prettyDate;
function textToHtml(sText) {
    let lines = sText.split('\n');
    let aHtml = [];
    aHtml.push('<body>');
    for (let i = 0; i < lines.length; i++)
        aHtml.push(`<div>${lines[i]}&nbsp;</div>`);
    aHtml.push('</body>');
    return aHtml.join('');
}
exports.textToHtml = textToHtml;
function shallowCopy(src) {
    if (src === null)
        return src;
    switch (typeof src) {
        case 'undefined':
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
        default:
            return src;
        case 'object':
            if (Array.isArray(src))
                return src.slice();
            else {
                let copy = {};
                for (var p in src)
                    if (src.hasOwnProperty(p))
                        copy[p] = src[p];
                return copy;
            }
    }
}
exports.shallowCopy = shallowCopy;
function shallowAssign(o1, o2) {
    for (var p in o2)
        if (o2.hasOwnProperty(p))
            o1[p] = o2[p];
    return o1;
}
exports.shallowAssign = shallowAssign;
function deepCopy(src) {
    if (Array.isArray(src)) {
        let dst = [];
        for (let i = 0; i < src.length; i++)
            dst.push(deepCopy(src[i]));
        return dst;
    }
    else if (typeof src === 'object') {
        let dst = {};
        for (var p in src)
            if (src.hasOwnProperty(p))
                dst[p] = deepCopy(src[p]);
        return dst;
    }
    else
        return src;
}
exports.deepCopy = deepCopy;


/***/ })

/******/ });
});


/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! http */ "http");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! url */ "url");

/***/ })

/******/ });
});


/***/ }),

/***/ "./node_modules/@terrencecrowley/util/dist/util.js":
/*!*********************************************************!*\
  !*** ./node_modules/@terrencecrowley/util/dist/util.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/all.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./util */ "./lib/util.ts"));
__export(__webpack_require__(/*! ./countedhash */ "./lib/countedhash.ts"));


/***/ }),

/***/ "./lib/countedhash.ts":
/*!****************************!*\
  !*** ./lib/countedhash.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CountedHash {
    constructor() {
        this.n = 0;
        this.val = {};
    }
    get length() { return this.n; }
    test(id) {
        return id != '' && this.val[id] !== undefined;
    }
    set(id) {
        if (id != '' && !this.test(id)) {
            this.n++;
            this.val[id] = true;
        }
    }
    clear(id) {
        if (this.test(id)) {
            this.n--;
            delete this.val[id];
        }
    }
    empty() {
        this.n = 0;
        this.val = {};
    }
    asArray() {
        let a = [];
        this.forEach(id => { a.push(id); });
        return a;
    }
    asString() {
        for (var id in this.val)
            if (this.val.hasOwnProperty(id))
                return id;
        return '';
    }
    forEach(f) {
        for (var id in this.val)
            if (this.val.hasOwnProperty(id))
                f(id);
    }
}
exports.CountedHash = CountedHash;


/***/ }),

/***/ "./lib/util.ts":
/*!*********************!*\
  !*** ./lib/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Now() { return (new Date()).toJSON(); }
exports.Now = Now;
function NowMS() { return (new Date()).getTime(); }
exports.NowMS = NowMS;
function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.createGuid = createGuid;
function _sizeof(a, loops) {
    if (a === null || a === undefined)
        return 0;
    switch (typeof a) {
        default: return 0;
        case 'number': return 8;
        case 'boolean': return 4;
        case 'string': return a.length * 2;
        case 'object':
            {
                if (loops.has(a))
                    return 0;
                else
                    loops.set(a, true);
                let t = 0;
                if (Array.isArray(a)) {
                    for (let i = 0; i < a.length; i++)
                        t += _sizeof(a[i], loops);
                    t += 8; // length
                }
                else if (Buffer.isBuffer(a)) {
                    t = a.length;
                }
                else {
                    for (var key in a)
                        if (a.hasOwnProperty(key)) {
                            t += _sizeof(key, loops); // this is a good estimate of download size, but poor estimate of internal size
                            // because of JS object templating vs. naive hashtables
                            t += _sizeof(a[key], loops);
                        }
                }
                return t;
            }
    }
}
function sizeof(a) {
    let loops = new WeakMap();
    let n = _sizeof(a, loops);
    return n;
}
exports.sizeof = sizeof;
function depthof(a) {
    switch (typeof a) {
        default: return 1;
        case 'number': return 1;
        case 'boolean': return 1;
        case 'string': return 1;
        case 'object':
            {
                let d = 0;
                if (Array.isArray(a))
                    return a.length > 0 ? (1 + depthof(a[0])) : 2; // still return 2 for empty array
                else if (Buffer.isBuffer(a))
                    return 2;
                else {
                    for (var key in a)
                        if (a.hasOwnProperty(key))
                            return 1 + depthof(a[key]);
                    return 2; // or 2 for empty object
                }
            }
    }
}
exports.depthof = depthof;
function isEmpty(o) {
    for (var p in o)
        if (o.hasOwnProperty(p))
            return false;
    return true;
}
exports.isEmpty = isEmpty;
function countKeys(o) {
    if (typeof o !== 'object')
        return -1;
    let count = 0;
    for (let p in o)
        if (o.hasOwnProperty(p))
            count++;
    return count;
}
exports.countKeys = countKeys;
function nthProperty(o, n = 0) {
    for (let p in o)
        if (o.hasOwnProperty(p)) {
            if (n <= 0)
                return o[p];
            n--;
        }
    return undefined;
}
exports.nthProperty = nthProperty;
function partialEqual(o, subset) {
    for (let p in subset)
        if (subset.hasOwnProperty(p))
            if (o[p] !== subset[p])
                return false;
    return true;
}
exports.partialEqual = partialEqual;
function deepEqual(o1, o2) {
    if (typeof o1 !== typeof o2)
        return false;
    if (typeof o1 !== 'object')
        return o1 === o2;
    // Special case array
    if (Array.isArray(o1)) {
        if (!Array.isArray(o2))
            return false;
        if (o1.length != o2.length)
            return false;
        for (let i = 0; i < o1.length; i++)
            if (!deepEqual(o1[i], o2[i]))
                return false;
        return true;
    }
    // Special case object
    for (let p in o1)
        if (o1.hasOwnProperty(p)) {
            if (o2[p] === undefined)
                return false;
            if (!deepEqual(o1[p], o2[p]))
                return false;
        }
    // If any properties in o2 aren't in o1, not equal
    for (let p in o2)
        if (o2.hasOwnProperty(p))
            if (o1[p] === undefined)
                return false;
    return true;
}
exports.deepEqual = deepEqual;
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function prettyDate(d) {
    if (d == null)
        return 'unknown';
    let mmm = Months[d.getMonth()];
    let dd = d.getDate();
    let yyyy = d.getFullYear();
    let hh = d.getHours();
    let m = d.getMinutes();
    let mm = m < 10 ? `0${m}` : String(m);
    let ampm = hh >= 12 ? 'PM' : 'AM';
    if (hh > 12)
        hh -= 12;
    return `${mmm} ${dd}, ${yyyy} at ${hh}:${mm} ${ampm}`;
}
exports.prettyDate = prettyDate;
function textToHtml(sText) {
    let lines = sText.split('\n');
    let aHtml = [];
    aHtml.push('<body>');
    for (let i = 0; i < lines.length; i++)
        aHtml.push(`<div>${lines[i]}&nbsp;</div>`);
    aHtml.push('</body>');
    return aHtml.join('');
}
exports.textToHtml = textToHtml;
function shallowCopy(src) {
    if (src === null)
        return src;
    switch (typeof src) {
        case 'undefined':
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
        default:
            return src;
        case 'object':
            if (Array.isArray(src))
                return src.slice();
            else {
                let copy = {};
                for (var p in src)
                    if (src.hasOwnProperty(p))
                        copy[p] = src[p];
                return copy;
            }
    }
}
exports.shallowCopy = shallowCopy;
function shallowAssign(o1, o2) {
    for (var p in o2)
        if (o2.hasOwnProperty(p))
            o1[p] = o2[p];
    return o1;
}
exports.shallowAssign = shallowAssign;
function shallowAssignImmutable(o1, o2) {
    // First determine whether o2 changes any properties, if it has, make new instance
    let oNew = o1;
    for (let p in o2)
        if (o2.hasOwnProperty(p)) {
            if (o1[p] != o2[p]) {
                oNew = deepCopy(o1);
                break;
            }
        }
    if (oNew !== o1)
        shallowAssign(oNew, o2);
    return oNew;
}
exports.shallowAssignImmutable = shallowAssignImmutable;
function shallowEqual(o1, o2) {
    if (typeof o1 !== 'object' || typeof o2 !== 'object')
        return o1 === o2;
    if (Array.isArray(o1) && Array.isArray(o2)) {
        if (o1.length != o2.length)
            return false;
        for (let i = 0; i < o1.length; i++)
            if (o1[i] !== o2[i])
                return false;
        return true;
    }
    else {
        let p;
        for (p in o1)
            if (o1.hasOwnProperty(p))
                if (o1[p] !== o2[p])
                    return false;
        for (p in o2)
            if (o2.hasOwnProperty(p))
                if (o1[p] === undefined)
                    return false;
        return true;
    }
}
exports.shallowEqual = shallowEqual;
function deepCopy(src) {
    if (Array.isArray(src)) {
        let dst = [];
        for (let i = 0; i < src.length; i++)
            dst.push(deepCopy(src[i]));
        return dst;
    }
    else if (typeof src === 'object') {
        let dst = {};
        for (var p in src)
            if (src.hasOwnProperty(p))
                dst[p] = deepCopy(src[p]);
        return dst;
    }
    else
        return src;
}
exports.deepCopy = deepCopy;
function precisionRound(n, p) {
    let f = Math.pow(10, p);
    return Math.round(n * f) / f;
}
exports.precisionRound = precisionRound;
function percentString(num, den, precision = 0) {
    if (den == 0)
        return '(-)';
    let p = precisionRound((num / den) * 100, precision);
    return String(p) + '%';
}
exports.percentString = percentString;
function hash(s) {
    let hash = 5381;
    let i = s.length;
    while (i)
        hash = (hash * 33) ^ s.charCodeAt(--i);
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
}
exports.hash = hash;
function hashObject(o) {
    return hash(o ? JSON.stringify(o) : '');
}
exports.hashObject = hashObject;
const HexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function toHex(n) {
    if (n < 0 || n > 255)
        throw ('only 0 to 255 supported now');
    n = Math.floor(n);
    return HexTable[n >> 4] + HexTable[n & 15];
}
exports.toHex = toHex;
function toRGBA(color, alpha) {
    let r;
    let g;
    let b;
    switch (color) {
        case 'white':
            r = 255;
            g = 255;
            b = 255;
            break;
        case 'black':
            r = 0;
            g = 0;
            b = 0;
            break;
        default:
            r = parseInt(color.substr(1, 2), 16);
            g = parseInt(color.substr(3, 2), 16);
            b = parseInt(color.substr(5, 2), 16);
            break;
    }
    return `rgba(${String(r)}, ${String(g)}, ${String(b)}, ${String(alpha)})`;
}
exports.toRGBA = toRGBA;
function toRGBAIntensity(color, intensity, alpha) {
    // for now assume color is black
    let g = precisionRound(255 * intensity, 0);
    return `rgba(${String(g)}, ${String(g)}, ${String(g)}, ${String(alpha)})`;
}
exports.toRGBAIntensity = toRGBAIntensity;
// Geo functions
function distance(x0, y0, x1, y1) {
    return Math.hypot(x0 - x1, y0 - y1);
}
exports.distance = distance;
function deg2rad(num) { return num * Math.PI / 180; }
exports.deg2rad = deg2rad;
function rad2deg(num) { return num / Math.PI * 180; }
exports.rad2deg = rad2deg;
// Restricts lon to range [-180..180]
function wrapLon(lon) {
    let worlds = Math.floor((lon + 180) / 360);
    return lon - (worlds * 360);
}
exports.wrapLon = wrapLon;


/***/ })

/******/ });
});


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util = __webpack_require__(/*! @terrencecrowley/util */ "./node_modules/@terrencecrowley/util/dist/util.js");
const Q = __webpack_require__(/*! @terrencecrowley/memsqs */ "./node_modules/@terrencecrowley/memsqs/dist/memsqs.js");
const Port = Number(process.env.SQS_PORT) || 14141;
const Interval = Number(process.env.SQS_REPORTING_INTERVAL) || 30000;
let server = new Q.SQSServer(Port);
console.log(`SQS Server listening on port ${Port}`);
reportStats();
setInterval(reportStats, Interval);
function reportStats() {
    if (!server.running) {
        console.log('Server not running. Exiting');
        process.exit(1);
    }
    let qm = server.queuemanager;
    console.log(Util.Now());
    console.log(`INFO: ${qm.nSent} messages sent`);
    console.log(`INFO: ${qm.nReceived} messages received`);
    console.log(`INFO: ${qm.nRemoved} messages received`);
    console.log(`INFO: ${qm.nCulled} messages received`);
}


/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map