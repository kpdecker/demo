/* Copyright 2010 Palm, Inc. All rights reserved. */
/**
 * Queue class which implements a blocking queue on a given operation.
 */
var OperationQueue = function() {
    this.complete = false;
    this.waiting = [];
};

OperationQueue.prototype = {
    /**
     * Executes the given callback or adds the callback to the waiting queue if the
     * blocking operation has not yet completed.
     * 
     * @param callback Callback object. May be a function if only responding to the success state
     *        or may be an object with any combination of onsuccess and onfailure members.
     *        Each of these callbacks will have the blocker result passed to them if called from the
     *        queue. If called immediately, no result will be passed
     */
    queue: function(callback) {
        if (this.complete) {
            this._execCallback(this._getCallbackFn(callback));
        } else {
            this.waiting.push(callback);
        }
    },

    /**
     * Resets the state of the operation queue such that the queue is back in
     * a blocking state.
     */
    reset: function() {
        this.complete = false;
    },

    /**
     * Generates the success handler for the blocking operation.
     */
    getSuccessHandler: function(callback) {
        var self = this;
        return function(result) {
            self.complete = "success";
            callback && callback(result);
            self._execWaiting(result);
        };
    },
    /**
     * Generates the failure handler for the blocking operation.
     */
    getFailureHandler: function(callback) {
        var self = this;
        return function(result) {
            self.complete = "failure";
            callback && callback(result);
            self._execWaiting(result);
        };
    },

    _execWaiting: function(result) {
        var len = this.waiting.length;
        for (var i = 0; i < len; i++) {
            this._execCallback(this._getCallbackFn(this.waiting[i]), result);
        }
        this.waiting = [];
    },
    _getCallbackFn: function(callback) {
        if (this.complete === "success") {
            return typeof callback === "function" ? callback : callback.onSuccess;
        } else if (this.complete === "failure") {
            return callback.onFailure;
        }
    },
    _execCallback: function(callbackFn, result) {
        if (callbackFn) {
            setTimeout(function() { callbackFn(result) }, 0);
        }
    }
};