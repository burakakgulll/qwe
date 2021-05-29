var hemName=["HEM 100","HEM 120","HEM 140","HEM 160","HEM 180","HEM 200","HEM 220","HEM 240","HEM 260","HEM 280","HEM 300","HEM 320","HEM 340","HEM 360","HEM 400","HEM 450","HEM 500","HEM 550","HEM 600","HEM 650","HEM 700","HEM 800","HEM 900","HEM 1000"];
var hemM=[0.410058,0.511101,0.619992,0.747522,0.872109,1.01043,1.14777,1.54017,1.68732,1.85409,2.33478,2.41326,2.43288,2.4525,2.51136,2.58003,2.6487,2.72718,2.79585,2.87433,2.95281,3.10977,3.26673,3.42369];
var hemD=[120,140,160,180,200,220,240,270,290,310,340,359,377,395,432,478,524,572,620,668,716,814,910,1008];
var hemH = [56,74,92,104,122,134,152,164,177,196,208,225,243,261,298,344,390,438,486,534,582,674,770,868];
var hemBf = [106,126,146,166,186,206,226,248,268,288,310,309,309,308,307,307,306,306,305,305,304,303,302,302];
var hemTf = [20,21,22,23,24,25,26,32,32.5,33,39,40,40,40,40,40,40,40,40,40,40,40,40,40];
var hemTw = [12,12.5,13,14,14.5,15,15.5,18,18,18.5,21,21,21,21,21,21,21,21,21,21,21,21,21,21];
var hemR = [12,12,12,15,15,18,18,21,24,24,27,27,27,27,27,27,27,27,27,27,27,30,30,30];
var hemH0 = [100,119,138,157,176,195,214,238,257.5,277,301,319,337,355,392,438,484,532,580,628,676,774,870,968];
var hemLf = [2.65,3,3.31818181818182,3.60869565217391,3.875,4.12,4.34615384615385,3.875,4.12307692307692,4.36363636363636,3.97435897435897,3.8625,3.8625,3.85,3.8375,3.8375,3.825,3.825,3.8125,3.8125,3.8,3.7875,3.775,3.775];
var hemLw = [4.66666666666667,5.92,7.07692307692308,7.42857142857143,8.41379310344828,8.93333333333333,9.80645161290323,9.11111111111111,9.83333333333333,10.5945945945946,9.90476190476191,10.7142857142857,11.5714285714286,12.4285714285714,14.1904761904762,16.3809523809524,18.5714285714286,20.8571428571429,23.1428571428571,25.4285714285714,27.7142857142857,32.0952380952381,36.6666666666667,41.3333333333333];
var hemIts = [29.8219527360974,35.3576100108509,40.8966676426336,46.4661571430797,52.0036907111571,57.6224733750716,63.164217621598,69.4703719146502,75.1093084577666,80.6148965754862,86.9108680534329,86.4879298398702,86.2814557743266,85.7883048788659,85.0836126782852,84.5741348613787,83.7861508476783,83.2735805525095,82.4833155875207,81.9893638648012,81.2178440585261,80.0265383497962,78.8290045423307,77.9296304134672];
var hemA = [5320,6640,8060,9710,11330,13130,14940,19960,21960,24020,30310,31200,31580,31880,32580,33540,34430,35440,36370,37370,38300,40430,42360,44420];
var hemIx = [11430000,20180000,32910000,50980000,74830000,106400000,146000000,242900000,313100000,395500000,592000000,681300000,763700000,848700000,1041000000,1315000000,1619000000,1980000000,2374000000,2817000000,3293000000,4426000000,5704000000,7223000000];
var hemIy = [3992000,7028000,11440000,17590000,25800000,36510000,50120000,81530000,104500000,131600000,194000000,197100000,197100000,195200000,193400000,193400000,191500000,191600000,189800000,189800000,188000000,186300000,184500000,184600000];
var hemWex = [190400,288200,411400,566500,748300,967400,1217000,1799000,2159000,2551000,3482000,3796000,4052000,4297000,4820000,5501000,6180000,6923000,7660000,8433000,9198000,10870000,12540000,14330000];
var hemWey = [75310,111600,156800,211900,277400,354500,443500,657500,779700,914100,1252000,1276000,1276000,1268000,1260000,1260000,1252000,1252000,1244000,1245000,1240000,1230000,1220000,1222000];
var hemWpx = [235800,350600,493800,674600,883400,1135000,1419000,2117000,2524000,2966000,4078000,4435000,4718000,4989000,5571000,6331000,7094000,7933000,8772000,9657000,10540000,12490000,14440000,16570000];
var hemWpy = [116300,171600,240500,325500,425200,543200,678600,1006000,1192000,1397000,1913000,1951000,1953000,1942000,1934000,1939000,1932000,1937000,1930000,1936000,1929000,1930000,1929000,1940000];
var hemRx = [46.3,55.1,63.9,72.5,81.3,90,98.9,110.3,119.4,128.3,139.8,147.8,155.5,163.2,178.8,198,216.9,236.4,255.5,274.5,293.2,330.9,367,403.2];
var hemRy = [27.4,32.5,37.7,42.6,47.7,52.7,57.9,63.9,69,74,80,79.5,79,78.3,77,75.9,74.6,73.5,72.2,71.3,70.1,67.9,66,64.5];
var hemJ = [682100,916600,1200000,1624000,2033000,2594000,3153000,6279000,7190000,8073000,14080000,15010000,15060000,15070000,15150000,15290000,15390000,15540000,15640000,15790000,15890000,16460000,16710000,17010000];
var hemCw = [9930000000,24790000000,54330000000,108100000000,199300000000,346300000000,572700000000,1152000000000,1728000000000,2520000000000,4386000000000,5004000000000,5584000000000,6137000000000,7410000000000,9251000000000,11190000000000,13520000000000,15910000000000,18650000000000,21400000000000,27780000000000,34750000000000,43020000000000];

