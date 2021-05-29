var hebName=["HEB 100","HEB 120","HEB 140","HEB 160","HEB 180","HEB 200","HEB 220","HEB 240","HEB 260","HEB 280","HEB 300","HEB 320","HEB 340","HEB 360","HEB 400","HEB 450","HEB 500","HEB 550","HEB 600","HEB 650","HEB 700","HEB 800","HEB 900","HEB 1000"];
var hebM=[0.200124,0.261927,0.330597,0.417906,0.502272,0.601353,0.701415,0.816192,0.91233,1.01043,1.14777,1.24587,1.31454,1.39302,1.52055,1.67751,1.83447,1.95219,2.07972,2.20725,2.36421,2.57022,2.85471,3.08034];
var hebD=[100,120,140,160,180,200,220,240,260,280,300,320,340,360,400,450,500,550,600,650,700,800,900,1000];
var hebH = [56,74,92,104,122,134,152,164,177,196,208,225,243,261,298,344,390,438,486,534,582,674,770,868];
var hebBf = [100,120,140,160,180,200,220,240,260,280,300,300,300,300,300,300,300,300,300,300,300,300,300,300];
var hebTf = [10,11,12,13,14,15,16,17,17.5,18,19,20.5,21.5,22.5,24,26,28,29,30,31,32,33,35,36];
var hebTw = [6,6.5,7,8,8.5,9,9.5,10,10,10.5,11,11.5,12,12.5,13.5,14,14.5,15,15.5,16,17,17.5,18.5,19];
var hebR = [12,12,12,15,15,18,18,21,24,24,27,27,27,27,27,27,27,27,27,27,27,30,30,30];
var hebH0 = [90,109,128,147,166,185,204,223,242.5,262,281,299.5,318.5,337.5,376,424,472,521,570,619,668,767,865,964];
var hebLf = [5,5.45454545454545,5.83333333333333,6.15384615384615,6.42857142857143,6.66666666666667,6.875,7.05882352941176,7.42857142857143,7.77777777777778,7.89473684210526,7.31707317073171,6.97674418604651,6.66666666666667,6.25,5.76923076923077,5.35714285714286,5.17241379310345,5,4.83870967741935,4.6875,4.54545454545455,4.28571428571429,4.16666666666667];
var hebLw = [9.33333333333333,11.3846153846154,13.1428571428571,13,14.3529411764706,14.8888888888889,16,16.4,17.7,18.6666666666667,18.9090909090909,19.5652173913043,20.25,20.88,22.0740740740741,24.5714285714286,26.8965517241379,29.2,31.3548387096774,33.375,34.2352941176471,38.5142857142857,41.6216216216216,45.6842105263158];
var hebIts = [28.0916609359684,33.6347126282372,39.1822414082637,44.7213595499958,50.26635744311,55.892966843606,61.4427958354598,67.0717656379245,72.7346800180669,78.2114768466442,83.8433563097357,83.7170652169975,83.5133580264746,83.3119081283685,82.8315366562582,82.4634281786828,82.1180676855389,81.6183926663562,81.1285038551786,80.6480188638363,80.0035557926101,79.1041206285384,78.2106180149243,77.3204246222828];
var hebA = [2600,3400,4300,5430,6530,7810,9100,10600,11840,13140,14910,16130,17090,18060,19780,21800,23860,25410,27000,28630,30640,33420,37130,40000];
var hebIx = [4495000,8644000,15090000,24920000,38310000,56960000,80910000,112600000,149200000,192700000,251700000,308200000,366600000,431900000,576800000,798900000,1072000000,1367000000,1710000000,2106000000,2569000000,3591000000,4941000000,6447000000];
var hebIy = [1673000,3175000,5497000,8892000,13630000,20030000,28430000,39230000,51350000,65950000,85630000,92390000,96900000,101400000,108200000,117200000,126200000,130800000,135300000,139800000,144400000,149000000,158200000,162800000];
var hebWex = [89910,144100,215600,311500,425700,569600,735500,938300,1148000,1376000,1678000,1926000,2156000,2400000,2884000,3551000,4287000,4971000,5701000,6480000,7340000,8977000,10980000,12890000];
var hebWey = [33450,52920,78520,111200,151400,200300,258500,326900,395000,471000,570900,615900,646000,676100,721300,781400,841600,871800,902000,932300,962700,993600,1050000,1085000];
var hebWpx = [104200,165200,245400,354000,481400,642500,827000,1053000,1283000,1534000,1869000,2149000,2408000,2683000,3232000,3982000,4815000,5591000,6425000,7320000,8327000,10230000,12580000,14860000];
var hebWpy = [51420,80970,119800,170000,231000,304800,393900,498400,602200,717600,870100,939100,985700,1032000,1104000,1198000,1292000,1341000,1391000,1441000,1495000,1553000,1658000,1716000];
var hebRx = [41.6,50.4,59.3,67.8,76.6,85.4,94.3,103.1,112.2,121.1,129.9,138.2,146.5,154.6,170.8,191.4,211.9,232,251.7,271.2,289.6,327.8,364.8,401.5];
var hebRy = [25.3,30.6,35.8,40.5,45.7,50.7,55.9,60.8,65.8,70.9,75.8,75.7,75.3,74.9,74,73.3,72.7,71.7,70.8,69.9,68.7,66.8,65.3,63.8];
var hebJ = [92500,138400,200600,312400,421600,592800,765700,1027000,1238000,1437000,1850000,2251000,2572000,2925000,3557000,4405000,5384000,6003000,6672000,7392000,8309000,9460000,11370000,12540000];
var hebCw = [3380000000,9410000000,22480000000,47940000000,93750000000,171100000000,295400000000,486900000000,753700000000,1130000000000,1688000000000,2069000000000,2454000000000,2883000000000,3817000000000,5258000000000,7018000000000,8856000000000,10970000000000,13360000000000,16060000000000,21840000000000,29460000000000,37640000000000];

