/**
 * Created by liyang on 15/12/5.
 */
var Layer = function () {
    this.dns = 'http://api.lawgard.cn';
};

Layer.prototype = {
    getparams: function () {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    getdata: function (url, _data, callback) {
        $.ajax({
            url: url,
            data: _data,
            dataType: "jsonp",
            success: callback,
            error: function () {
                console.error("error")
            }
        })
    },
    getuser: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getuser', _data, function (data) {
            cb.callback(data);
        });
    },
    getuserinfo: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getuserinfo', _data, function (data) {
            cb.callback(data);
        });
    },
    getlawyerinfo: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getlawyerinfo', _data, function (data) {
            cb.callback(data);
        });
    },
    getmyinvcode: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getmyinvcode', _data, function (data) {
            cb.callback(data);
        });
    },
    getcourselist: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getcourselist', _data, function (data) {
            cb.callback(data);
        });
    },
    getopencourselist: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/opencourselist', _data, function (data) {
            cb.callback(data);
        });
    },
    getactivitylist: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getnewslist', _data, function (data) {
            cb.callback(data);
        });
    },
    updateuserinfo: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/updateuserinfo', _data, function (data) {
            cb.callback(data);
        });
    },
    updatelawyerinfo: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/updatelawyerinfo', _data, function (data) {
            cb.callback(data);
        });
    },
    savecourserecord: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/savecourserecord', _data, function (data) {
            cb.callback(data);
        });
    },
    savepayrecord: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/savepayrecord', _data, function (data) {
            cb.callback(data);
        });
    },
    submitpay: function (_data, cb) {
        this.getdata(this.dns + '/v1/wxpay/doPay', _data, function (data) {
            cb.callback(data);
        });
    },
    getvipcourse: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getvipcourse', _data, function (data) {
            cb.callback(data);
        });
    },
    getvipcourseurl: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getvipcourseurl', _data, function (data) {
            cb.callback(data);
        });
    },
    getsmallcourse: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getsmallcourse', _data, function (data) {
            cb.callback(data);
        });
    },
    getordercourseurl: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getordercourseurl', _data, function (data) {
            cb.callback(data);
        });
    },
    getuserpoints: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getuserpoints', _data, function (data) {
            cb.callback(data);
        });
    },
    submitordercourse: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/submitordercourse', _data, function (data) {
            cb.callback(data);
        });
    },
    getselcode: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getselcode', _data, function (data) {
            cb.callback(data);
        });
    },
    getbooks: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getbooks', _data, function (data) {
            cb.callback(data);
        });
    },
    submitorderbook: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/submitorderbook', _data, function (data) {
            cb.callback(data);
        });
    },
    getorderbookurl: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getorderbookurl', _data, function (data) {
            cb.callback(data);
        });
    },
    savebookrecord: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/savebookrecord', _data, function (data) {
            cb.callback(data);
        });
    },
    getshopuserflag: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/getshopuserflag', _data, function (data) {
            cb.callback(data);
        });
    },
    buyuserflag: function (_data, cb) {
        this.getdata(this.dns + '/v1/user/buyuserflag', _data, function (data) {
            cb.callback(data);
        });
    },
    getorderbookimg: function (_data, cb) {
        this.getdata(this.dns + '/v1/course/getorderbookimg', _data, function (data) {
            cb.callback(data);
        });
    }
};