function hem_m(request) {

function check(value) {
return value==request;
};

function hem_(name) {
var i = hemName.findIndex(name);
return hemM[i];
};

return hem_(check);

};

function hem_d(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemD[i];
    };
    
    return hem_(check);
    
};

function hem_h(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemH[i];
    };
    
    return hem_(check);
    
};

function hem_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemBf[i];
    };
    
    return hem_(check);
    
};

function hem_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemTf[i];
    };
    
    return hem_(check);
    
};

function hem_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemTw[i];
    };
    
    return hem_(check);
    
};

function hem_r(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemR[i];
    };
    
    return hem_(check);
    
};

function hem_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemH0[i];
    };
    
    return hem_(check);
    
};

function hem_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemLf[i];
    };
    
    return hem_(check);
    
};

function hem_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemLw[i];
    };
    
    return hem_(check);
    
};

function hem_its(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemIts[i];
    };
    
    return hem_(check);
    
};

function hem_a(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemA[i];
    };
    
    return hem_(check);
    
};

function hem_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemIx[i];
    };
    
    return hem_(check);
    
};

function hem_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemIy[i];
    };
    
    return hem_(check);
    
};

function hem_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemWex[i];
    };
    
    return hem_(check);
    
};

function hem_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemWey[i];
    };
    
    return hem_(check);
    
};

function hem_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemWpx[i];
    };
    
    return hem_(check);
    
};

function hem_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemWpy[i];
    };
    
    return hem_(check);
    
};

function hem_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemRx[i];
    };
    
    return hem_(check);
    
};

function hem_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemRy[i];
    };
    
    return hem_(check);
    
};

function hem_j(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemJ[i];
    };
    
    return hem_(check);
    
};

function hem_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function hem_(name) {
    var i = hemName.findIndex(name);
    return hemCw[i];
    };
    
    return hem_(check);
    
};