function heb_m(request) {

function check(value) {
return value==request;
};

function heb_(name) {
var i = hebName.findIndex(name);
return hebM[i];
};

return heb_(check);

};

function heb_d(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebD[i];
    };
    
    return heb_(check);
    
};

function heb_h(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebH[i];
    };
    
    return heb_(check);
    
};

function heb_bf(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebBf[i];
    };
    
    return heb_(check);
    
};

function heb_tf(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebTf[i];
    };
    
    return heb_(check);
    
};

function heb_tw(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebTw[i];
    };
    
    return heb_(check);
    
};

function heb_r(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebR[i];
    };
    
    return heb_(check);
    
};

function heb_h0(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebH0[i];
    };
    
    return heb_(check);
    
};

function heb_lf(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebLf[i];
    };
    
    return heb_(check);
    
};

function heb_lw(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebLw[i];
    };
    
    return heb_(check);
    
};

function heb_its(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebIts[i];
    };
    
    return heb_(check);
    
};

function heb_a(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebA[i];
    };
    
    return heb_(check);
    
};

function heb_ix(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebIx[i];
    };
    
    return heb_(check);
    
};

function heb_iy(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebIy[i];
    };
    
    return heb_(check);
    
};

function heb_wex(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebWex[i];
    };
    
    return heb_(check);
    
};

function heb_wey(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebWey[i];
    };
    
    return heb_(check);
    
};

function heb_wpx(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebWpx[i];
    };
    
    return heb_(check);
    
};

function heb_wpy(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebWpy[i];
    };
    
    return heb_(check);
    
};

function heb_rx(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebRx[i];
    };
    
    return heb_(check);
    
};

function heb_ry(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebRy[i];
    };
    
    return heb_(check);
    
};

function heb_j(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebJ[i];
    };
    
    return heb_(check);
    
};

function heb_cw(request) {

    function check(value) {
    return value==request;
    };
    
    function heb_(name) {
    var i = hebName.findIndex(name);
    return hebCw[i];
    };
    
    return heb_(check);
    
};