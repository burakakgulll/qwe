var upnName=["UPN 50","UPN 65","UPN 80","UPN 100","UPN 120","UPN 140","UPN 160","UPN 180","UPN 200","UPN 220","UPN 240","UPN 260","UPN 280","UPN 300","UPN 320","UPN 350","UPN 380","UPN 400"];
var upnM=[0.0548379,0.0695529,0.0847584,0.103986,0.131454,0.15696,0.184428,0.21582,0.248193,0.288414,0.325692,0.371799,0.410058,0.453222,0.583695,0.594486,0.619011,0.704358];
var upnD=[50,65,80,100,120,140,160,180,200,220,240,260,280,300,320,350,380,400];
var upnH = [22,35,48,66,84,100,118,136,154,170,188,204,220,236,250,286,316,328];
var upnBf = [38,42,45,50,55,60,65,70,75,80,85,90,95,100,100,100,102,110];
var upnTf = [7,7.5,8,8.5,9,10,10.5,11,11.5,12.5,13,14,15,16,17.5,16,16,18];
var upnTw = [5,5.5,6,6,7,7,7.5,8,8.5,9,9.5,10,10,10,14,14,13.5,14];
var upnR = [7,7.5,8,8.5,9,10,10.5,11,11.5,12.5,13,14,15,16,17.5,16,16,18];
var upnH0 = [43,57.5,72,91.5,111,130,149.5,169,188.5,207.5,227,246,265,284,302.5,334,364,382];
var upnLf = [5.42857142857143,5.6,5.625,5.88235294117647,6.11111111111111,6,6.19047619047619,6.36363636363636,6.52173913043478,6.4,6.53846153846154,6.42857142857143,6.33333333333333,6.25,5.71428571428571,6.25,6.375,6.11111111111111];
var upnLw = [4.4,6.36363636363636,8,11,12,14.2857142857143,15.7333333333333,17,18.1176470588235,18.8888888888889,19.7894736842105,20.4,22,23.6,17.8571428571429,20.4285714285714,23.4074074074074,23.4285714285714];
var upnIts = [12.4918307276925,13.7749693669091,14.9329503726866,16.3103868307121,18.0234206363926,19.7186936681142,21.3212500358733,23.0485910387966,24.6292148341395,26.3100533245855,27.9351084207653,29.592994888567,31.335718098754,33.0631266397864,33.3994674853261,33.1395721235952,33.8087977658664,36.6134432500132];
var upnA = [712,903,1100,1350,1700,2040,2400,2800,3220,3740,4230,4830,5330,5880,7580,7730,8040,9150];
var upnIx = [264000,575000,1060000,2060000,3640000,6050000,9250000,13500000,19100000,26900000,36000000,48200000,62800000,80300000,108700000,128400000,157600000,203500000];
var upnIy = [91200,141000,194000,293000,432000,627000,853000,1140000,1480000,1970000,2480000,3170000,3990000,4950000,5970000,5700000,6150000,8460000];
var upnWex = [10600,17700,26500,41200,60700,86400,116000,150000,191000,245000,300000,371000,448000,535000,679000,734000,829000,1020000];
var upnWey = [3750,5070,6360,8490,11120,14800,18300,22400,27000,33600,39600,47700,57200,67800,80600,75000,78700,102000];
var upnWpx = [13100,21700,32200,49000,72600,103000,138000,179000,228000,292000,358000,442000,532000,632000,826000,918000,1010000,1240000];
var upnWpy = [6780,9380,11900,16200,21200,28300,35200,42900,51800,64100,75700,91600,109000,130000,152000,143000,148000,190000];
var upnRx = [19.2,25.2,31,39.1,46.2,54.5,62.1,69.5,77,84.8,92.2,99.9,109,117,121,129,140,149];
var upnRy = [11.3,12.5,13.3,14.7,15.9,17.5,18.9,20.2,21.4,23,24.2,25.6,27.4,29,28.1,27.2,27.7,30.4];
var upnJ = [11200,16100,22000,28100,41500,56800,73900,95500,119000,160000,197000,255000,310000,374000,667000,612000,591000,816000];
var upnCw = [30000000,80000000,180000000,410000000,900000000,1800000000,3260000000,5570000000,9070000000,14600000000,22100000000,33300000000,48500000000,69100000000,96100000000,114000000000,146000000000,221000000000];

function upn_m(request) {

function check(value) {
return value==request;
};

function upn_(name) {
var i = upnName.findIndex(name);
return upnM[i];
};

return upn_(check);

};

function upn_d(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnD[i];
    };
    
    return upn_(check);
    
};

function upn_h(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnH[i];
    };
    
    return upn_(check);
    
};

function upn_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnBf[i];
    };
    
    return upn_(check);
    
};

function upn_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnTf[i];
    };
    
    return upn_(check);
    
};

function upn_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnTw[i];
    };
    
    return upn_(check);
    
};

function upn_r(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnR[i];
    };
    
    return upn_(check);
    
};

function upn_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnH0[i];
    };
    
    return upn_(check);
    
};

function upn_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnLf[i];
    };
    
    return upn_(check);
    
};

function upn_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnLw[i];
    };
    
    return upn_(check);
    
};

function upn_its(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnIts[i];
    };
    
    return upn_(check);
    
};

function upn_a(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnA[i];
    };
    
    return upn_(check);
    
};

function upn_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnIx[i];
    };
    
    return upn_(check);
    
};

function upn_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnIy[i];
    };
    
    return upn_(check);
    
};

function upn_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnWex[i];
    };
    
    return upn_(check);
    
};

function upn_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnWey[i];
    };
    
    return upn_(check);
    
};

function upn_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnWpx[i];
    };
    
    return upn_(check);
    
};

function upn_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnWpy[i];
    };
    
    return upn_(check);
    
};

function upn_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnRx[i];
    };
    
    return upn_(check);
    
};

function upn_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnRy[i];
    };
    
    return upn_(check);
    
};

function upn_j(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnJ[i];
    };
    
    return upn_(check);
    
};

function upn_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function upn_(name) {
    var i = upnName.findIndex(name);
    return upnCw[i];
    };
    
    return upn_(check);
    
};